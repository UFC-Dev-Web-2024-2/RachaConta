import React from 'react';
import { AppContext } from '../../AppContext';
import { Box, Typography, Button, Card, Avatar } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import Header from '../Header/Header';

const AccountDetails = ({ onPaymentSuccess }) => {
  const { id } = useParams();
  const { state, updateAccount } = React.useContext(AppContext);
  const account = state.accounts.find(acc => acc.id === id);

  const handlePay = () => {
    const currentUser = state.user;
    const updatedParticipants = account.participants.map(p => {
      if (p.username === currentUser.username && !p.paid) {
        return { ...p, paid: true, paymentDate: new Date().toISOString() };
      }
      return p;
    });
    const updatedAccount = { ...account, participants: updatedParticipants };
    updateAccount(updatedAccount);
    onPaymentSuccess(updatedAccount);
  };

  if (!account) {
    return <Typography>Conta não encontrada.</Typography>;
  }

  const total = account.participants.length;
  const paidCount = account.participants.filter(p => p.paid).length;
  const percentage = (paidCount / total) * 100;
  const share = account.total / total;

  return (
    <>
    <Header user={state.user}/>
    <Box sx={{ p: 2, mt: 12, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Minhas contas</Typography>
      <Card sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <ProgressIndicator value={percentage} />
          <Box>
            <Typography variant="subtitle1">{account.title}</Typography>
            <Typography variant="body2">R$ {account.total.toFixed(2)}</Typography>
          </Box>
        </Box>
        <Box sx={{ borderLeft: '2px solid #ccc', pl: 2, mb: 2 }}>
          {account.participants.filter(p => p.paid).map((p, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: p.avatarBgColor, mr: 1 }}>
                  {p.username.charAt(0).toUpperCase()}
                </Avatar>
                <Typography variant="body2">
                  {p.name} pagou R$ {share.toFixed(2)}
                </Typography>
              </Box>
              <Typography variant="caption" color="text.secondary">
                {new Date(p.paymentDate).toLocaleString()}
              </Typography>
            </Box>
          ))}
        </Box>
        <Button variant="contained" onClick={handlePay}>
          Pagar
        </Button>
      </Card>
    </Box>
    </>
  );
};

export default AccountDetails;
