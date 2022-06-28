import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Grid, Stack, Typography, useMediaQuery, Badge } from '@mui/material';
import Link from 'Link';
// import { Html, Head, Main, NextScript } from 'next/document';

import Head from 'next/head';

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

import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import VerifiedIcon from '@mui/icons-material/Verified';

import TypeTabs from 'components/ui-elements/basic/UITabs/TypeTabs';
import { NextSeo, ProductJsonLd, SocialProfileJsonLd } from 'next-seo';
import { BASE_PATH } from 'config';

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

const AgentProfile = ({ userData }) => {
  const theme = useTheme();
  const [isLoading, setLoading] = useState(true);
  const [agent, setAgent] = useState();
  const [error, setError] = useState();
  const router = useRouter();
  const { uid } = router.query;

  const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));

  const getProfileAgentById = async (uid) => {
    await axios
      .get(`${BACKEND_PATH}/api/v1/profile/${uid}`)
      .then((res) => {
        setAgent(res?.data);
        return res;
      })
      .catch((err) => {
        const stringErr = JSON.stringify(err);
        const error = JSON.parse(stringErr);
        setError(error);
      });
  };

  useEffect(() => {
    setLoading(false);
    if (agent == null) {
      getProfileAgentById(uid);
    }
  }, [uid, agent]);

  return (
    <>
      <Head>
        <title>{`ONE DREAM LEGACY | List all type properties at One Dream Property`}</title>
        <meta property="og:url" content={`${BASE_PATH}${uid}`} />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="your fb id" />
        <meta property="og:title" content={`${agent?.firstName} ${agent?.lastName}`} />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          style={{ textTransform: 'capitalize' }}
          content={`Properties For Rent & Sell by ${agent?.firstName} ${agent?.lastName}`}
        />
        <meta property="og:image" content={userData?.photo} />
      </Head>

      <HeaderWrapper id="home">
        <AppBar />
        {error ? (
          <Error id="userNotFound" />
        ) : (
          <>
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
                        <CardContent sx={{ width: { xs: '-webkit-fill-available' } }}>
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
                                  src={agent?.photo}
                                  sx={{
                                    borderRadius: '16px',
                                    margin: '5px auto 0',
                                    width: { xs: 72, sm: 100, md: 140 },
                                    height: { xs: 72, sm: 100, md: 140 },
                                    backgroundColor: 'transparent',
                                    borderRadius: '100%',
                                    borderColor: 'white',
                                    border: '2px solid white',
                                    borderRadius: '125px'
                                  }}
                                />
                              </Badge>

                              <Stack sx={{ pt: 3 }} direction="column" justifyContent={matchDownLG ? 'center' : 'start'}>
                                <Typography variant="h3" color="main" sx={{ color: 'white', textTransform: 'capitalize' }}>
                                  {agent?.firstName} {agent?.lastName}
                                </Typography>
                                <Typography variant="subtitle2" color="main" sx={{ color: 'white', pt: 1 }}>
                                  One Dream Legacy
                                </Typography>
                                <Stack sx={{ pt: 2 }} justifyContent={'center'} direction="row">
                                  <Stack direction="row" sx={{ width: { xs: '70%', lg: '60%' }, justifyContent: 'space-evenly' }}>
                                    <Link href="https://codedthemes.com/" target="_blank" underline="hover">
                                      <PublicTwoToneIcon color="secondary" />
                                    </Link>
                                    <Link href={`${agent?.instagram}`} target="_blank" underline="hover">
                                      <InstagramIcon color="secondary" />
                                    </Link>
                                    <Link href={`${agent?.facebook}`} target="_blank" underline="hover">
                                      <FacebookIcon color="secondary" />
                                    </Link>
                                    <Link href={`${agent?.linkedin}`} target="_blank" underline="hover">
                                      <LinkedInIcon color="secondary" />
                                    </Link>
                                    <Link href={`${agent?.youtube}`} target="_blank" underline="hover">
                                      <YouTubeIcon color="secondary" />
                                    </Link>
                                    <Link href={`${agent?.tiktok}`} target="_blank" underline="hover">
                                      <LinkedInIcon color="secondary" />
                                    </Link>
                                  </Stack>
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
            <Grid
              container
              sx={{ justifyContent: 'center', alignItems: 'center', pt: matchDownMD ? 3 : 0, pb: 10, height: { xs: 'auto' } }}
            >
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
                  {agent !== undefined && <TypeTabs agentData={agent} username={`${uid}`} />}
                </motion.div>
              </Grid>
            </Grid>
          </>
        )}
      </HeaderWrapper>

      <SecondWrapper>
        <FooterPage />
      </SecondWrapper>
    </>
  );
};

export default AgentProfile;

export const getServerSideProps = async (context) => {
  const uids = context.params.uid; // Get ID from slug `/book/1`

  let userData = null;

  await fetch(`${BACKEND_PATH}/api/v1/profile/${uids}`)
    .then((response) => response.json())
    .then((json) => {
      userData = json;
    });

  return {
    props: {
      userData
    }
  };
};
