import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface Props {
    addTodo: AddTodo
}

export const AddTodoForm = ({addTodo}: Props) => {

    const [text, setText] = useState('');

    return (
        <div>
            <form style={{margin: "30px", display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
                <TextField type="text" value={text} onChange={(e) => {setText(e.target.value);}} id="outlined-basic" label="Outlined" variant="outlined" />
               <div style={{margin: "10px"}}>
                <Button type="submit" color="primary" variant="contained" onClick={(e) => { 
                    e.preventDefault();
                    console.log(text);
                    addTodo(text);
                    setText("");  
                    }}
                >
                    Add
                </Button>
                </div>
            </form>
        </div>
    )
}