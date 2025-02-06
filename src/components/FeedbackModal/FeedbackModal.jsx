import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const FeedbackModal = ({ open, onClose }) => {
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
          Amigo adicionado com sucesso!<br />
          agora vocês podem compartilhar<br />
          suas contas.
        </Typography>
        <Button variant="contained" onClick={onClose}>
          Voltar
        </Button>
      </Box>
    </Modal>
  );
};

export default FeedbackModal;
