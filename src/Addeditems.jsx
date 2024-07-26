// src/Addeditems.js
import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { CartContext } from './CartContext';

function Addeditems() {
    const { cartCounts, data } = useContext(CartContext);
    const navigate = useNavigate();

    const cartItems = data.filter(item => cartCounts[item.id] > 0);

    return (
        <>
            <button type="button" onClick={() => navigate('/apicart')}>Back to Shop</button>
            <h1>Your Cart</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'flex-start' }}>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index} style={{ border: '1px solid white', width: '20%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px', padding: '10px' }} />
                            </div>
                            <h5 style={{ fontSize: '15px', margin: '5px 0' }}>{item.title}</h5>
                            <p style={{ fontSize: '15px', margin: '5px 0' }}>{item.category}</p>
                            <p style={{ fontSize: '15px', margin: '5px 0' }}>{item.rating.rate} ({item.rating.count})</p>
                            <p style={{ fontSize: '14px', margin: '5px 0' }}>${item.price}</p>
                            <p style={{ fontSize: '15px', margin: '5px 0' }}>Quantity: {cartCounts[item.id]}</p>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default Addeditems;
