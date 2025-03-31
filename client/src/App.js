import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import TodoPage from "./components/TodoPage";
import PrivateRoute from "./routes/PrivateRoute";
import AdminTodoPage from "./components/AdminTodoPage";
import AdminRoute from "./routes/AdminRoute";
import {isAdmin} from "./services/auth";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login onLogin={() => window.location.href = isAdmin() ? "/admin" : "/"}/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/" element={<PrivateRoute><TodoPage/></PrivateRoute>}/>
                <Route path="/admin" element={<AdminRoute><AdminTodoPage/></AdminRoute>}/>
            </Routes>
        </Router>
    );
};

export default App;