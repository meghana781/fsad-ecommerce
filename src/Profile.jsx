import React, { useContext } from 'react';
import { UserContext } from './CreatingContext';

function Profile(){
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>Profile Page</h1>
            {user ? (
                <div>
                    <p>College ID: {user.id}</p>
                    <p>Email: {user.email}</p>
                    <p>Branch: {user.branch}</p>
                    <p>Year: {user.year}</p>
                    <p>Gender: {user.gender}</p>
                </div>
            ) : (
                <p>Please log in to see your profile.</p>
            )}
        </div>
    );
};

export default Profile;
