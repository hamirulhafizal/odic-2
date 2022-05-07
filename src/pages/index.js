// material-ui
import { styled } from '@mui/material/styles';

// project imports
import Header from 'components/landingpage/Header';
import Footer from 'components/landingpage/Footer';
import Customization from 'layout/Customization';
import AppBar from 'components/ui-component/extended/AppBar';
import Suscribe1 from 'components/landingpage/Suscribe1';

// third party

import { NextSeo } from 'next-seo';
import { Card, CardActions, CardContent, Container, Grid, Typography, Button, Avatar, Stack, Paper } from '@mui/material';
import { gridSpacing } from 'store/constant';
import SubCard from 'components/ui-component/cards/SubCard';
import { useTheme } from '@mui/system';
import MainCard from 'components/ui-component/cards/MainCard';

import SecondaryAction from 'components/ui-component/cards/CardSecondaryAction';
import useAuth from 'hooks/useAuth';
import ReviewCard from 'components/ui-component/cards/ReviewCard';
import { Box } from '@mui/material';

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

  console.log('user', user);

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
                <Box sx={{ alignItems: 'center', backgroundColor: 'white' }}>
                  <Typography sx={{ ml: 2 }} variant="subtitle1">
                    {user?.firstName}
                  </Typography>
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
