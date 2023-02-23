import Link from '../../Link';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Grid, Typography, useMediaQuery } from '@mui/material';

// project imports

import AnimateButton from 'components/ui-component/extended/AnimateButton';
import AuthFooter from 'components/ui-component/cards/AuthFooter';
import AuthWrapper1 from 'components/authentication/AuthWrapper1';
import AuthCardWrapper from 'components/authentication/AuthCardWrapper';
import Logo from 'components/ui-component/Logo';
// assets

// ==============================|| AUTH3 - CHECK MAIL ||============================== //

const CheckMail = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AuthWrapper1>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ mb: 2 }}>
                  <Grid item sx={{ mb: 3 }}>
                    <Link href="#">
                      <Logo />
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" justifyContent="center" textAlign="center" spacing={2}>
                      <Grid item xs={12}>
                        <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                          Hi, Check Your Mail
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          variant="caption"
                          fontSize="16px"
                          textAlign={matchDownSM ? 'center' : 'inherit'}
                          sx={{ color: 'white' }}
                        >
                          We have sent an activation link to active your account
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <AnimateButton>
                      <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary" href="/login">
                        LOGIN
                      </Button>
                    </AnimateButton>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

CheckMail.Layout = 'minimalLayout';
export default CheckMail;