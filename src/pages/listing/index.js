// material-ui
// import { useTheme } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';

// project imports
import AuthFooter from 'components/ui-component/cards/AuthFooter';
// import useAuth from 'hooks/useAuth';

// ===============================|| AUTH3 - LISITING ||=============================== //

const Listing = () => {
  // const theme = useTheme();
  // const { user } = useAuth();
  return (
    <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
          <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
            <Typography variant="subtitle1">Your Listing</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
        <AuthFooter />
      </Grid>
    </Grid>
  );
};
Listing.Layout = 'authGuard';
export default Listing;
