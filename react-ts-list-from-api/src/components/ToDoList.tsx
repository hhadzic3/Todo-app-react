import React, { useState } from "react";
import List from '@material-ui/core/List';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

interface Props {
  initialTodos: Todo[],
  toggleTodo: ToggleTodo
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export const TodoList: React.FC<Props> = ({initialTodos, toggleTodo}) => {
  
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List dense className={classes.root}>
    {initialTodos.map((todo) => {
      const labelId = `checkbox-list-secondary-label-${todo.todoText}`;
      return (
        <ListItem key={todo.id} button>
          <ListItemText id={labelId} primary={`${todo.todoText}`} />
          <ListItemSecondaryAction>
            <Checkbox
              edge="end"
              onChange={handleToggle(todo.id)}
              checked={checked.indexOf(todo.id) !== -1}
              inputProps={{ 'aria-labelledby': labelId }}
            />
          </ListItemSecondaryAction>
        </ListItem>
      );
    })}
  </List>
    

  )
}