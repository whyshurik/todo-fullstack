
export const isAuthenticated = () => !!localStorage.getItem("token");
export const isAdmin = () => JSON.parse(localStorage.getItem("user"))?.role === "admin";



export const login = async (username, password, cb) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        cb();
        return true;
    }
    return false;
};

export const register = async (username, password) => {
    await fetch(`${process.env.REACT_APP_API_URL}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });
};

export const logout = (cb) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    cb();
};
