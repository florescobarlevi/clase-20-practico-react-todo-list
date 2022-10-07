import React, {useState} from "react";


const Todo = () => {
    
    //destructurin de array = para desarmar un array ??
    // llamamos al state
    // este estado trae al array
    const [todos, setTodos] = useState([])

    //este estado trae a las tareas del input formato string
    const [todo, setTodo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            completed: false,
        }
        setTodos([...todos].concat(newTodo))
        setTodo("")
    }

    const deleteTodo = (id) => {
        const updatedTodos = [...todos].filter((todo) => todo.id !== id)
        setTodos(updatedTodos) 
    }

    //dentro del return va codigo js
    return(
        <div>
            <h2>Nuestras tareas</h2>
            <h3>Que tenes que hacer hoy?</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ingresa nueva tarea" onChange={(e) => setTodo(e.target.value)}> </input>
                <button type="submit">Agregar</button>

            </form>

            {
                todo.map((todo) => 
                <div>
                    <div>{todo.text}
                        <button onClick={() => deleteTodo(todo.id)}>Quitar tarea </button>
                    </div>
                </div>
                )
            }
        </div>
    )

}

export default Todo