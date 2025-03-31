import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../services/auth";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        await register(username, password);
    };

    return (
        <div>
            <h2>Register</h2>
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleRegister}>Register</button>
            <Link to="/login">Go to Login</Link>
        </div>
    );
};

export default Register;
