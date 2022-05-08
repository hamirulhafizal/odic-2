// material-ui
import { styled } from '@mui/material/styles';

// project imports
import Header from 'components/landingpage/Header';
import Footer from 'components/landingpage/Footer';
import Customization from 'layout/Customization';
import AppBar from 'components/ui-component/extended/AppBar';
import Suscribe1 from 'components/landingpage/Suscribe1';
import MainCard from 'components/ui-component/cards/MainCard';
import SecondaryAction from 'components/ui-component/cards/CardSecondaryAction';
import useAuth from 'hooks/useAuth';
import ReviewCard from 'components/ui-component/cards/ReviewCard';
import FadeInWhenVisible from 'components/landingpage/Animation';

// third party

import { NextSeo } from 'next-seo';
import { Card, CardActions, CardContent, Container, Grid, Typography, Button, Avatar, Stack, Paper, Box } from '@mui/material';
import { gridSpacing } from 'store/constant';
import SubCard from 'components/ui-component/cards/SubCard';
import { useTheme } from '@mui/system';

// assets
import FolderTwoToneIcon from '@mui/icons-material/FolderTwoTone';
import CodeTwoToneIcon from '@mui/icons-material/CodeTwoTone';
import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import AttachmentTwoToneIcon from '@mui/icons-material/AttachmentTwoTone';
import CallSplitTwoToneIcon from '@mui/icons-material/CallSplitTwoTone';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
const images1 = '/assets/images/landing/living-room-with-yellow.png';
const images2 = '/assets/images/landing/footerBg-1.png';

const HeaderWrapper = styled('div')(({ theme }) => ({
  paddingTop: 30,
  overflowX: 'hidden',
  overflowY: 'clip',

  // width: '101%',
  backgroundImage: `url(${images1})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',

  [theme.breakpoints.down('md')]: {
    paddingTop: 42
  }
}));

const SecondWrapper = styled('div')(({ theme }) => ({
  backgroundImage: `url(${images2})`,
  backgroundSize: 'cover',
  paddingTop: 10,
  [theme.breakpoints.down('md')]: {
    paddingTop: 42
  }
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

// =============================|| LANDING MAIN ||============================= //

const Landing = () => {
  const theme = useTheme();

  const { user } = useAuth();
  const avatarIconSx = {
    ...theme.typography.commonAvatar,
    cursor: 'initial',
    width: 72,
    height: 72
  };

  return (
    <>
      {/* <NextSeo
      title="Using More of Config"
      description="This example uses more of the available config options."
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'One Dream Property',
        description: 'Legacy',
        images: [
          {
            url: `${images1}`,
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg'
          },
          {
            url: `${images1}`,
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
            type: 'image/jpeg'
          }
        ],
        site_name: 'SiteName'
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image'
      }}
    /> */}
      <HeaderWrapper id="home">
        <AppBar />
        <Header />
      </HeaderWrapper>

      <Container>
        <Card>
          <CardContent sx={{ py: 5 }}>
            <Grid container sx={{ justifyContent: 'space-between' }}>
              <Grid lg={4} md={4} sm={12} xs={12} item>
                <ReviewCard />
              </Grid>
              <Grid lg={7} md={7} sm={12} xs={12} item>
                <Box sx={{ p: 2, alignItems: 'center', backgroundColor: '#ededed', height: ' 100%', borderRadius: '10px' }}>
                  <Typography sx={{ ml: 2, py: 2 }} variant="h4">
                    Why join us ?
                  </Typography>

                  <Grid container justifyContent="center" spacing={gridSpacing}>
                    <Grid item lg={6} md={6} xs={12} sm={6}>
                      <FadeInWhenVisible>
                        <SubCard>
                          <Grid container alignItems="center" spacing={2}>
                            <Grid item>
                              <Avatar
                                variant="rounded"
                                sx={{
                                  ...avatarIconSx,
                                  bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[800] : 'primary.light',
                                  color: theme.palette.primary.main
                                }}
                              >
                                <FolderTwoToneIcon />
                              </Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                              <Typography variant="h5">Easy Folder Structure</Typography>
                            </Grid>
                          </Grid>
                        </SubCard>
                      </FadeInWhenVisible>
                    </Grid>

                    <Grid item lg={6} md={6} xs={12} sm={6}>
                      <FadeInWhenVisible>
                        <SubCard>
                          <Grid container alignItems="center" spacing={2}>
                            <Grid item>
                              <Avatar
                                variant="rounded"
                                sx={{
                                  ...avatarIconSx,
                                  bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[900] : 'secondary.light',
                                  color: theme.palette.secondary.main
                                }}
                              >
                                <CodeTwoToneIcon />
                              </Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                              <Typography variant="h5">Organized Code Structure</Typography>
                            </Grid>
                          </Grid>
                        </SubCard>
                      </FadeInWhenVisible>
                    </Grid>

                    <Grid item lg={6} md={6} xs={12} sm={6}>
                      <FadeInWhenVisible>
                        <SubCard>
                          <Grid container alignItems="center" spacing={2}>
                            <Grid item>
                              <Avatar
                                variant="rounded"
                                sx={{
                                  ...avatarIconSx,
                                  bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[800] : 'primary.light',
                                  color: theme.palette.primary.main
                                }}
                              >
                                <EmojiEmotionsTwoToneIcon />
                              </Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                              <Typography variant="h5">The Hassle-free Setup Process</Typography>
                            </Grid>
                          </Grid>
                        </SubCard>
                      </FadeInWhenVisible>
                    </Grid>

                    <Grid item lg={6} md={6} xs={12} sm={6}>
                      <FadeInWhenVisible>
                        <SubCard>
                          <Grid container alignItems="center" spacing={2}>
                            <Grid item>
                              <Avatar
                                variant="rounded"
                                sx={{
                                  ...avatarIconSx,
                                  bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[900] : 'secondary.light',
                                  color: theme.palette.secondary.main
                                }}
                              >
                                <LockOpenTwoToneIcon />
                              </Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                              <Typography variant="h5">3 Auth Methods</Typography>
                            </Grid>
                          </Grid>
                        </SubCard>
                      </FadeInWhenVisible>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>

      <SecondWrapper>
        <Suscribe1 />
        <Footer />
      </SecondWrapper>
      <Customization />
    </>
  );
};

export default Landing;
