import React, { useState } from "react";
import {TodoListItem} from "./TodoListItem";


interface Props {
  initialTodos: Todo[],
  toggleTodo: ToggleTodo
}

export const TodoList: React.FC<Props> = ({initialTodos, toggleTodo}) => {
  
  return (
      <ul>
        {initialTodos.map((t) => (
          <TodoListItem key={t.text} todo={t} toggleTodo={toggleTodo} ></TodoListItem>
        ))}
      </ul>
  )
}