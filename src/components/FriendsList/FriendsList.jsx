// FriendsList.js
import React from 'react';
import { Box, Typography, Button, Card, CardActionArea, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const FriendCard = styled(Card)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  marginBottom: theme.spacing(2)
}));

const FriendsList = ({ friends, onAddFriendClick }) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Amigos</Typography>
        <Button variant="contained" onClick={onAddFriendClick}>
          Adicionar amigo
        </Button>
      </Box>
      <Box>
        {friends.map((friend, index) => (
          <CardActionArea key={index}>
            <FriendCard>
              <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                <Avatar 
                  sx={{ 
                    bgcolor: friend.avatarBgColor || 'primary.main', 
                    color: '#fff', 
                    mr: 2 
                  }}
                >
                  {friend.name ? friend.name.charAt(0) : ''}
                </Avatar>
                <Box>
                  <Typography variant="body1">{friend.name}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    @{friend.username}
                  </Typography>
                </Box>
              </Box>
            </FriendCard>
          </CardActionArea>
        ))}
      </Box>
    </Box>
  );
};

export default FriendsList;
