import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from '../Header/Header';
import FriendsList from '../FriendsList/FriendsList';
import AddFriend from '../AddFriend/AddFriend';
import FeedbackModal from '../FeedbackModal/FeedbackModal';

const ManageFriends = () => {
    const user = { name: 'André Torquato', username: 'andre' };
    const [view, setView] = useState('list');
    const [friends, setFriends] = useState([
        { name: 'Andre', username: 'andre01', avatarBgColor: '#3f51b5' },
        { name: 'Matheus', username: 'matheus01', avatarBgColor: '#f50057' }
    ]);
    const [modalOpen, setModalOpen] = useState(false);

    const handleAddFriendClick = () => {
        setView('add');
    };

    const handleAddFriend = (username) => {
        const friend = {
            name: username.charAt(0).toUpperCase() + username.slice(1),
            username,
            avatarBgColor: '#4caf50'
        };
        setFriends([...friends, friend]);
        setView('list');
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleCancelAddFriend = () => {
        setView('list');
    };

    return (
        <>
            <Header user={user} />
            <Box sx={{ p: 2, mt: 12 , maxWidth: 600, mx: 'auto' }}>
                {view === 'list' && (
                    <FriendsList friends={friends} onAddFriendClick={handleAddFriendClick} />
                )}
                {view === 'add' && (
                    <AddFriend onAdd={handleAddFriend} onCancel={handleCancelAddFriend} />
                )}
                <FeedbackModal open={modalOpen} onClose={handleCloseModal} />
            </Box>
        </>
    );
};

export default ManageFriends;