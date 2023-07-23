import update from 'react-addons-update';
import { TagDto } from '../types/tag-dto.type';


const initialState: TagDto[] = [{
    text: '#Edit',
}]

const tagsReducer = (state = initialState, action: { type: string, payload: TagDto }) => {
    switch (action.type) {
        case "TAG_ADD": {
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