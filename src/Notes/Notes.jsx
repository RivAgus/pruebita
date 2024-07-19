import React, { useEffect, useState } from "react";
import Note from "./Note"
import CreateNote from "./CreateNote";
import {v4 as uuid} from "uuid";

export default function Notes(){
    const [text, setText] = useState("");
    const [notes, setNotes] = useState([]);

    const textHandler = (e) => {
        setText(e.target.value);
    }
    const saveNote = () =>{
        setNotes((prevState)=>[
            ...prevState,
            {
                id: uuid(),
                text: text
            }
        ]);
        setText("")
    }

    const deleteNote = (id)=>{
        const filterNotes = notes.filter(note => note.id !== id);
        setNotes(filterNotes);
    }

    //Recuperamos las notas del localStorage
    //se hace al iniciar el componente y si se re-renderiza, se vuelve a hacer
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Notes"));
        if(data) setNotes(data);
    },[])

    //Acá guardamos la nota solo cuando detectamos un cambio en [notes]
    //y esto fuerza un renderizado
    useEffect(() => {
        localStorage.setItem("Notes", JSON.stringify(notes));
    },[notes])

    return(
        <div className="notes">
            {notes.map((note)=>(
                <Note 
                    key={note.id} //el MAP siempre exige una key!
                    id={note.id}
                    text={note.text} 
                    deleteNote={deleteNote}
                />
            ))}
            <CreateNote text={text} textHandler={textHandler} saveNote={saveNote} />
        </div>
    );
}
