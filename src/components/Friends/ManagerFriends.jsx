import React from 'react';
import Header from '../Header/Header';

const ManageFriends = () => {
    const user = { name: 'André Torquato', username: 'andre' };
    
    return (
        <div>
            <Header user={user} />
            <h2>Manage Friends</h2>
        </div>
    );
};

export default ManageFriends;