import {GlobalProvider} from './contex/ContextApi';
import Todo from './pages/Todo';
import './App.css';


const App = () =>{
  return (
    <GlobalProvider>
       <div className='container'>
      <Todo/>
      

    </div>

    </GlobalProvider>
   
  
  );
}

export default App;
