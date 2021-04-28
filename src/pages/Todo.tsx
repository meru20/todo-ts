import React, { FormEvent, useEffect, useContext,useState} from 'react';
import {GlobalContext} from '../contex/ContextApi';

const Todo = () =>{
    const { getTodos, todo,addTodos } = useContext(GlobalContext)
    const [todoItem, setTodoItem] = useState<string>('');
    useEffect(() => {
        getTodos() ;
        
      },[])
     
         const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
          e.preventDefault();
          addTodos(todoItem);
          console.log('added',todoItem);
          console.log('todo',todo);
          setTodoItem('');
        };
    return (
        <div id='todo'>
        <div className='row my-3'>
          <div className='col'>
            <form action=''>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                  value={todoItem}
                  onChange={e => setTodoItem(e.target.value)}
                />
                <div className='input-group-append'>
                  <button className='btn btn-secondary' onClick={handleSubmit} >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='row'>
                <ul className='list-group'>
                    {todo.map((t, index) => {
                        return(
                            <li className='list-group-item' key= {index}>
                                {t.text}
                            </li>
                        )

                    })}
                    
                </ul>
            </div>
      </div>
    
    );
  }
  
  export default Todo;