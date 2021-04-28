import {GlobalProvider} from './contex/ContextApi';
import AppRouter from './router/AppRouter';

import './App.css';


const App = () =>{
  return (
    <GlobalProvider>
      <AppRouter/>

       

    </GlobalProvider>
   
  
  );
}

export default App;
