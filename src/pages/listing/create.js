// material-ui
import { Grid } from '@mui/material';
import ValidationWizard from 'components/forms/forms-wizard/ValidationWizard';

// project imports
import AuthFooter from 'components/ui-component/cards/AuthFooter';

// store
import { gridSpacing } from 'store/constant';

// ===============================|| AUTH3 - LISITING ||=============================== //

const Create = () => {
  return (
    <Grid container spacing={gridSpacing} justifyContent="center">
      <Grid item xs={12} md={9} lg={7}>
        <ValidationWizard />
      </Grid>

      <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
        <AuthFooter />
      </Grid>
    </Grid>
  );
};
Create.Layout = 'authGuard';
export default Create;
