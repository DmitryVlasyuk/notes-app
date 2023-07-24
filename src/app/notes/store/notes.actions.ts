import { NoteDto } from "../types/note-dto.type";

export function addItem(payload: NoteDto) {
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