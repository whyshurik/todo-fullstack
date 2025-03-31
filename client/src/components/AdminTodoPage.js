import {logout} from "../services/auth";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import {addTodo, deleteTodo, fetchOneTodo, fetchTodos, updateTodo} from "../services/api";
import {useEffect, useState} from "react";
import TodoList from "./TodoLIst";

const AdminTodoPage = () => {
    const [todos, setTodos] = useState([]);
    const [userId, setUserId] = useState("");
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [queryUserId, setQueryUserId] = useState("");
    const [queryUserTodos, setQueryUserTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => {
        const storedUserId = user._id;
        setUserId(storedUserId);
        if (storedUserId) {
            fetchTodos(storedUserId, setTodos);
        }
    }, [userId, user, editTodo]);

    const handleAddTodo = (title, description, status) => {
        addTodo(userId, title, description, status, setTodos);
    };

    const handleEditTodo = (title, description, status) => {
        updateTodo(editTodo.createdBy, editTodo._id, title, description, status, setTodos);
        setEditTodo(null); // Clear the edit mode after saving
    };
    return (
        <div>
            <h2>Todo List</h2>
            <p>Welcome, {user.username}</p>
            <button onClick={() => logout(() => window.location.href = "/login")}>
                Logout
            </button>
            <h3>{editTodo ? `Edit Todo #${editTodo._id}` : "New Todo"}</h3>
            <TodoForm
                initialData={editTodo}
                onSubmit={editTodo ? handleEditTodo : handleAddTodo}
            />
            <TodoList userId={userId} setTodos={setTodos} todos={todos} setEditTodo={setEditTodo}/>
            <h2>Find Todos By User Id</h2>
            <input
                value={queryUserId}
                onChange={(e) => setQueryUserId(e.target.value)}
                placeholder="Enter User ID"
            />
            <button onClick={() => fetchTodos(queryUserId, setQueryUserTodos)}>
                Find
            </button>
            {queryUserTodos && <TodoList userId={queryUserId} setTodos={setQueryUserTodos} todos={queryUserTodos} setEditTodo={setEditTodo}/>}


        </div>
    );
}
export default AdminTodoPage