import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header/Header';
import FriendsList from '../components/FriendsList/FriendsList';
import AddFriend from '../components/AddFriend/AddFriend';
import FeedbackModal from '../components/FeedbackModal/FeedbackModal';
import { AppContext } from '../AppContext';

const Friends = () => {
    const { state, } = React.useContext(AppContext);
    const [view, setView] = useState('list');
    const [friends, setFriends] = useState(state.friends);
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
            <Header user={state.user} />
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

export default Friends;