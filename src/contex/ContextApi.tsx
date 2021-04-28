import React, {createContext, useReducer,} from 'react';
import {todoData} from '../data/todoData';




    const intialState = {
        todo: todoData,
        getTodos: () => {},
        addTodos: () => {},
        

    }

    const appReducer = (state: any ,action: any) => {
        
        switch(action.type) {
            case 'GET_TODOS':
                return state;
            case 'ADD_TODOS':
                return  {...state, todo: action.payload};  
            default:
                return state;
        }
    
    }

    export const GlobalContext = createContext<InitialStateType>(intialState);

    export const GlobalProvider: React.FC = ({children}) => {
        const [state , dispatch] = useReducer(appReducer,intialState)

        const getTodos = () => {
            try{
                
    
                    dispatch({type:'GET_TODOS'})
              
            }
            catch(e) {
                console.log(e);
            }
        }
        const addTodos = (todo: string ) => {
            try{
                
    
                    dispatch({type:'ADD_TODOS', todo})
              
            }
            catch(e) {
                console.log(e);
            }
        }

        return (
            <GlobalContext.Provider value={{  todo: state.todo ,  getTodos , addTodos}}>
                {children} {/**<AppRouter/> */}
    
            </GlobalContext.Provider>
        )
    }
