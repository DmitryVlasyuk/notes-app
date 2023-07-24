// import { createSlice } from "@reduxjs/toolkit";

import { NoteDto } from "../types/note-dto.type";
import update from 'react-addons-update';


const initialState: NoteDto[] = [{
    id: 0 as number,
    text: 'You can #edit me, #delete me :(, #add friends to me, #sort by tags, and #add tags, enjoy :)',
}]

function nextNoteId(notes: NoteDto[]) {
    const maxId = notes.reduce((maxId, note) => Math.max(note.id, maxId), -1)
    return maxId + 1
}


const notesReducer = (state = initialState, action: { type: string, payload: NoteDto }) => {
    switch (action.type) {
        case "LISTITEM_ADD": {
            action.payload.id = nextNoteId(state)
            return [
                ...state,
                action.payload
            ];
        };

        case "LISTITEM_EDIT":
            return update(
                state,
                {
                    [action.payload.id]: {
                        text: { $set: action.payload.text }
                    }
                }
            )

        case "LISTITEM_DELETE":
            return state.filter((note) => note.id !== action.payload.id)


        default: return state;
    };
}
export default notesReducer;