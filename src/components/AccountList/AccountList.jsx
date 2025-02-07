import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { Box, Typography, Button, Card, CardActionArea, Avatar, Badge } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import Header from '../Header/Header';

const AccountList = () => {
  const { state } = useContext(AppContext);
  const { user, accounts } = state;
  const navigate = useNavigate();

  const myAccounts = accounts.filter(acc =>
    acc.participants.some(p => p.username === user.username)
  );

  const handleAccountClick = (id) => {
    navigate(`/accounts/${id}`);
  };

  return (
    <>
      <Header user={user} />
      <Box sx={{ p: 2, mt: 12, maxWidth: 600, mx: 'auto' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Minhas contas</Typography>
          <Button variant="contained" startIcon={<AddIcon />} onClick={() => navigate('/accounts/new')}>
            Dividir conta
          </Button>
        </Box>
        {myAccounts.map(account => {
          const total = account.participants.length;
          const paidCount = account.participants.filter(p => p.paid).length;
          const percentage = (paidCount / total) * 100;
          return (
            <CardActionArea key={account.id} onClick={() => handleAccountClick(account.id)}>
              <Card sx={{ mb: 2, p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="subtitle1">{account.title}</Typography>
                    <Typography variant="body2">R$ {account.total.toFixed(2)}</Typography>
                    <Box sx={{ display: 'flex', mt: 1 }}>
                      {account.participants.map((p, index) => (
                        <Badge
                          key={index}
                          overlap="circular"
                          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                          badgeContent={
                            p.paid ?
                              <CheckCircleIcon sx={{ fontSize: 14, color: 'green' }} /> :
                              <HourglassEmptyIcon sx={{ fontSize: 14, color: 'orange' }} />
                          }
                        >
                          <Avatar sx={{ bgcolor: p.avatarBgColor, width: 32, height: 32, mr: 1 }}>
                            {p.username.charAt(0).toUpperCase()}
                          </Avatar>
                        </Badge>
                      ))}
                    </Box>
                  </Box>
                  <Box>
                    <ProgressIndicator value={percentage} />
                  </Box>
                </Box>
              </Card>
            </CardActionArea>
          );
        })}
      </Box>
    </>
  );
};

export default AccountList;
