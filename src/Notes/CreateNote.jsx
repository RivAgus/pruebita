import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

export default function CreateNote({text, textHandler, saveNote}){
    const charLimit = 100;
    const charLeft = charLimit - text.length;
    return(
        <div className="note">
            <textarea
                cols={"10"}
                rows={"5"}
                placeholder="Enter your note"
                maxLength={"100"}
                value={text}
                onChange={textHandler}
            ></textarea>

            <div className="note__footer">
                <span className="label"> {charLeft} left</span>
                <button className="note__save" onClick={saveNote} >Save note</button>
            </div>
            
            <LinearProgress 
                className="char__progress"
                variant="determinate"
                value={charLeft}
                sx={{
                    backgroundColor: `#FDD9E2`,
                    "& .MuiLinearProgress-bar":{
                        backgroundColor:`#11245E`
                    }
                }}
            />
        </div>
    );
}