import React from "react";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

export default function Note({id,text,deleteNote}) {
    return(
        <>
        <div className="note">
            <div className="note__body">
                {text}
            </div>
            <div className="note__footer" style={{justifyContent: "flex-end"}}>
                <ClearOutlinedIcon 
                    className="note__delete"
                    aria-hidden="true"
                    onClick={() => deleteNote(id)}
                />
            </div>
        </div>
        </>
    );
}