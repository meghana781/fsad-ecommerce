// src/Register.js
import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from './CreatingContext';

function Register() {
    const idRef = useRef(null);
    const emailRef = useRef(null);
    const branchRef = useRef(null);
    const yearRef = useRef(null);
    const passwordRef = useRef(null);
    const [gender, setGender] = useState('Female');
    const navigate = useNavigate();
    const { setUser, users, setUsers } = useContext(UserContext);

    const formSubmit = (event) => {
        event.preventDefault();

        const userData = {
            id: idRef.current.value,
            email: emailRef.current.value,
            branch: branchRef.current.value,
            year: yearRef.current.value,
            gender: gender,
            password: passwordRef.current.value,
        };

        setUsers([...users, userData]);
        setUser(userData);
        navigate('/login');
    };

    const getGender = (e) => {
        setGender(e.target.value);
    };

    return (
        <div className="container" style={{ marginLeft: "45%", color: 'black' }}>
            <h3>Register</h3>
            <p>Provide your details to login</p>
            <form onSubmit={formSubmit}>
                <h6>College ID</h6>
                <input type="text" placeholder="College ID" ref={idRef} />
                <h6>Password</h6>
                <input type="password" placeholder="Password" ref={passwordRef} />
                <h6>Email Address</h6>
                <input type="email" placeholder="Email address" ref={emailRef} />
                <h6>Branch</h6>
                <select ref={branchRef}>
                    <option value="">Select options</option>
                    <option value="IT">IT</option>
                    <option value="CSE">CSE</option>
                    <option value="Mech">Mech</option>
                    <option value="EEE">EEE</option>
                </select>
                <h6>Year</h6>
                <select ref={yearRef}>
                    <option value="">Select option</option>
                    <option value="1st year">1st year</option>
                    <option value="2nd year">2nd year</option>
                    <option value="3rd year">3rd year</option>
                    <option value="4th year">4th year</option>
                </select>
                <h6>Gender</h6>
                <div>
                    <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={getGender} /> Male
                    <input style={{ marginLeft: '10px' }} type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={getGender} /> Female
                    <input style={{ marginLeft: '10px' }} type="radio" name="gender" value="Other" checked={gender === 'Other'} onChange={getGender} /> Other
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
