import { Textarea } from "@mui/joy";
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../app/notes/store/notes.actions";
import { NotesState } from "../app/notes/types/note-state.type";
import { addTag } from "../app/tags/store/tags.actions";
import { TagDto } from "../app/tags/types/tag-dto.type";

export default function NotesAdd() {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    const extractTags = (text: string) => {
        const tagRegex = /#(\w+)/g;
        const tags = text.match(tagRegex);
        return tags || []
    };
    return (
        <Grid container direction="row">
            <Textarea
                required
                placeholder="Add todo item"
                value={inputValue}
                sx={{width: '500px'}}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.shiftKey === false) {
                        e.preventDefault()
                        if (!inputValue) return;
                        console.log(extractTags(inputValue))
                        const tags = extractTags(inputValue)
                        tags.map(tag => {
                            dispatch(addTag({ id: 0, text: tag.toLowerCase() }))
                        })
                        dispatch(addItem({ id: 0, text: inputValue }

                        ));
                        setInputValue("");
                    }
                }}
                onChange={(e) => {
                    setInputValue(e.target.value)
                }}
            />
            {/* <button
                onClick={() => {
                    
                }}
            >
                ADD
            </button> */}
        </Grid>
    )
}


