import { createRouter, createWebHistory } from 'vue-router';
import NoteList from '../components/NoteList.vue';
import NoteDetails from '../components/NoteDetails.vue';

const routes = [
    { path: '/', component: NoteList },
    { path: '/note/:id', component: NoteDetails }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
