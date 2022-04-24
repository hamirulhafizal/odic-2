import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'Link';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, CardMedia, Grid, Tab, Tabs, Typography } from '@mui/material';

// project imports
import Profile from 'components/users/social-profile/Profile';
import Followers from 'components/users/social-profile/Followers';
import Friends from 'components/users/social-profile/Friends';
import Gallery from 'components/users/social-profile/Gallery';
import FriendRequest from 'components/users/social-profile/FriendRequest';
import useAuth from 'hooks/useAuth';
import useConfig from 'hooks/useConfig';
import Avatar from 'components/ui-component/extended/Avatar';
import Chip from 'components/ui-component/extended/Chip';
import MainCard from 'components/ui-component/cards/MainCard';
import ImagePlaceholder from 'components/ui-component/cards/Skeleton/ImagePlaceholder';
import { gridSpacing } from 'store/constant';

// assets
import { IconFriends, IconInbox, IconPhoto, IconUserPlus, IconUsers } from '@tabler/icons';
import PersonAddTwoToneIcon from '@mui/icons-material/PersonAddTwoTone';

import { BACKEND_PATH } from 'config';
import axios from 'axios';
import { styled } from '@mui/system';

import AppBar from 'components/ui-component/extended/AppBar';
import Header from 'components/landingpage/Header';
// import ErrorPage from 'next/error';
// import Error from 'next/error';
import Error from './404';

const User1 = '/assets/images/profile/img-user.png';
const Cover = '/assets/images/profile/img-profile-bg.png';

const HeaderWrapper = styled('div')(({ theme }) => ({
  paddingTop: 30,
  overflowX: 'hidden',
  overflowY: 'clip',
  [theme.breakpoints.down('md')]: {
    paddingTop: 42
  }
}));

// ==============================|| SOCIAL PROFILE ||============================== //

const SocialProfile = () => {
  const theme = useTheme();
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const [error, setError] = useState();
  // const { user, getProfile } = useAuth();
  const { borderRadius } = useConfig();
  const router = useRouter();
  // const { tab } = router.query;
  const { user_name } = router.query;

  useEffect(() => {
    setLoading(false);

    axios
      .get(`${BACKEND_PATH}/api/v1/profile/${user_name}`)
      .then((res) => {
        setUser(res?.data);

        return res;
      })
      .catch((err) => {
        const stringErr = JSON.stringify(err);
        const error = JSON.parse(stringErr);

        setError(error);
      });
  }, []);

  console.log('user', user);

  return (
    <>
      <HeaderWrapper id="home">
        <AppBar />
      </HeaderWrapper>
      {error ? (
        <Error id="userNotFound" />
      ) : (
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <MainCard
              contentSX={{
                p: 1.5,
                paddingBottom: '0px !important',
                [theme.breakpoints.down('lg')]: {
                  textAlign: 'center'
                }
              }}
            >
              {isLoading ? (
                <ImagePlaceholder
                  sx={{
                    borderRadius: `${borderRadius}px`,
                    overflow: 'hidden',
                    mb: 3,
                    height: { xs: 85, sm: 150, md: 260 }
                  }}
                />
              ) : (
                <CardMedia component="img" image={Cover} sx={{ borderRadius: `${borderRadius}px`, overflow: 'hidden', mb: 3 }} />
              )}
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12} md={3}>
                  {isLoading ? (
                    <ImagePlaceholder
                      sx={{
                        margin: '-70px 0 0 auto',
                        borderRadius: '16px',
                        [theme.breakpoints.down('lg')]: {
                          margin: '-70px auto 0'
                        },
                        [theme.breakpoints.down('md')]: {
                          margin: '-60px auto 0'
                        },
                        width: { xs: 72, sm: 100, md: 140 },
                        height: { xs: 72, sm: 100, md: 140 }
                      }}
                    />
                  ) : (
                    <Avatar
                      alt="User 1"
                      src={user?.photo}
                      sx={{
                        margin: '-70px 0 0 auto',
                        borderRadius: '16px',
                        [theme.breakpoints.down('lg')]: {
                          margin: '-70px auto 0'
                        },
                        [theme.breakpoints.down('md')]: {
                          margin: '-60px auto 0'
                        },
                        width: { xs: 72, sm: 100, md: 140 },
                        height: { xs: 72, sm: 100, md: 140 }
                      }}
                    />
                  )}
                </Grid>
                <Grid item xs={12} md={9}>
                  <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={4}>
                      <Typography variant="h5">{user?.firstName}</Typography>
                      <Typography variant="subtitle2">One Dream Legacy</Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Grid
                        container
                        spacing={1}
                        sx={{
                          justifyContent: 'flex-end',
                          [theme.breakpoints.down('lg')]: {
                            justifyContent: 'center'
                          }
                        }}
                      >
                        <Grid item>
                          <Button variant="outlined">Message</Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default SocialProfile;
