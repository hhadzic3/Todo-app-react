import React, { useEffect, useState } from "react";
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
import * as ApiService from './ApiService/ApiService'
import { Footer } from "./components/Footer";

const initialTodos: Todo[] = [
  {
    id:1,
    userId:1,
    todoText: 'Walk the dog',
    complete: false,
  }
];

function App() {

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    ApiService
        .get("/todos", "/1")
        .then(res => {
            setTodos(res);
        })
        .catch(err => {
            console.log(err);
        })
  }, []); // will only run once (like componentDidMount in classes)

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

  const addTodo: AddTodo = (todoText: string) => {
    const newTodo = {id: 6, userId:1 ,todoText, complete: false };
    setTodos([...todos, newTodo]);
    console.log(todos);
  };

  const TodoForm = (
    <div>
      <AddTodoForm addTodo={addTodo}></AddTodoForm>
        <div style={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
          <TodoList initialTodos={todos} toggleTodo={toggleTodo}></TodoList>
        </div>
    </div>
  )

  return (
    <BrowserRouter>
      <ButtonAppBar/>
      <Routes>
        <Route path="/" element={<SignIn></SignIn>} >
          <Route path="/login" element={<SignIn></SignIn>}></Route>
        </Route>
        <Route path="register" element={<SignUp></SignUp> } />

        <Route path="todo" element={TodoForm} />
      
      </Routes>

      <Box mt={8}>
        <Footer/>
      </Box>

    </BrowserRouter>
  );
}

export default App;
