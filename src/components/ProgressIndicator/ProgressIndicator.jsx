import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const ProgressIndicator = ({ value }) => {
  const textColor = value < 100 ? '#FF9914' : '#29BF12';
  const varColor = value < 100 ? 'warning' : 'success';
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', boxShadow: 3, borderRadius: '50%', p: 0.4 }}>
      <CircularProgress variant="determinate" color={varColor} value={value} size={60} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" sx={{ color: textColor, fontWeight: 'bold' }}>
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProgressIndicator;
