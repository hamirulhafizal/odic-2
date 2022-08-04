import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Avatar, Badge, CardActions, Divider, List, ListItem, ListItemText, ListItemIcon, Stack, useMediaQuery } from '@mui/material';
import useAuth from 'hooks/useAuth';
import { Button } from '@mui/material';
import SimpleList from 'components/ui-elements/basic/UIList/SimpleList';
import VerifiedIcon from '@mui/icons-material/Verified';

import InboxIcon from '@mui/icons-material/Inbox';
import PoolIcon from '@mui/icons-material/Pool';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import MosqueIcon from '@mui/icons-material/Mosque';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import SingleBedRoundedIcon from '@mui/icons-material/SingleBedRounded';
import ShowerRoundedIcon from '@mui/icons-material/ShowerRounded';

import { useRouter } from 'next/router';

const CardProperty = ({ itemData, agentData }) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));
  const { user } = useAuth();
  const router = useRouter();

  const { photo, phone, firstName, lastName, user_name } = agentData;

  console.log('itemData', itemData);

  return (
    <>
      <Card
        sx={{
          display: 'flex',
          left: '235px',
          top: '2109px',
          flexWrap: 'wrap',
          flexDirection: matchDownSM ? 'column' : 'row',
          background: '#FFFFFF',
          boxShadow: '0px 0px 6px 4px rgba(0, 0, 0, 0.15)',
          borderRadius: '10pX',
          justifyContent: 'center',
          p: 4,
          mb: 4
        }}
      >
        <Box sx={{ width: { xs: '-webkit-fill-available', md: '40%' } }}>
          <CardMedia
            onClick={() => {
              router.push(`/listing/${itemData?.id}`);
            }}
            sx={{
              cursor: 'pointer',
              width: '100%',
              height: '50VH',
              objectFit: 'contain',
              background: 'grey'
            }}
            component="img"
            image={itemData?.photo_1 != null ? itemData?.photo_1 : `/assets/images/noImg.webp`}
            alt="Live from space album cover"
          />

          <Stack direction="row" alignItems="center">
            <Stack direction="column" sx={{ pt: 2 }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={<VerifiedIcon sx={{ fontSize: '1.5em' }} color="secondary" />}
              >
                <Avatar
                  onClick={() => {
                    router.push(`/${user_name}`);
                  }}
                  alt="User 1"
                  src={user?.photo || photo}
                  sx={{
                    borderRadius: '16px',
                    margin: '5px auto 0',
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'transparent',
                    borderRadius: '100%',
                    cursor: 'pointer'
                  }}
                />
              </Badge>
            </Stack>

            <Stack direction="column" sx={{ pl: 2, pt: { xs: 3 } }}>
              <Typography
                onClick={() => {
                  router.push(`/${user_name}`);
                }}
                variant="h4"
                color="main"
                sx={{ textTransform: 'capitalize', cursor: 'pointer' }}
              >
                {user?.firstName || firstName} {user?.lastName || lastName}
              </Typography>
              <Typography variant="subtitle2" color="secondary">
                Posted On 14 April 2022
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <Box sx={{ width: { xs: '-webkit-fill-available', md: '60%' }, pl: { md: 2 } }}>
          <CardContent sx={{ flex: '1 0 auto', p: { xs: 0, md: 2 }, pt: { xs: 2 } }}>
            <Stack direction="column" justifyContent={matchDownLG ? 'center' : 'start'}>
              <Typography
                onClick={() => {
                  router.push(`/listing/${itemData?.id}`);
                }}
                variant="h3"
                color="main"
                sx={{ textTransform: 'capitalize', cursor: 'pointer' }}
              >
                {itemData?.title}
              </Typography>
              <Typography variant="h5" color="main" sx={{ textTransform: 'capitalize' }}>
                {itemData?.description}
              </Typography>
              <Typography variant="h4" color="secondary" sx={{ pt: 2 }}>
                RM {itemData?.price} / month
              </Typography>

              <List>
                <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap ', py: 1, px: 0 }}>
                  <ListItemText
                    sx={{
                      display: 'flex',
                      justifyContent: 'start',

                      '& .MuiListItemText-primary': {
                        pr: '10%'
                      }
                    }}
                    primary={
                      <>
                        <Stack display="flex" direction="row" alignItems="center">
                          <ListItemIcon>
                            <ShowerRoundedIcon />
                          </ListItemIcon>
                          {itemData?.bathrooms} bathrooms
                        </Stack>
                      </>
                    }
                    secondary={
                      <>
                        <Stack display="flex" direction="row" alignItems="center">
                          <ListItemIcon>
                            <LocalParkingIcon />
                            {itemData?.carpark} Car Park
                          </ListItemIcon>
                        </Stack>
                      </>
                    }
                  />
                  {/* <ListItemText
                    sx={{
                      display: 'flex',
                      justifyContent: 'start',

                      '& .MuiListItemText-primary': {
                        pr: '10%'
                      }
                    }}
                    primary={
                      <>
                        <Stack display="flex" direction="row" alignItems="center">
                          <ListItemIcon>
                            <SingleBedRoundedIcon />
                          </ListItemIcon>
                          {itemData?.bedrooms} bedrooms
                        </Stack>
                      </>
                    }
                  /> */}
                </ListItem>
              </List>
            </Stack>
          </CardContent>

          <Divider sx={{ width: '90%', position: 'relative', left: '2%' }} />

          <CardActions sx={{ p: 0, py: 2, pl: matchDownSM ? 0 : 2 }}>
            <Button variant="contained" size="medium" sx={{ backgroundColor: '#28933F', color: 'white' }}>
              <a target="_blank" href={`https://wasap.my/${phone}/${itemData.title}`} rel="noopener noreferrer">
                Whatsapp
              </a>
            </Button>
            {/* <Button size="medium" color="secondary" variant="contained" sx={{ color: 'white' }}>
              Make Offer
            </Button> */}
          </CardActions>
        </Box>
      </Card>
    </>
  );
};

export default CardProperty;
