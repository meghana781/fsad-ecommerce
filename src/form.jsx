// src/Form.js
import React, { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './CreatingContext';

const Form = () => {
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        if (email !== '' && password !== '') {
            setUser({ email, username: 'johndoe123' });
            navigate('/apicart'); // Navigate to the API cart page after login
        } else {
            console.log("Enter the details properly");
        }
    };

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Enter email" ref={emailRef} /><br />
                <input type="password" placeholder="password" ref={passRef} /><br />
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default Form;
