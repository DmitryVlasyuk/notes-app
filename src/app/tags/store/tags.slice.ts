import update from 'react-addons-update';
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

            case "TAG_LIST":
                return [
                    ...state,
                    action.payload
                ];

        //     case "LISTITEM_DELETE":
        //         return state.filter((note) => note.id !== action.payload.id)


        default: return state;
    };
}
export default tagsReducer;