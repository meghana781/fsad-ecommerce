// src/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCounts, setCartCounts] = useState({});
    const [data, setData] = useState([]);

    return (
        <CartContext.Provider value={{ cartCounts, setCartCounts, data, setData }}>
            {children}
        </CartContext.Provider>
    );
};
