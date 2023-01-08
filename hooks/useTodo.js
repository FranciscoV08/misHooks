import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const init = () => {
    // console.log(JSON.parse(localStorage.getItem('todos')))
    //JSON.parse transforma a arreglo de objeto
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    const todosCount = () =>{
        return  todos.length
    }

    const pendingTodosCount = () =>{
        return  todos.filter( todo => !todo.done).length
    }

    useEffect(() => {
        //JSON.stringify transforma a JSON
        // console.log(JSON.stringify( todos ))

        localStorage.setItem('todos', JSON.stringify( todos ));

    }, [todos])


    const handleNewTodo = ( todo ) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }

        //funcion para mandar la action
        dispatch( action )
    }

    const handleDeletTodo = (id) =>{


        // console.log(id)
        dispatch({
            type: 'Remove Todo',
            payload: id
        });
    }

    const handeToggleTodo = (id) => {
        console.log({id})
        dispatch({
            type: 'Toggle Todo',
            payload: id
        });
    }


  return {
      todos,
      handleNewTodo,
      handleDeletTodo,
      handeToggleTodo,
      todosCount,
      pendingTodosCount
  }



}
