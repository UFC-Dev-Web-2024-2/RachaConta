import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const AddFriend = ({ onAdd, onCancel }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onAdd(username.trim());
      setUsername('');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Adicionar amigo
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome de usuário"
          placeholder="Digite o nome do usuário"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ mb: 2, bgcolor: 'background.paper' }}
        />
        <Button variant="contained" type="submit" fullWidth sx={{ mb: 2 }}>
          Adicionar
        </Button>
      </form>
      <Button variant="outlined" fullWidth onClick={onCancel}>
        Voltar
      </Button>
    </Box>
  );
};

export default AddFriend;
