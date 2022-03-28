import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);
interface Props {
    todo: Todo,
    toggleTodo: ToggleTodo
}

export const TodoListItem: React.FC<Props> = ({todo,toggleTodo}) => {
    const classes = useStyles();

    /*const [checked, setChecked] = React.useState([1]);
  
    const handleToggle = (value: number) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };*/

    return (
        <ListItem style={{ textDecoration: todo.complete ? 'line-through' : undefined }} button>
        <ListItemText id={todo.text} primary={todo.text} />
        <ListItemSecondaryAction>
            <Checkbox
            edge="end"
            checked={todo.complete}
            onClick={() => {
                toggleTodo(todo);
            }}
            />
        </ListItemSecondaryAction>
            {/*<li>
                <label
                    style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
                    <input type="checkbox" checked={todo.complete}
                    onClick={() => {
                        toggleTodo(todo);
                    }}
                    />{' '}
                    {todo.text}
                    </label>
                </li>
                */}
        </ListItem>
        
    )
}