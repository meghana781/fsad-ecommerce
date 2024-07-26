// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from './Table';
import Navigation from './Navigation';
import Connection from './Connection';
import APIcart from './APIcart';
import Addeditems from './Addeditems';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import { UserProvider } from './CreatingContext';
import { CartProvider } from './CartContext';

const App = () => {
    return (
        <UserProvider>
            <CartProvider>
                <BrowserRouter>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Connection />} />
                        <Route path="/db" element={<Table />} />
                        <Route path="/apicart" element={<APIcart />} />
                        <Route path="/addeditems" element={<Addeditems />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </UserProvider>
    );
};

export default App;
