import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import Link from 'Link';

// project imports
import useConfig from 'hooks/useConfig';
import Avatar from 'components/ui-component/extended/Avatar';
import MainCard from 'components/ui-component/cards/MainCard';
import ImagePlaceholder from 'components/ui-component/cards/Skeleton/ImagePlaceholder';
import { gridSpacing, drawerWidth } from 'store/constant';
import AppBar from 'components/ui-component/extended/AppBar';
import FooterPage from 'components/landingpage/Footer';
import Error from './404';

//third party
import { motion } from 'framer-motion';

// assets

import { BACKEND_PATH } from 'config';
import axios from 'axios';
import { styled } from '@mui/system';
import { IconFriends, IconInbox, IconPhoto, IconUserPlus, IconUsers } from '@tabler/icons';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import AnimateButton from 'components/ui-component/extended/AnimateButton';

// const User1 = '/assets/images/profile/img-user.png';
const Cover = '/assets/images/profile/img-profile-bg.png';

const headerBackground = '/assets/images/landing/header-bg.jpg';
const images1 = '/assets/images/landing/living-room-with-yellow.png';
const images2 = '/assets/images/landing/footerBg-1.png';

const HeaderWrapper = styled('div')(({ theme }) => ({
  backgroundImage: `url(${images1})`,
  backgroundRepeat: 'no-repeat',
  textAlign: 'center',
  backgroundSize: 'cover',
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
  const router = useRouter();
  const { uid } = router.query;
  const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));

  // const { user, getProfile } = useAuth();

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

  return (
    <>
      <HeaderWrapper id="home">
        <AppBar />
        {error ? (
          <Error id="userNotFound" />
        ) : (
          <Grid
            container
            sx={{
              height: '40em',
              top: '8em',
              position: 'relative'
            }}
          >
            <Grid item xs={12}>
              <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={10}>
                  <motion.div
                    initial={{ opacity: 0, translateY: 550 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 150,
                      damping: 30
                    }}
                  >
                    <Card
                      sx={{
                        position: 'relative',
                        // top: '20px',
                        display: 'flex',
                        textAlign: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        backgroundColor: 'rgba(0, 0, 0, 0.51)',
                        boxShadow: '4px 10px 13px rgba(0, 0, 0, 0.25)',
                        backdropFilter: 'blur(29px)'
                      }}
                    >
                      <CardContent>
                        {isLoading ? (
                          <ImagePlaceholder
                            sx={{
                              borderRadius: '16px',
                              margin: '-70px 0 0 auto',
                              width: { xs: 72, sm: 100, md: 140 },
                              height: { xs: 72, sm: 100, md: 140 }
                            }}
                          />
                        ) : (
                          <>
                            <Avatar
                              alt="User 1"
                              src={user?.photo}
                              sx={{
                                borderRadius: '16px',
                                margin: '5px auto 0',
                                width: { xs: 72, sm: 100, md: 140 },
                                height: { xs: 72, sm: 100, md: 140 },
                                backgroundColor: 'transparent',
                                borderRadius: '100%'
                              }}
                            />
                            <Stack sx={{ pt: 3 }} direction="column" justifyContent={matchDownLG ? 'center' : 'start'}>
                              <Typography variant="h1" color="main" sx={{ color: 'white', textTransform: 'capitalize' }}>
                                {user?.firstName}
                              </Typography>
                              <Typography variant="subtitle2" color="main" sx={{ color: 'white' }}>
                                One Dream Legacy
                              </Typography>
                              <Stack
                                sx={{ pt: 1, justifyContent: 'space-around' }}
                                justifyContent={matchDownLG ? 'center' : 'start'}
                                direction="row"
                              >
                                <Link href="https://codedthemes.com/" target="_blank" underline="hover">
                                  <PublicTwoToneIcon color="secondary" />
                                </Link>
                                <Link href="https://www.instagram.com/codedthemes" target="_blank" underline="hover">
                                  <InstagramIcon color="secondary" />
                                </Link>
                                <Link href="https://www.facebook.com/codedthemes" target="_blank" underline="hover">
                                  <FacebookIcon color="secondary" />
                                </Link>
                                <Link href="https://in.linkedin.com/company/codedthemes" target="_blank" underline="hover">
                                  <LinkedInIcon color="secondary" />
                                </Link>
                              </Stack>
                            </Stack>
                          </>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          // <Main sx={{ mt: '70px' }}>
          //   <Grid spacing={gridSpacing} sx={{ justifyContent: 'center' }} container>
          //     <Grid item xs={12} lg={9}>
          //       <MainCard
          //         contentSX={{
          //           p: 1.5,
          //           // height: '200px',
          //           display: 'flex',
          //           textAlign: 'center',
          //           alignItems: 'center',
          //           flexDirection: 'column',
          //           justifyContent: 'space-around'
          //         }}
          //       >
          //         {isLoading ? (
          //           <ImagePlaceholder
          //             sx={{
          //               margin: '-70px 0 0 auto',
          //               borderRadius: '16px',
          //               width: { xs: 72, sm: 100, md: 140 },
          //               height: { xs: 72, sm: 100, md: 140 }
          //             }}
          //           />
          //         ) : (
          //           <>
          //             <Avatar
          //               alt="User 1"
          //               src={user?.photo}
          //               sx={{
          //                 borderRadius: '16px',
          //                 margin: '5px auto 0',
          //                 width: { xs: 72, sm: 100, md: 140 },
          //                 height: { xs: 72, sm: 100, md: 140 }
          //               }}
          //             />
          //             <Stack sx={{ pt: 3 }} direction="column" justifyContent={matchDownLG ? 'center' : 'start'}>
          //               <Typography variant="h5">{user?.firstName}</Typography>
          //               <Typography variant="subtitle2">One Dream Legacy</Typography>
          //               <Stack sx={{ pt: 1 }} direction="row" justifyContent={matchDownLG ? 'center' : 'start'}>
          //                 <Link href="https://codedthemes.com/" target="_blank" underline="hover">
          //                   <PublicTwoToneIcon color="secondary" />
          //                 </Link>
          //                 <Link href="https://www.instagram.com/codedthemes" target="_blank" underline="hover">
          //                   <InstagramIcon sx={{ color: theme.palette.orange.dark }} />
          //                 </Link>
          //                 <Link href="https://www.facebook.com/codedthemes" target="_blank" underline="hover">
          //                   <FacebookIcon color="primary" />
          //                 </Link>
          //                 <Link href="https://in.linkedin.com/company/codedthemes" target="_blank" underline="hover">
          //                   <LinkedInIcon sx={{ color: theme.palette.grey[900] }} />
          //                 </Link>
          //               </Stack>
          //             </Stack>
          //           </>
          //         )}
          //       </MainCard>
          //     </Grid>
          //   </Grid>
          // </Main>
        )}
      </HeaderWrapper>

      <FooterPage />
    </>
  );
};

export default AgentProfile;
