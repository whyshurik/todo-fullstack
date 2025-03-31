export const fetchTodos = async (userId, setTodos) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks/${userId}`, {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`},
    });
    const data = await response.json();
    setTodos(data);
};
export const fetchOneTodo = async (userId, taskId, setFoundTodo) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks/${userId}/${taskId}`, {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`},
    })
    const data = await response.json();
    setFoundTodo(data)
}

export const addTodo = async (userId, title, description, status, setTodos) => {
    const token = localStorage.getItem("token");
    console.log(status)
    const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks/${userId}`, {
        method: "POST",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
        body: JSON.stringify({title, description, status}),
    });
    const newTask = await response.json();
    setTodos(prevTodos => [...prevTodos, newTask]);
};

export const updateTodo = async (userId, taskId, title, description, status, setTodos) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks/${userId}/${taskId}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
        body: JSON.stringify({title, description, status}),
    });
    setTodos(prevTodos => [...prevTodos]);
}

export const deleteTodo = async (userId, taskId, setTodos) => {
    const token = localStorage.getItem("token");
    await fetch(`${process.env.REACT_APP_API_URL}/tasks/${userId}/${taskId}`, {
        method: "DELETE",
        headers: {Authorization: `Bearer ${token}`},
    });

    setTodos(prevTodos => prevTodos.filter(todo => todo._id !== taskId));
};