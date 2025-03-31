import {useEffect, useState} from "react";
import {addTodo, deleteTodo, fetchOneTodo, fetchTodos, updateTodo} from "../services/api";
import {logout} from "../services/auth";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import TodoList from "./TodoLIst";

const TodoPage = () => {
    const [todos, setTodos] = useState([]);
    const [userId, setUserId] = useState("");
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [editTodo, setEditTodo] = useState(null);
    const [todoFindId, setTodoFindId] = useState("");
    const [foundTodo, setFoundTodo] = useState("")


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
        updateTodo(userId, editTodo._id, title, description, status, setTodos);
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
            <h2>Find Todo By Id</h2>
            <input
                value={todoFindId}
                onChange={(e) => setTodoFindId(e.target.value)}
                placeholder="Enter Todo ID"
            />
            <button onClick={() => fetchOneTodo(userId, todoFindId, setFoundTodo)}>
                Find
            </button>
            {foundTodo && <Todo todo={foundTodo}/>}
        </div>
    );
};

export default TodoPage;
