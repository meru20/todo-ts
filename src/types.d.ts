type Todo ={
    id: number;
    text: string;
    completed: boolean;
    alert: boolean;
};
// type AddTodos = (newTodo: string) => void;

// type UpdateTodo = (selectedTodo:Todo) => void;

type InitialStateType={
    todos: Todo[];
    todo: Todo[];
    getTodos: () => void;
    addTodos: (newTodo:  string) => void;
    updateTodo: (selectedTodo:Todo) => void;
   
}