import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LogoutIcon from '@mui/icons-material/Logout';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = ({
	user,
	avatarBgColor = '#f50057',
	textColor = 'white'
}) => {
	const navigate = useNavigate();
	const location = useLocation();

	const firstNameInitial = user?.name ? user?.name?.split(' ')[0][0] : '';

	const handleLogout = () => {
		navigate('/');
	};

	const currentTab = (location.pathname === '/friends' || (location.pathname === '/accounts' || location.pathname.toString().includes('/accounts')))
		? location.pathname
		: false;

	const handleTabChange = (event, newValue) => {
		navigate(newValue);
	};

	return (
		<AppBar position="fixed">
			<Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', bgcolor: 'secondary.main' }}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Avatar sx={{ bgcolor: avatarBgColor, mr: 1, color: textColor }}>
						{firstNameInitial}
					</Avatar>
					<Box sx={{ display: 'flex', flexDirection: 'column', mr: 2 }}>
						<Typography variant="body1" sx={{ color: textColor }}>
							{user?.name}
						</Typography>
						<Typography variant="caption" sx={{ color: textColor, fontWeight: 'bold' }}>
							@{user?.username}
						</Typography>
					</Box>
				</Box>

				<Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
					<Tabs
						value={currentTab}
						onChange={handleTabChange}
						textColor="inherit"
						indicatorColor="primary"
					>
						<Tab label="Meus Amigos" value="/friends" />
						<Tab label="Minhas Contas" value="/accounts" />
					</Tabs>
				</Box>

				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Button
						variant="contained"
						color="darkGray"
						startIcon={<LogoutIcon />}
						onClick={handleLogout}
					>
						Sair
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;