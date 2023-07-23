import { TagDto } from "../types/tag-dto.type";

export function addTag(payload: TagDto) {
  return {
    type: "TAG_ADD",
    payload
  };
};

export function tagList(payload: TagDto[]) {
  return {
    type: "TAG_LIST",
    payload
  };
};

export { }