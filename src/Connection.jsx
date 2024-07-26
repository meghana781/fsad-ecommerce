// src/Connection.js
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Form from "./form";
import Register from "./Register";

export const UserContext = createContext();

function Connection() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [reg, setReg] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = () => {
        setLoggedIn(true);
        navigate('/login'); // Navigate to /login
        console.log("successful login");
    };

    const handleReg = () => {
        setReg(true);
        navigate('/register'); // Navigate to /register
        console.log('registered');
    };

    return (
        <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
            <>
                <div>
                    {loggedIn === false && reg === false ?
                        <div>
                            <button type='button' onClick={handleLogin}>Login</button>
                            <button type="button" onClick={handleReg}>Register</button>
                        </div>
                        : loggedIn ? <Form /> : <Register />
                    }
                </div>
            </>
        </UserContext.Provider>
    );
}

export default Connection;
