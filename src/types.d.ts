type Todo = {
    text: string;
    completed: boolean;
    alert: boolean;
};
// type AddTodos = (newTodo: string) => void;

type UpdateTodo = (selectedTodo:Todo) => void;

type InitialStateType={
    todo: Todo[];
    getTodos: () => void;
    addTodos: (newTodo: string) => void;
   
}