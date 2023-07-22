import { combineReducers, configureStore } from "@reduxjs/toolkit";
import notesReducer from "./app/notes/store/notes.slice"
import { NotesState } from "./app/notes/types/note-state.type";
const rootReducer = combineReducers({
    notes: notesReducer
})


function saveToLocalStorage(state: object) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("persistantState");

        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);

    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

export const store = configureStore({ reducer: rootReducer, preloadedState: loadFromLocalStorage() });
// export const store = setupStore;
store.subscribe(() => saveToLocalStorage(store.getState()));


// export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof setupStore>;
// export type AppDispatch = AppStore['dispatch'];
