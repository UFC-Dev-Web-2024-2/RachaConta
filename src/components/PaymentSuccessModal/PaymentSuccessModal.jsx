import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import { useNavigate } from 'react-router-dom';

const PaymentSuccessModal = ({ open, account, onClose }) => {
  const navigate = useNavigate();

  if (!account) return null;

  const total = account.participants.length;
  const paidCount = account.participants.filter(p => p.paid).length;
  const percentage = (paidCount / total) * 100;

  const handleBack = () => {
    onClose()
    navigate("/accounts")
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box 
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          outline: 'none',
          textAlign: 'center'
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          {account.title}
        </Typography>
        <ProgressIndicator value={percentage} />
        <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
          Conta paga com sucesso🎊
        </Typography>
        <Button variant="contained" onClick={handleBack}>
          Ok
        </Button>
      </Box>
    </Modal>
  );
};

export default PaymentSuccessModal;
