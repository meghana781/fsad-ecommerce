// src/APIcart.js
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

function APIcart() {
    const { cartCounts, setCartCounts, data, setData } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const resData = await res.json();
            setData(resData);
        };
        fetchData();
    }, [setData]);

    const handleProfileClick = () => {
        navigate('/profile');
    };

    const handleAddToCart = (id) => {
        setCartCounts(prevCounts => ({ ...prevCounts, [id]: (prevCounts[id] || 0) + 1 }));
    };

    const handleIncrement = (id) => {
        setCartCounts(prevCounts => ({ ...prevCounts, [id]: prevCounts[id] + 1 }));
    };

    const handleDecrement = (id) => {
        setCartCounts(prevCounts => {
            const newCounts = { ...prevCounts };
            if (newCounts[id] > 0) {
                newCounts[id] -= 1;
            }
            return newCounts;
        });
    };

    const getTotalCount = () => {
        return Object.values(cartCounts).reduce((total, count) => total + count, 0);
    };

    const navigateToCart = () => {
        navigate('/addeditems');
    };

    return (
        <>
            <button type="button" onClick={() => navigate('/')}>Logout</button>
            <button type="button" onClick={navigateToCart}>Cart ({getTotalCount()})</button>
            <button onClick={handleProfileClick}>Go to Profile</button>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'flex-start' }}>
                {data.map((item, index) => (
                    <div key={index} style={{ border: '1px solid white', width: '20%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px', padding: '10px' }} />
                        </div>
                        <h5 style={{ fontSize: '15px', margin: '5px 0' }}>{item.title}</h5>
                        <p style={{ fontSize: '15px', margin: '5px 0' }}>{item.category}</p>
                        <p style={{ fontSize: '15px', margin: '5px 0' }}>{item.rating.rate} ({item.rating.count})</p>
                        <p style={{ fontSize: '14px', margin: '5px 0' }}>${item.price}</p>
                        {cartCounts[item.id] > 0 ? (
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <button onClick={() => handleDecrement(item.id)}>-</button>
                                <span style={{ margin: '0 10px' }}>{cartCounts[item.id]}</span>
                                <button onClick={() => handleIncrement(item.id)}>+</button>
                            </div>
                        ) : (
                            <button onClick={() => handleAddToCart(item.id)}>Add to cart</button>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default APIcart;
