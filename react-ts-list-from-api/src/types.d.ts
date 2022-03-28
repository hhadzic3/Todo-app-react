interface Todo{
    id: number,
    text: string,
    complete: boolean
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;