import * as React from 'react';
import {  useEffect, useContext,useState} from 'react';
import {GlobalContext} from '../contex/ContextApi';



interface AddTodoProps {
    addTodos: (newTodo: string) => void;
    
   
    

  }

const Todo:React.FC<AddTodoProps>  = ({addTodos}) =>{
    const { getTodos} = useContext(GlobalContext)
     const [todoItem, setTodoItem] = useState<string>('');
    useEffect(() => {
        getTodos() ;
        
      },[])

   
     
         const handleSubmit = (e: React.FormEvent, todoItem: Todo | any) => {
          e.preventDefault();
          addTodos(todoItem);
          console.log('added',todoItem);
          setTodoItem('');
          //console.log('todo',todo);
         
        };
    return (
        <div id='todo'>
        <div className='row my-3'>
          <div className='col'>
            <form action='' onSubmit={(e) => handleSubmit(e, todoItem)}>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                 
                  value={todoItem}
                onChange={e => setTodoItem(e.target.value)}
                  
                   
                />
                <div className='input-group-append'>
                  <button className='btn btn-secondary' type='submit' >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    
    );
  }
  
  export default Todo;