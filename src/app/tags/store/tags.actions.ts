import { NoteDto } from "../../notes/types/note-dto.type";
import { TagDto } from "../types/tag-dto.type";

export function addTag(payload: TagDto) {
  return {
    type: "TAG_ADD",
    payload
  };
};

// export function tagList(payload: TagDto[]) {
//   return {
//     type: "TAG_LIST",
//     payload
//   };
// };

export function tagDelete(payload: TagDto) {
  return {
    type: "TAG_DELETE",
    payload
  };
};

export { }