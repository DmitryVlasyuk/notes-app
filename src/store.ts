import { combineReducers, configureStore } from "@reduxjs/toolkit";
import notesReducer from "./app/notes/store/notes.slice"
import tagsReducer from "./app/tags/store/tags.slice";
const rootReducer = combineReducers({
    notes: notesReducer,
    tags: tagsReducer
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
store.subscribe(() => saveToLocalStorage(store.getState()));