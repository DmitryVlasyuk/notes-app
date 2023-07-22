import { NoteDto } from "../types/note-dto.type";
import { NoteNewState } from "../types/note-new-state.type";

export function addItem(payload: NoteDto) {
    // const payload: NoteDto = {
    //     id: 0 as number,
    //     text
    // }
    return {
      type: "LISTITEM_ADD",
      payload
    };
  };
  
  export function editItem(payload: NoteDto) {
    return {
      type: "LISTITEM_EDIT",
      payload
    };
  };
  
  export function deleteItem (payload: NoteDto) {
    return {
      type: "LISTITEM_DELETE",
      payload
    };
  };
  
export{}