import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Auth';
import ManageFriends from './components/Friends/ManagerFriends';
import ManagePayment from './components/Payment/ManagerPayments';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/friends" element={<ManageFriends />} />
        <Route path="/payments" element={<ManagePayment />} />
      </Routes>
    </Router>
  );
};

export default App;