<template>
  <div class="flex flex-column justify-content-center align-items-center">
    <div class="flex" style="width: 25rem;">
      <Button label="Назад" link @click="goBack()" />
      <h2 class="text-center">Информация о заметке</h2>
    </div>

    <Card style="width: 25rem;" class="flex">
      <template #title>{{ note?.title }}</template>
      <template #content>
        <p class="m-0">
          {{ note?.content }}
        </p>
      </template>
      <template #footer>
        <div class="flex gap-3 mt-1">
          <Button label="Удалить" severity="danger" outlined class="w-full" @click="visible=true" />
        </div>
      </template>
    </Card>

    <Dialog v-model:visible="visible" modal header="Подтвердение действий" :style="{ width: '25rem' }">
      <span class="p-text-secondary block mb-5">Вы уверены?</span>

      <div class="flex justify-content-end gap-2">
        <Button type="button" label="Отменить" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="Подтвердить" @click="deleteNote()"></Button>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';

const noteId = ref(null);
const note = ref({});
const visible = ref(false);
const store = useStore();
const router = useRouter();
const route = useRoute();

onMounted(() => {
  noteId.value = route.params.id;
  loadNote();
});

const loadNote = () => {
  note.value = store.getters.getNoteById(noteId.value);
};

const deleteNote = () => {
  store.commit('deleteNote', note.value);
  visible.value = false;
  router.push('/');
};

const goBack = () => {
  router.go(-1); // Перемещение на один шаг назад в истории маршрута
};
</script>
