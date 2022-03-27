import React, { useState } from "react";
//import './App.css';
import {TodoList} from './components/ToDoList';
import { AddTodoForm } from './components/AddTodoForm';
import ButtonAppBar from "./components/AppBar";
import SignIn from "./components/Login";
import SignUp from "./components/Register";


const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  }
];

function App() {

  const [todos, setTodos] = useState(initialTodos);
  
  const toggleTodo : ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
    console.log(todos)
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
    console.log(todos);
  };

  return (
    <>
      <ButtonAppBar></ButtonAppBar>
      <SignIn></SignIn>
      <SignUp></SignUp>
      <AddTodoForm addTodo={addTodo}></AddTodoForm>
      <TodoList initialTodos={todos} toggleTodo={toggleTodo}></TodoList>
    </>
  );
}

export default App;
