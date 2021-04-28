import * as React from 'react';
import TodoList from './TodoList';



interface TodoProps {
    todos: Todo[];
    updateTodo:(selectedTodo:Todo) => void;
  }

const TodoListPage: React.FC<TodoProps> = ({ todos, updateTodo}) => {
 
    return (
      <div id='todo-list'>
        <div className='row'>
        <div className='col'>
                <ul className='list-group'>
                    {todos.map((t, index) => {
                        return(
                       <TodoList todo={t} updateTodo={updateTodo} key={index}/>
                        )

                    })}
                    
                </ul>
            </div>
        </div>
      </div>
    );
  };
  
  export default TodoListPage;