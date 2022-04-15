import Link from '../../Link';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import Logo from 'components/ui-component/Logo';
import AuthRegister from 'components/authentication/auth-forms/AuthRegister';
import AuthFooter from 'components/ui-component/cards/AuthFooter';
import useAuth from 'hooks/useAuth';

// assets

// ===============================|| AUTH3 - LISITING ||=============================== //

const Create = () => {
  const theme = useTheme();
  const { isLoggedIn } = useAuth();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
          <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
            <Typography variant="subtitle1">Create You Listing</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
        <AuthFooter />
      </Grid>
    </Grid>
  );
};

export default Create;
Create.Layout = 'authGuard';
