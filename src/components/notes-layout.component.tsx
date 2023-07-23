import { Box, Button, Checkbox, IconButton, ToggleButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, editItem } from "../app/notes/store/notes.actions";
import { NotesState } from "../app/notes/types/note-state.type";
import { TagState } from "../app/tags/types/tag-state.type";
import Textarea from '@mui/joy/Textarea';
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";

export default function NotesLayout() {
    const [activeTag, setActiveTag] = useState<string[]>([])

    function NotesTags() {
        const tags = useSelector((state: TagState) => state.tags);
        console.log(tags)
        return (
                <Box sx={{ display: 'flex-row', gap: 2, width: '500px' }}>
                    {tags.map(tag => (
                        <Button
                        sx={{margin: '5px'}}
                            variant="contained"
                            key={tag.id}
                            onClick={() => {
                                if (activeTag.includes(tag.text.toLowerCase())) {
                                    setActiveTag(activeTag.filter((e) => e !== tag.text))
                                } else {
                                    setActiveTag([...activeTag, tag.text])
                                }
                            }}>{tag.text}
                        </Button>
                    ))}
                </Box>
        )
    }

    function NotesDisplay() {
        const [colorValue, setColorValue] = useState('success');
        const dispatch = useDispatch();
        const note = useSelector((state: NotesState) => state.notes);
        console.log(note)
        return (<>
            {
                note.map(e => {
                    if (activeTag.every((tag) => e.text.toLowerCase().includes(tag))) {
                        return (
                            <Box
                                key={e.id}
                            >

                                <Textarea

                                    sx={{ width: '500px', margin: '10px' }}
                                    color={'success'}
                                    minRows={2}
                                    required
                                    size="lg"
                                    variant="solid"
                                    // readOnly={readOnlyValue}
                                    value={e.text}
                                    onChange={(i) => {
                                        dispatch(editItem({
                                            id: e.id,
                                            text: i.target.value
                                        }));
                                    }}
                                    endDecorator={<>
                                        <Typography>
                                            {e.text.length} character(s)
                                        </Typography>
                                        <IconButton
                                            sx={{ position: 'absolute', right: '0', bottom: '0' }}
                                            onClick={() => {
                                                dispatch(deleteItem(e));
                                            }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </>
                                    }
                                >
                                </Textarea>
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

