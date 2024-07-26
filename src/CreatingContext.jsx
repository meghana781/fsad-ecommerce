import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Current logged-in user
    const [users, setUsers] = useState([]); // List of registered users

    return (
        <UserContext.Provider value={{ user, setUser, users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
};
