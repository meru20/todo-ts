import React, {createContext, useReducer} from 'react';
import {todoData} from '../data/todoData';




    const intialState = {
        todos: todoData,
       todo : [],
        getTodos: () => {},
        addTodos: () => {},
        updateTodo: () => {},
        

    }

    const appReducer = (state: any ,action: any) => {
        
        switch(action.type) {
            case 'GET_TODOS':
                return state;
            case 'ADD_TODOS':
                
                return  {...state, todos: [...state.todos , action.payload]};  

            case 'UPDATE_TODO':
                return  {...state, todos: action.payload}   
            default:
                return state;
        }
    
    }

    export const GlobalContext = createContext<InitialStateType>(intialState);

    export const GlobalProvider: React.FC = ({children}) => {
        const [state , dispatch] = useReducer(appReducer,intialState)
    //    const [todos, setTodos] = useState<Todo[]>(todoData);
        

        const getTodos = () => {
            try{
                
    
                    dispatch({type:'GET_TODOS'})
              
            }
            catch(e) {
                console.log(e);
            }
        }
        const addTodos = (todo: string) => {
            try{
                const newTodo: Todo= {
                     // not really unique - but fine for this example
                     id: Math.random(),
                    text: todo,
                    completed: false,
                    alert: false,
                  }
                  console.log('vie', newTodo);
                
    
                    dispatch({type:'ADD_TODOS', payload: newTodo})
              
            }
            catch(e) {
                console.log(e);
            }
        }
        const updateTodo= (selectedTodo : Todo) => {
            
            try {
                const updated = state.todos.map((todo: Todo, index: number) => {
                    if (selectedTodo === todo) {
                      return { ...todo, completed: !todo.completed };
                    }
                    return todo;
                  });
                  dispatch({type:'UPDATE_TODO', payload: updated})

            }
            catch(e) {
                console.log(e);
            }
        }

        return (
            <GlobalContext.Provider value={{  updateTodo, todos: state.todos, todo: state.todo ,  getTodos , addTodos}}>
                {children} {/**<AppRouter/> */}
    
            </GlobalContext.Provider>
        )
    }
