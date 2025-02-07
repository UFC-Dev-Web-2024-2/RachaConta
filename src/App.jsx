import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ManageFriends from './components/Friends/ManagerFriends';
import ManagePayment from './components/Payment/ManagerPayments';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/friends" element={<ManageFriends />} />
        <Route path="/payments" element={<ManagePayment />} />
      </Routes>
    </Router>
  );
};

export default App;