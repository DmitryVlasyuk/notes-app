import { NoteDto } from "./note-dto.type";

export interface NoteNewState {
    note: NoteDto,
    newText: string,
}