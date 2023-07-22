import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../app/notes/store/notes.actions";
import { NotesState } from "../app/notes/types/note-state.type";

export default function NotesAdd() {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    return (
        <>
            <input
                placeholder="Add todo item"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                onClick={() => {
                    if (!inputValue) return;
                    dispatch(addItem( {id: 0, text: inputValue }));
                    setInputValue("");
                }}
            >
                +
            </button>
        </>
    )
}
