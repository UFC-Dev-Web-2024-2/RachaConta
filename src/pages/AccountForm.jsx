// AccountForm.js
import React, { useContext, useState } from 'react';
import { Box, Typography, TextField, Button, Card, CardActionArea, Avatar, InputAdornment } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { AppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';

const AccountForm = () => {
  const { state, addAccount } = useContext(AppContext);
  const { user, friends } = state;
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [total, setTotal] = useState('');
  const [selectedFriends, setSelectedFriends] = useState([]);

  const handleFriendToggle = (friendUsername) => {
    if (selectedFriends.includes(friendUsername)) {
      setSelectedFriends(selectedFriends.filter(f => f !== friendUsername));
    } else {
      setSelectedFriends([...selectedFriends, friendUsername]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !total || isNaN(total) || selectedFriends.length === 0) {
      alert('Preencha todos os campos corretamente e selecione pelo menos um amigo.');
      return;
    }
    const newAccount = {
      id: Date.now().toString(),
      title,
      total: parseFloat(total),
      participants: [
        {
          username: user.username,
          name: user.name,
          avatarBgColor: '#9c27b0',
          paid: false
        },
        ...friends.filter(f => selectedFriends.includes(f.username)).map(f => ({
          username: f.username,
          name: f.name,
          avatarBgColor: f.avatarBgColor,
          paid: false
        }))
      ]
    };
    addAccount(newAccount);
    navigate('/accounts');
  };

  return (
    <>
      <Header user={user} />
      <Box sx={{ p: 2, mt: 12, maxWidth: 600, mx: 'auto' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Crie uma conta para dividir com seus amigos
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Titulo da conta"
            placeholder="Digite o titulo da conta"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <InfoIcon />
                </InputAdornment>
              )
            }}
          />
          <TextField
            label="Total da conta"
            placeholder="Digite o total da conta"
            fullWidth
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <InfoIcon />
                </InputAdornment>
              )
            }}
          />
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Selecione os amigos:
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: 2, mb: 2 }}>
            {friends.map((friend) => {
              const isSelected = selectedFriends.includes(friend.username);
              return (
                <Card
                  key={friend.username}
                  variant="outlined"
                  sx={{
                    p: 1,
                    borderColor: isSelected ? 'primary.main' : 'grey.300',
                    boxShadow: isSelected ? 3 : 0,
                    cursor: 'pointer'
                  }}
                  onClick={() => handleFriendToggle(friend.username)}
                >
                  <CardActionArea>
                    <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
                      <Avatar sx={{ bgcolor: friend.avatarBgColor, mr: 1 }}>
                        {friend.username.charAt(0).toUpperCase()}
                      </Avatar>
                      <Box>
                        <Typography variant="body2">{friend.name}</Typography>
                        <Typography variant="caption">@{friend.username}</Typography>
                      </Box>
                    </Box>
                  </CardActionArea>
                </Card>
              );
            })}
          </Box>
          <Button variant="contained" type="submit" fullWidth>
            Dividir igualmente
          </Button>
        </form>
      </Box>
    </>
  );
};

export default AccountForm;
