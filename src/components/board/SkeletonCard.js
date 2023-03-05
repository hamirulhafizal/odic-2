import { Box, Skeleton, useMediaQuery, useTheme } from '@mui/material';
import MainCard from 'components/ui-component/cards/MainCard';
import React from 'react';

const SkeletonCard = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <MainCard
        sx={{
          width: matchDownSM ? '100%' : '550px',
          boxShadow: '1px 2px 5px -1px rgb(0 0 0 / 64%) !important',
          borderColor: 'transparent'
        }}
      >
        <Box
          flexDirection={'column'}
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between'
          }}
        >
          <Skeleton variant="rectangular" width="100%" height={150} sx={{ borderRadius: '5px' }} />
        </Box>
      </MainCard>
    </>
  );
};

export default SkeletonCard;
