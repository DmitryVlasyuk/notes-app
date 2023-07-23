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
        <>
            <input
                placeholder="Add todo item"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value)
                }}
            />
            <button
                onClick={() => {
                    if (!inputValue) return;
                    console.log(extractTags(inputValue))
                    const tags = extractTags(inputValue)
                    tags.map(tag =>{
                        dispatch(addTag({text: tag}))
                    })
                    dispatch(addItem({ id: 0, text: inputValue }

                    ));
                    setInputValue("");
                }}
            >
                +
            </button>
        </>
    )
}


