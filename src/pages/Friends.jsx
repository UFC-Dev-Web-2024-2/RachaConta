import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header/Header';
import FriendsList from '../components/FriendsList/FriendsList';
import AddFriend from '../components/AddFriend/AddFriend';
import FeedbackModal from '../components/FeedbackModal/FeedbackModal';
import { AppContext } from '../AppContext';

const Friends = () => {
    const { state, addFriend } = React.useContext(AppContext);
    const [view, setView] = useState('list');
    const [modalOpen, setModalOpen] = useState(false);

    const handleAddFriend = async (username) => {
        const newFriend = {
            name: username.charAt(0).toUpperCase() + username.slice(1),
            username,
            avatarBgColor: '#4caf50',
            userId: state.user.id
        };
        await addFriend(newFriend);
        setView('list');
        setModalOpen(true);
    };

    if (state.isLoading) return <div>Carregando amigos...</div>;

    return (
        <>
            <Header user={state.user} />
            <Box sx={{ p: 2, mt: 12, maxWidth: 600, mx: 'auto' }}>
                {view === 'list' && (
                    <FriendsList friends={state.friends} onAddFriendClick={() => setView('add')} />
                )}
                {view === 'add' && (
                    <AddFriend onAdd={handleAddFriend} onCancel={() => setView('list')} />
                )}
                <FeedbackModal open={modalOpen} onClose={() => setModalOpen(false)} />
            </Box>
        </>
    );
};

export default Friends;