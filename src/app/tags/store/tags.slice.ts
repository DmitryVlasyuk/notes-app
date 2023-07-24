import update from 'react-addons-update';
import { useSelector } from 'react-redux';
import { store } from '../../../store';
import { NoteDto } from '../../notes/types/note-dto.type';
import { NotesState } from '../../notes/types/note-state.type';
import { TagDto } from '../types/tag-dto.type';


const initialState: TagDto[] = [{
    id: 0 as number,
    text: '#edit',
}]

function nextTagId(notes: TagDto[]) {
    const maxId = notes.reduce((maxId, note) => Math.max(note.id, maxId), -1)
    return maxId + 1
}


const tagsReducer = (state = initialState, action: { type: string, payload: TagDto }) => {
    switch (action.type) {
        case "TAG_ADD": {
            action.payload.id = nextTagId(state)
            for (let i = 0; i < state.length; i++) {
                if (state[i].text === action.payload.text) {
                    return state
                }
            }
            return [
                ...state,
                action.payload
            ];

        };

        // case "TAG_LIST":
        //     return [
        //         ...state,
        //         action.payload
        //     ];

        case "TAG_DELETE": {
            return state.filter((tag) => tag.text !== action.payload.text)
        }


        default: return state;
    };
}
export default tagsReducer;