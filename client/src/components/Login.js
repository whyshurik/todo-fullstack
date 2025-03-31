import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/auth";

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const success = await login(username, password, onLogin);
        if (!success) {
            alert("Login failed");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    );
};
export default Login