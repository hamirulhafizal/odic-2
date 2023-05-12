import Image from 'next/image';
// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Container, Grid, Link, Typography, Stack, useMediaQuery } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';

// assets
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LogoSection from 'layout/MainLayout/LogoSection';

const logoDark = '/assets/images/logo-white.svg';
const images2 = '/assets/images/landing/footerBg-1.png';

// styles
const FooterWrapper = styled('div')(({ theme }) => ({
  padding: '35px 0',
  color: '#fff',
  backgroundImage: `url(${images2}) !important`,
  backgroundSize: 'cover',
  background: '#00000057',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
}));

const FooterLink = styled(Link)({
  color: '#fff',
  display: 'inline-flex',
  alignItems: 'flex-start',
  textDecoration: 'none !important',
  backgroundImage: `url(${images2}) !important`,
  opacity: '0.8',
  '& svg': {
    fontsize: '1.125rem',
    marginRight: 8
  },
  '&:hover': {
    opacity: '1'
  }
});

const FooterSubWrapper = styled('div')(({ theme }) => ({
  padding: '20px 0',
  background: '#00000057',
  borderTop: `1px solid ${theme.palette.secondary.main}`,
  backgroundImage: `url(${images2}) !important`,

  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
}));

// ==============================|| LANDING - FOOTER PAGE ||============================== //

const FooterPage = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <FooterWrapper>
        <Container>
          <Grid container alignItems="center" justifyContent={matchDownSM ? 'center' : 'space-between'} spacing={gridSpacing}>
            <Grid item xs={12} sm={3}>
              <Stack alignItems="center" justifyContent={matchDownSM ? 'center' : 'flex-start'} direction={matchDownSM ? 'column' : 'row'}>
                <LogoSection htmlFor="footer" />
                <Typography sx={{ ml: 1 }} variant="subtitle1" component="div" color="inherit">
                  ONE DREAM INVESTMENT CENTER
                </Typography>
              </Stack>

              <Typography variant="subtitle2" component="div" color="inherit">
                Turning Dreams into Reality: Your One-Stop Investment Destination
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="subtitle1" component="div" color="inherit">
                GET IN TOUCH WITH US
              </Typography>
              <Typography variant="subtitle2" component="div" color="inherit" wrap>
                No. 6, Jalan Setia Tropika 4/21, Taman Setia Tropika, 81200 Johor Bahru, Johor.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </FooterWrapper>
      <FooterSubWrapper>
        <Container>
          <Typography variant="subtitle2" component="div" sx={{ color: 'white' }}>
            © 2023 ONE DREAM GROUP EMPIRE (202203004957 (LA0041709-T)). All rights reserved
          </Typography>
        </Container>
      </FooterSubWrapper>
    </>
  );
};

export default FooterPage;
