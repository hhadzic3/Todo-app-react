import React, { useState } from "react";
//import './App.css';
import {TodoList} from './components/ToDoList';
import { AddTodoForm } from './components/AddTodoForm';
import ButtonAppBar from "./components/AppBar";
import SignIn from "./components/Login";
import SignUp from "./components/Register";
import Box from '@material-ui/core/Box';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Footer } from "./components/Footer";

const initialTodos: Todo[] = [
  {
    id:1,
    text: 'Walk the dog',
    complete: false,
  },
  {
    id:2,
    text: 'Write app',
    complete: false,
  },
  {
    id:3,
    text: 'Write apdvdvfdvp',
    complete: false,
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
    const newTodo = {id: 6, text, complete: false };
    setTodos([...todos, newTodo]);
    console.log(todos);
  };

  return (
    <BrowserRouter>
      <ButtonAppBar/>
      <Routes>
        <Route path="/" element={<SignIn></SignIn>} >
          <Route path="/login" element={<SignIn></SignIn>}></Route>
        </Route>

        <Route path="register" element={<SignUp></SignUp> } />
        
      </Routes>
        <AddTodoForm addTodo={addTodo}></AddTodoForm>
        <div style={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
          <TodoList initialTodos={todos} toggleTodo={toggleTodo}></TodoList>
        </div>
      <Box mt={8}>
        <Footer/>
      </Box>
    </BrowserRouter>
  );
}

export default App;
