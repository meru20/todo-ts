import React from 'react';
interface TodoListProps {
    todo: Todo;
    updateTodo:(selectedTodo:Todo) => void;
}
const TodoList: React.FC<TodoListProps> = ({ todo, updateTodo}) => {
    return (
      <li className='list-group-item'>
        <label htmlFor=''>
          <input
            type='checkbox'
            checked={todo.completed}
             onChange={() => updateTodo(todo)}
          />
        </label>{' '}
        <span className={todo.completed ? 'text-danger complete' : undefined}>
          {todo.text}
        </span>
      </li>
    );
  };
  
  export default TodoList;