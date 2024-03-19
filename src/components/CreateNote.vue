<template>
  <Card class="mt-4 cursor-pointer">
    <template #title>Добавление новой заметки</template>
    <template #content>
      <div class="w-full" style="max-width: 20rem">
        <div class="field">
          <IconField>
            <InputIcon>
              <i class="pi pi-user" />
            </InputIcon>
            <InputText id="title" v-model="title" type="text" placeholder="Наименование заметки" @blur="titleBlur" />
          </IconField>
          <span v-if="titleError" class="text-red-500">{{ 'Наименование не должно быть пустым' }}</span>
        </div>
        <div class="field">
          <IconField>
            <InputIcon>
              <i class="pi pi-envelope" />
            </InputIcon>
            <InputText id="content" v-model="content" type="text" placeholder="Содержание заметки" @blur="contentBlur" />
          </IconField>
          <span v-if="contentError" class="text-red-500">{{ 'Содержание не должно быть пустым' }}</span>
        </div>
      </div>
    </template>
    <template #footer>
      <Button label="Создать" @click="onSubmit"/>
    </template>
  </Card>
</template>

<script setup>
import { useForm, useField } from 'vee-validate';
import { useStore } from 'vuex';
import {required} from "@vee-validate/rules";

const store = useStore();

const { handleSubmit } = useForm();
const { value: title, errorMessage: titleError, handleBlur: titleBlur } = useField('title', required);
const { value: content, errorMessage: contentError, handleBlur: contentBlur } = useField('content', required);

const onSubmit = handleSubmit((values) => {
  store.commit('createNote', values);
  resetForm();
});

const resetForm = () => {
  title.value = '';
  content.value = '';
};

// import { defineComponent } from 'vue';
// import { useForm, useField } from 'vee-validate';
// import { required } from '@vee-validate/rules';
// import {useStore} from "vuex";
//
// export default defineComponent({
//   setup() {
//     const store = useStore();
//     const { handleSubmit } = useForm();
//     const { value: title, errorMessage: titleError, handleBlur: titleBlur } = useField(
//         'title',
//         required
//     );
//     const { value: content, errorMessage: contentError, handleBlur: contentBlur } = useField(
//         'content',
//         required
//     );
//
//     const onSubmit = handleSubmit((values) => {
//       console.log(values);
//       store.commit('createNote', values)
//     });
//
//
//     return { title, titleError, titleBlur, content, contentError, contentBlur, onSubmit };
//   },
// });
</script>
