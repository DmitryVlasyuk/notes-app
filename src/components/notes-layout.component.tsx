import { Box, Button, IconButton } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, editItem } from "../app/notes/store/notes.actions";
import { NotesState } from "../app/notes/types/note-state.type";
import { TagState } from "../app/tags/types/tag-state.type";

export default function NotesLayout() {
    const [activeTag, setActiveTag] = useState([''])

    function NotesTags() {
        const tags = useSelector((state: TagState) => state.tags);
        console.log(tags)
        return (
            <>
                {tags.map(tag => (
                    <Box key={tag.text}>
                        <Button onClick={() => {
                            setActiveTag([...activeTag, tag.text])
                            console.log(activeTag)
                        }}>{tag.text}</Button>
                    </Box>
                ))}

            </>
        )
    }

    function NotesDisplay() {
        const [readOnlyValue, setReadOnlyValue] = useState(true);
        const dispatch = useDispatch();
        const note = useSelector((state: NotesState) => state.notes);
        console.log(note)

        return (
            <>
                {note.map(e => (
                    // if ( activeTag.every((tag) => e.text.includes(tag))){}
                    <Box key={e.id}
                    >

                        <input readOnly={readOnlyValue} value={e.text}
                            onChange={(i) => {
                                dispatch(editItem({
                                    id: e.id,
                                    text: i.target.value
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

    return (
        <>
            <NotesTags />
            <NotesDisplay />
        </>
    )
}

