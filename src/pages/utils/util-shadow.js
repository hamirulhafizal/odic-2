import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Card, Grid } from '@mui/material';

// project imports
import SubCard from 'components/ui-component/cards/SubCard';
import MainCard from 'components/ui-component/cards/MainCard';
import SecondaryAction from 'components/ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ===============================|| SHADOW BOX ||=============================== //

const ShadowBox = ({ shadow }) => {
  const theme = useTheme();

  return (
    <Card sx={{ mb: 3, boxShadow: shadow }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 4.5,
          bgcolor: theme.palette.mode === 'dark' ? 'grey.500' : 'primary.light',
          color: theme.palette.mode === 'dark' ? 'grey.50' : 'grey.800'
        }}
      >
        <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
      </Box>
    </Card>
  );
};

ShadowBox.propTypes = {
  shadow: PropTypes.string.isRequired
};

// ===============================|| SHADOW BOX ||=============================== //

const CustomShadowBox = ({ shadow, label, color }) => {
  const theme = useTheme();

  return (
    <Card sx={{ mb: 3, boxShadow: shadow }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 3,
          bgcolor: color,
          color: theme.palette.background.default
        }}
      >
        {!label && <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>}
        {label && <Box sx={{ color: 'inherit' }}>{label}</Box>}
      </Box>
    </Card>
  );
};

CustomShadowBox.propTypes = {
  shadow: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

// ============================|| UTILITIES SHADOW ||============================ //

const UtilitiesShadow = () => {
  const theme = useTheme();

  return (
    <MainCard title="Basic Shadow" secondary={<SecondaryAction link="https://next.material-ui.com/system/shadows/" />}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <SubCard title="Basic Shadow">
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="0" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="1" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="2" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="3" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="4" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="5" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="6" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="7" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="8" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="9" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="10" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="11" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="12" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="13" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="14" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="15" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="16" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="17" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="18" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="19" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="20" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="21" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="22" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="23" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="24" />
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12}>
          <SubCard title="Color Shadow">
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CustomShadowBox color={theme.palette.primary.main} shadow={theme.customShadows.primary} label="primary" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CustomShadowBox color={theme.palette.secondary.main} shadow={theme.customShadows.secondary} label="secondary" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CustomShadowBox color={theme.palette.orange.main} shadow={theme.customShadows.orange} label="orange" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CustomShadowBox color={theme.palette.success.main} shadow={theme.customShadows.success} label="success" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CustomShadowBox color={theme.palette.warning.main} shadow={theme.customShadows.warning} label="warning" />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CustomShadowBox color={theme.palette.error.main} shadow={theme.customShadows.error} label="error" />
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
};
UtilitiesShadow.Layout = 'authGuard';
export default UtilitiesShadow;
