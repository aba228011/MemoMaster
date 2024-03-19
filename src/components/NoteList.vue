<template>
  <div>
    <h2 class="text-center">Список заметок</h2>

    <Card v-for="note in notes" :key="note.id" class="mt-4 cursor-pointer">
      <template #title>{{ note.title }}</template>
      <template #content>
        <div class="m-0 flex justify-content-between">
          <div>{{ note.content }}</div>
          <div class="mr-1">
            <Button type="button" severity="secondary" label="Открыть" @click="selectNote(note)"></Button>
          </div>
        </div>
      </template>
    </Card>

    <CreateNote />
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import CreateNote from './CreateNote.vue';

const store = useStore();
const router = useRouter();

const notes = store.getters.getNotes;

const selectNote = (note) => {
  router.push(`/note/${note.id}`);
};
</script>
