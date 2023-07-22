import { Box, IconButton } from "@mui/material";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { isArray } from "util";
import { addItem, deleteItem, editItem } from "../app/notes/store/notes.actions";
import { NoteDto } from "../app/notes/types/note-dto.type";
import { NotesState } from "../app/notes/types/note-state.type";
import NotesAdd from "./notes-add.component";

export default function NotesDisplay() {
    const [inputValue, setInputValue] = useState("");
    const [readOnlyValue, setReadOnlyValue] = useState(true);
    const dispatch = useDispatch();
    const note = useSelector((state: NotesState) => state.notes);

    return (
        <>
            {note.map(e => (
                <Box
                    className={e.text && "complete"}
                    key={e.id}
                >

                    <input readOnly={readOnlyValue} value={e.text}
                        onChange={(i) => {
                            dispatch(editItem({
                                id: e.id,
                                text: i.target.value,
                            }));
                        }}
                        onKeyDown={event => {
                            if (event.key === 'Enter') {
                                setReadOnlyValue(true)

                            }
                        }}
                    />
                    <IconButton
                        onClick={() => {
                            setReadOnlyValue(!readOnlyValue)
                        }}
                    >
                        <span>Edit</span>
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            dispatch(deleteItem(e));
                        }}
                    >
                        <span>Delete</span>
                    </IconButton>
                </Box>
            ))}
        </>
    )
}


