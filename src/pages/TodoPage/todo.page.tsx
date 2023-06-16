import { useState } from "react";
import ToDo from "../../components/ToDo";
import "../../App.css";
import { Helmet } from "react-helmet";



function ToDoApp() {
    const [todoTitle, setTodoTitle] = useState("");
    const [todos, setTodos] = useState([
        {
            title: "default",
            isDone: false
        }
    ]);


    function handleAddTodo() {
        const newTodo = {
            title: todoTitle,
            isDone: false
        }
        setTodos([newTodo, ...todos])
        setTodoTitle("");
    }

    return (

        <div>
            <Helmet >
                <title>Todo App</title>
                <meta name="description" content="A simple Todo App" />
            </Helmet>
            <h1>Todo App</h1>


            <div>
                <input
                    type="text"
                    placeholder="tache"
                    value={todoTitle}
                    onChange={(e) => setTodoTitle(e.target.value)}
                />
                <button onClick={handleAddTodo} disabled={todoTitle.length < 1} >Ajouter</button>
            </div>

            {
                todos.map((todo, index) => {
                    return (
                        <ToDo
                            key={index}
                            id={index + 1}
                            title={todo.title}
                            isDone={todo.isDone}
                        />
                    )
                })
            }

        </div>
    )
}

export default ToDoApp;


