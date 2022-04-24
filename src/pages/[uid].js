import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, CardMedia, Grid, Typography } from '@mui/material';

// project imports
import useConfig from 'hooks/useConfig';
import Avatar from 'components/ui-component/extended/Avatar';
import MainCard from 'components/ui-component/cards/MainCard';
import ImagePlaceholder from 'components/ui-component/cards/Skeleton/ImagePlaceholder';
import { gridSpacing, drawerWidth } from 'store/constant';
import AppBar from 'components/ui-component/extended/AppBar';
import FooterPage from 'components/landingpage/Footer';
import Error from './404';

// assets

import { BACKEND_PATH } from 'config';
import axios from 'axios';
import { styled } from '@mui/system';

// const User1 = '/assets/images/profile/img-user.png';
const Cover = '/assets/images/profile/img-profile-bg.png';

const headerBackground = '/assets/images/landing/header-bg.jpg';

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  ...theme.typography.mainContent,
  ...(!open && {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shorter
    })
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.shorter
    }),
    marginLeft: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px'
    }
  })
}));

const HeaderWrapper = styled('div')(({ theme }) => ({
  backgroundImage: `url(${headerBackground})`,
  backgroundSize: '100% 600px',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    paddingTop: 0
  }
}));

// ==============================|| SOCIAL PROFILE ||============================== //

const AgentProfile = () => {
  const theme = useTheme();
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const [error, setError] = useState();
  // const { user, getProfile } = useAuth();
  const { borderRadius } = useConfig();
  const router = useRouter();
  // const { tab } = router.query;
  const { uid } = router.query;

  useEffect(() => {
    setLoading(false);

    axios
      .get(`${BACKEND_PATH}/api/v1/profile/${uid}`)
      .then((res) => {
        setUser(res?.data);

        return res;
      })
      .catch((err) => {
        const stringErr = JSON.stringify(err);
        const error = JSON.parse(stringErr);

        setError(error);
      });
  }, [uid]);

  console.log('user', user);

  return (
    <>
      <HeaderWrapper id="home">
        <AppBar />
      </HeaderWrapper>

      {error ? (
        <Error id="userNotFound" />
      ) : (
        <Main>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <MainCard
                contentSX={{
                  p: 1.5,
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
        </Main>
      )}

      <FooterPage />
    </>
  );
};

export default AgentProfile;
