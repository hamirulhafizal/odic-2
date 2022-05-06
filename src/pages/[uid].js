import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Grid, Stack, Typography, useMediaQuery, Badge } from '@mui/material';
import Link from 'Link';

// project imports
import Avatar from 'components/ui-component/extended/Avatar';
import ImagePlaceholder from 'components/ui-component/cards/Skeleton/ImagePlaceholder';
import AppBar from 'components/ui-component/extended/AppBar';
import FooterPage from 'components/landingpage/Footer';
import Error from './404';

//third party
import { motion } from 'framer-motion';

// assets

import { BACKEND_PATH } from 'config';
import axios from 'axios';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import VerifiedIcon from '@mui/icons-material/Verified';
import TypeTabs from 'components/ui-elements/basic/UITabs/TypeTabs';

const Cover = '/assets/images/profile/img-profile-bg.png';
const images1 = '/assets/images/landing/living-room-with-yellow.png';
const images2 = '/assets/images/landing/footerBg-1.png';

const HeaderWrapper = styled('div')(({ theme }) => ({
  paddingTop: 30,
  [theme.breakpoints.down('md')]: {
    paddingTop: 0
  }
}));

const SecondWrapper = styled('div')(({ theme }) => ({
  backgroundImage: `url(${images2})`,
  backgroundSize: 'cover'
  // background: '#00000057',
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
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));

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
              top: { xs: '-0em', sm: '-2em', md: '-3em', lg: '-3em' },
              position: 'relative',
              width: '101%',
              backgroundImage: `url(${images1})`,
              backgroundRepeat: 'no-repeat',
              textAlign: 'center',
              backgroundSize: 'cover',
              pt: 15,
              pb: 10
            }}
          >
            <Grid item xs={12}>
              <Grid container sx={{ justifyContent: 'center' }}>
                <Grid
                  item
                  xs={10}
                  md={7}
                  sx={{
                    position: 'relative',
                    top: '10px'
                  }}
                >
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
                            <Badge
                              overlap="circular"
                              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                              badgeContent={<VerifiedIcon color="secondary" />}
                            >
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
                            </Badge>

                            <Stack sx={{ pt: 3 }} direction="column" justifyContent={matchDownLG ? 'center' : 'start'}>
                              <Typography variant="h3" color="main" sx={{ color: 'white', textTransform: 'capitalize' }}>
                                {user?.firstName} {user?.lastName}
                              </Typography>
                              <Typography variant="subtitle2" color="main" sx={{ color: 'white', pt: 1 }}>
                                One Dream Legacy
                              </Typography>
                              <Stack
                                sx={{ pt: 1, justifyContent: 'space-evenly' }}
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
        )}
      </HeaderWrapper>
      <Grid container sx={{ justifyContent: 'center', alignItems: 'center', pt: matchDownMD ? 3 : 0, pb: 10, height: { xs: 'auto' } }}>
        <Grid item xs={10} md={8}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30
            }}
          >
            <TypeTabs username={`${uid}`} />
          </motion.div>
        </Grid>
      </Grid>
      <SecondWrapper>
        <FooterPage />
      </SecondWrapper>
    </>
  );
};

export default AgentProfile;
