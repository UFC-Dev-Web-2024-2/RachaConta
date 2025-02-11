import React from 'react';
import Header from '../Header/Header';

const ManagePayment = () => {
    const user = {
        name: 'André Torquao',
        username: 'andre'
    };
    return (
        <div>
            <Header user={user}/>
            <h2>Manage Payments</h2>
        </div>
    );
};

export default ManagePayment;