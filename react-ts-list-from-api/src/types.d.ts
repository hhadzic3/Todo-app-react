interface Todo{
    id: number,
    userId: number,
    todoText: string,
    complete: boolean
}

interface User{
    id: number,
    email: string,
    password: string
}

interface UserAddModel{
    email: string,
    password: string
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;
