import { Box, Button, Checkbox, IconButton, ToggleButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, editItem } from "../app/notes/store/notes.actions";
import { NotesState } from "../app/notes/types/note-state.type";
import { TagState } from "../app/tags/types/tag-state.type";
import Textarea from '@mui/joy/Textarea';
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";
import { addTag, tagDelete } from "../app/tags/store/tags.actions";
import { NoteDto } from "../app/notes/types/note-dto.type";
import { TagDto } from "../app/tags/types/tag-dto.type";

export default function NotesLayout() {
    const [activeTag, setActiveTag] = useState<string[]>([]);

    function NotesTags() {
        const tag = useSelector((state: TagState) => state.tags)
        return (
            <Box sx={{ display: 'flex-row', gap: 2, width: '500px' }}>
                {tag.map(tag => (
                    <Button
                        sx={{ margin: '5px' }}
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
        const note = useSelector((state: NotesState) => state.notes);
        const tag = useSelector((state: TagState) => state.tags)
        const dispatch = useDispatch();
        return (<>
            {
                note.map(e => {
                    if (activeTag.every((tag) => e.text.toLowerCase().includes(tag))) {
                        const missingTags = findMissingTags(tag, note)
                        missingTags.map(missing => {
                            dispatch(tagDelete({ id: missing.id, text: missing.text.toLowerCase() }))
                        })
                        tag.map(tag => {
                            console.log(tag.text)
                            console.log(addTagToNotes(tag.text, note))
                            if (addTagToNotes(tag.text, note).length !== 0) {
                                addTagToNotes(tag.text, note).map(note => {
                                    dispatch(editItem({
                                        id: note.id,
                                        text: note.text
                                    }))
                                })
                            }
                        })
                        return (
                            <Textarea
                                key={e.id}
                                sx={{ width: '500px', margin: '10px' }}
                                color={'success'}
                                minRows={2}
                                required
                                size="lg"
                                variant="solid"
                                value={e.text}
                                onBlur={(i) => {
                                    const tags = extractTags(i.target.value)
                                    tags.map(tag => {
                                        dispatch(addTag({ id: 0, text: tag.toLowerCase() }))
                                    })


                                }}
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
                            />
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

function findMissingTags(tags: TagDto[], notes: NoteDto[]) {
    const noteTags = new Set<string>();
    const missingTags: TagDto[] = [];

    // Получаем все теги из записей и добавляем их в Set для уникальности
    for (const note of notes) {
        const tagRegex = /#(\w+)/g;
        const tagsInNote = note.text.toLowerCase().match(tagRegex);
        if (tagsInNote) {
            for (const tag of tagsInNote) {
                noteTags.add(tag);
            }
        }
    }

    // Проверяем каждый тег из списка всех тегов на его присутствие в записях
    for (const tag of tags) {
        if (!noteTags.has(tag.text)) {
            missingTags.push(tag);
        }
    }

    return missingTags || []
}


function addTagToNotes(tag: string, notes: NoteDto[]): NoteDto[] {
    const newTag = tag.replace(/#/g, '')
    console.log(newTag)
    const arr: NoteDto[] = []
    notes.map((note) => {
        const tagRegex = new RegExp(`(?<!#)\\b${newTag}\\b`, "gi");
        console.log('before', note.text)
        if (tagRegex.test(note.text)) {
            console.log('after', note.text)
            // Заменяем все вхождения тега в тексте на тег с символом "#"
            const txt: string = note.text.replace(tagRegex, `#${newTag}`);
            arr.push({ id: note.id, text: txt })
        }
    });
    return arr;
}

const extractTags = (text: string) => {
    const tagRegex = /#(\w+)/g;
    const tags = text.match(tagRegex);
    return tags || []
};

