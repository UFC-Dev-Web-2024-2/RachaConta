import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { LoginOutlined } from '@mui/icons-material';

const Header = ({
	user,
	avatarBgColor = 'yellow.main',
	textColor = 'darkGray.main',
	pageTitle,
	centered = false,
	isRegister = false
}) => {
	const navigate = useNavigate();

	const firstNameInitial = user?.name ? user.name.split(' ')[0][0] : '';

	const handleLogout = () => {
		navigate('/');
	};

	return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: centered ? "center" : "space-between",
          width: "100%",
          bgcolor: "secondary.main",
        }}
      >
		{isRegister && <Box sx={{ width: "100px" }} />}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {user ? (
            <>
              <Avatar sx={{ bgcolor: avatarBgColor, mr: 1, color: textColor }}>
                {firstNameInitial}
              </Avatar>
              <Box sx={{ display: "flex", flexDirection: "column", mr: 2 }}>
                <Typography variant="body1" sx={{ color: textColor }}>
                  {user.name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: textColor, fontWeight: "bold" }}
                >
                  @{user.username}
                </Typography>
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography variant="body1" sx={{ color: textColor, fontSize: "2rem", fontWeight: "bold" }}>
                  {pageTitle}
                </Typography>
              </Box>
            </>
          )}
        </Box>

        {user ? (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              color="darkGray"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
            >
              Sair
            </Button>
          </Box>
        ) : ( isRegister && (

			<Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              color="darkGray"
              startIcon={<LoginOutlined />}
              onClick={handleLogout}
            >
              Entrar
            </Button>
          </Box>
		)
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
