// material-ui
import { styled } from '@mui/material/styles';

// project imports
import Header from 'components/landingpage/Header';
import Feature from 'components/landingpage/Feature';
import Demos from 'components/landingpage/Demos';
import Layouts from 'components/landingpage/Layouts';
import KeyFeature from 'components/landingpage/KeyFeature';
import Subscribe from 'components/landingpage/Subscribe';
import Footer from 'components/landingpage/Footer';
import Customization from 'layout/Customization';
import AppBar from 'components/ui-component/extended/AppBar';
import Suscribe1 from 'components/landingpage/Suscribe1';

const images1 = '/assets/images/landing/living-room-with-yellow.png';
const images2 = '/assets/images/landing/footerBg-1.png';

const HeaderWrapper = styled('div')(({ theme }) => ({
  paddingTop: 30,
  overflowX: 'hidden',
  overflowY: 'clip',

  backgroundImage: `url(${images1})`,
  backgroundSize: 'cover',

  [theme.breakpoints.down('md')]: {
    paddingTop: 42
  }
}));

const SecondWrapper = styled('div')(({ theme }) => ({
  backgroundImage: `url(${images2})`,
  // top: 0; bottom: 0; left: 0; right: 0;
  // background: 'hsla(180, 0%, 50%, 0.25)',
  backgroundSize: 'cover',
  paddingTop: 10,
  [theme.breakpoints.down('md')]: {
    paddingTop: 42
  }
}));

// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
  <>
    <HeaderWrapper id="home">
      <AppBar />
      <Header />
    </HeaderWrapper>
    <SecondWrapper>
      <Suscribe1 />
      <Footer />
    </SecondWrapper>
    <Customization />
  </>
);

export default Landing;
