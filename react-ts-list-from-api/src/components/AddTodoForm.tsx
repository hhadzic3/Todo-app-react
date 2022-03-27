import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Icon from '@material-ui/core/Icon';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface Props {
    addTodo: AddTodo
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

export const AddTodoForm = ({addTodo}: Props) => {
    const classes = useStyles();

    const [text, setText] = useState('');

    return (
        <div>
            <form>
               
                <TextField type="text" value={text} onChange={(e) => {setText(e.target.value);}} id="outlined-basic" label="Outlined" variant="outlined" />
               {/* <input type="text" value={text} onChange={(e) => {setText(e.target.value);}} />*/}
                
                    <Button type="submit" onClick={(e) => { 
                        e.preventDefault();
                        console.log(text);
                        
                        addTodo(text);
                        setText("");  
                        }}
                        variant="contained"
                        color="primary"
                    >
                        Add
                    </Button>
            </form>
        </div>
    )
}