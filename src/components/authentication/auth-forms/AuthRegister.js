import React, { useEffect } from 'react';
import { useDispatch } from 'store';
import { useRouter } from 'next/router';
import Link from 'Link';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery,
  CircularProgress
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import { openSnackbar } from 'store/slices/snackbar';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { getApiPartners, getPartnerbyUsername } from 'contexts/ApiBusinessCenter';
import FormControlSelect from 'components/ui-component/extended/Form/FormControlSelect';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const JWTRegister = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const dispatch = useDispatch();
  const router = useRouter();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const [showPassword, setShowPassword] = React.useState(false);
  const [checked, setChecked] = React.useState(true);

  const [isLoading, setLoading] = React.useState(false);

  const [strength, setStrength] = React.useState(0);
  const [msgErr, setMsgErr] = React.useState('');

  const [level, setLevel] = React.useState();
  const [listPartner, setPartner] = React.useState();

  const { register } = useAuth();

  // const arryofpartner1 = [];

  const introOD_partner = localStorage.getItem('od_partner_intro');

  const ref = new URLSearchParams(window.location.search);
  const refUsername = ref.get('ref');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('123456');
    introOD_partner == null &&
      getPartnerbyUsername(refUsername).then((res) => {
        if (res?.data?.length != 0) {
          setPartner(res?.data[0]);
          const { od_partner } = res?.data[0];

          localStorage.setItem('od_partner_intro', od_partner);
        } else {
          setMsgErr('OD Member are not valid');
        }
      });
  }, [introOD_partner, refUsername, listPartner]);

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography color={theme.palette.secondary.main} variant="subtitle1">
              Sign up with Email address
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          email: '',
          password: '',
          name: '',
          od_partner: introOD_partner || listPartner,
          od_member: refUsername,
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          od_partner: Yup.string().max(255).required('You are invalid to register !'),
          od_member: Yup.string().max(255).required('Introducer Name is required'),
          name: Yup.string().max(255).required('Full Name is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          setLoading(true);
          register({
            email: values.email,
            password: values.password,
            name: values.name,
            od_partner: values.od_partner,
            od_member: values.od_member
          })
            .then((res) => {
              if (res['email'] == 'The email has already been taken.') {
                setErrors({ submit: 'Email is already in use.' });
                setSubmitting(false);
                setLoading(false);
              }

              if (res.status == 200) {
                setStatus({ success: true });
                setSubmitting(false);
                dispatch(
                  openSnackbar({
                    open: true,
                    message: 'Your registration has been successfully completed.',
                    variant: 'alert',
                    alert: {
                      color: 'success'
                    },
                    close: false
                  })
                );
              } else {
                setErrors({ submit: 'Try Again, something went wrong' });
                setSubmitting(false);
                setLoading(false);
              }
            })
            .catch((err) => {
              setErrors({ submit: 'Try Again, something went wrong' });
              setSubmitting(false);
              setLoading(false);
            });
        }}
      >
        {({ errors, status, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form onSubmit={handleSubmit} {...others}>
            <Grid container spacing={matchDownSM ? 1 : 2}>
              {/* {listPartner.length !== 0 && (
                <FormControlSelect
                  required
                  fullWidth
                  currencies={listPartner}
                  id="od_partner"
                  name="od_partner"
                  captionLabel="OD Partner"
                  value={values.od_partner}
                  onChange={handleChange}
                  // error={user?.od_partner ? false : true}
                  helperText={errors.od_partner && touched.od_partner && String(errors.od_partner && 'OD Partner is required field')}
                />
              )} */}
              <Grid item xs={6} sm={6}>
                <TextField
                  hidden
                  required
                  fullWidth
                  label="OD Partner"
                  margin="normal"
                  name="od_partner"
                  type="text"
                  value={values.od_partner}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{ style: { textTransform: 'uppercase' } }}
                  sx={{ ...theme.typography.customInput, display: 'none' }}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  disabled
                  required
                  fullWidth
                  label="OD Member Introducer"
                  margin="normal"
                  name="name"
                  type="text"
                  value={values.od_member}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{ style: { textTransform: 'uppercase' } }}
                  sx={{ ...theme.typography.customInput }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  label="Full Name (As Per IC)"
                  margin="normal"
                  name="name"
                  type="text"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{ style: { textTransform: 'uppercase' } }}
                  sx={{ ...theme.typography.customInput }}
                />
              </Grid>
            </Grid>
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-register">Email Address</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-register"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text--register">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-register"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                label="Password"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  changePassword(e.target.value);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-register">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>

            {strength !== 0 && (
              <FormControl fullWidth>
                <Box sx={{ mb: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box style={{ backgroundColor: level.color }} sx={{ width: 85, height: 8, borderRadius: '7px' }} />
                    </Grid>
                    <Grid item>
                      <Typography sx={{ color: 'white' }} variant="subtitle1" fontSize="0.75rem">
                        {level.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </FormControl>
            )}

            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
                  }
                  label={
                    <Typography sx={{ color: 'white' }} variant="subtitle1">
                      Agree with &nbsp;
                      <Typography sx={{ color: 'white' }} variant="subtitle1" component={Link} href="/">
                        Terms & Condition.
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>

            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            {msgErr && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{msgErr}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation
                  color={`${status?.success ? 'success' : 'secondary'}`}
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  <FormHelperText id="standard-weight-helper-text-username-login" sx={{ fontWeight: 'bold' }}>
                    {status && status.success ? (
                      `${status?.msg}`
                    ) : isLoading ? (
                      <CircularProgress sx={{ color: 'grey' }} size={20} />
                    ) : (
                      'SIGN UP'
                    )}
                  </FormHelperText>
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default JWTRegister;
