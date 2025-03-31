import Todo from "./Todo";
import {deleteTodo} from "../services/api";
import {useState} from "react";

const TodoList = ({ todos, userId, setTodos, setEditTodo }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li>
                    <Todo todo={todo}/>
                    <button onClick={() => setEditTodo(todo)}>Edit</button>
                    <button onClick={() => deleteTodo(userId, todo._id, setTodos)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )

}
export default TodoList

