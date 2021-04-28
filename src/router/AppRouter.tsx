import Todo from '../pages/Todo';
import TodoListPage from '../pages/TodoListPage';

import { useContext} from 'react';
import {GlobalContext} from '../contex/ContextApi';
const AppRouter = () => {
    const { addTodos, todos,updateTodo} = useContext(GlobalContext)
    return (
        <div className='container'>
      <Todo addTodos={addTodos}/>
      <TodoListPage todos={todos} updateTodo={updateTodo}/>
      

    </div>
    )

}
export default AppRouter;