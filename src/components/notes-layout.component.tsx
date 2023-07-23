import { Box, Button, Checkbox, IconButton, ToggleButton } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, editItem } from "../app/notes/store/notes.actions";
import { NotesState } from "../app/notes/types/note-state.type";
import { TagState } from "../app/tags/types/tag-state.type";

export default function NotesLayout() {
    const [activeTag, setActiveTag] = useState<string[]>([])

    function NotesTags() {
        const tags = useSelector((state: TagState) => state.tags);
        console.log(tags)
        return (
            <>
                {tags.map(tag => (
                    <Box key={tag.text}>
                        <Button
                            key={tag.id}
                            onClick={() => {
                                if (activeTag.includes(tag.text.toLowerCase())) {
                                    setActiveTag(activeTag.filter((e) => e !== tag.text))
                                } else {
                                    setActiveTag([...activeTag, tag.text])
                                }
                            }}>{tag.text}
                        </Button>
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
        return (<>
            {
                note.map(e => {
                    if (activeTag.every((tag) => e.text.toLowerCase().includes(tag))) {
                        return (
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
                        )
                    }
                })
            }</>
        )
    }

    return (
        <>
            <NotesTags />
            <NotesDisplay />
        </>
    )
}

