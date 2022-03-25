import React, { useState } from "react";

interface Props {
    addTodo: AddTodo
}

export const AddTodoForm = ({addTodo}: Props) => {

    const [text, setText] = useState('');

    return (
        <div>
            <form>
                <input type="text" value={text} onChange={(e) => {setText(e.target.value);}} />
                <button type="submit" onClick={(e) => { 
                    e.preventDefault();
                    console.log(text);
                    
                    addTodo(text);
                    setText("");  
                    }} > Add </button>
            </form>
        </div>
    )
}