import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            notes: [
                { id: 1, title: 'Заметка 1', content: 'Содержание заметки 1' },
                { id: 2, title: 'Заметка 2', content: 'Содержание заметки 2' },
                { id: 3, title: 'Заметка 3', content: 'Содержание заметки 3' }
            ]
        }
    },
    mutations: {
        createNote (state, payload) {
            const id = state.notes.length + 1;
            state.notes.push({ id, ...payload });
        },
        deleteNote (state, payload) {
            const index = state.notes.findIndex(note => note.id === payload.id);
            if (index !== -1) {
                state.notes.splice(index, 1);
            }
        }
    },
    getters: {
        getNotes(state) {
            return state.notes;
        },
        getNoteById: (state) => (selectedId) => {
            return state.notes.find(item => item.id === parseInt(selectedId))
        },
    }
})
export default store;