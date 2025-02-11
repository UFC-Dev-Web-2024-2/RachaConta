import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './AppContext';
import Login from './pages/Login';
import Register from './pages/Register';
import ManageFriends from './components/Friends/ManagerFriends';
import AccountList from './components/AccountList/AccountList';
import AccountForm from './components/AccountForm/AccountForm';
import AccountDetails from './components/AccountDetail/AccountDetail';
import PaymentSuccessModal from './components/PaymentSuccessModal/PaymentSuccessModal';

const App = () => {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [modalAccount, setModalAccount] = useState(null);

  const handlePaymentSuccess = (account) => {
    setModalAccount(account);
    setPaymentModalOpen(true);
  };

  const handleCloseModal = () => {
    setPaymentModalOpen(false);
  };

  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/friends" element={<ManageFriends />} />
          <Route path="/accounts" element={<AccountList />} />
          <Route path="/accounts/new" element={<AccountForm />} />
          <Route path="/accounts/:id" element={<AccountDetails onPaymentSuccess={handlePaymentSuccess} />} />
          <Route path="*" element={<AccountList />} />
        </Routes>
        <PaymentSuccessModal open={paymentModalOpen} account={modalAccount} onClose={handleCloseModal} />
      </Router>
    </AppProvider>

  );
};

export default App;