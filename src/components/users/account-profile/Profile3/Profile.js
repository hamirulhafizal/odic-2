// material-ui
import {
  Avatar,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project imports
import useAuth from 'hooks/useAuth';
import SubCard from 'components/ui-component/cards/SubCard';
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import { Formik } from 'formik';

import PropTypes from 'prop-types';
import React from 'react';
import Link from 'Link';

// third party
import * as Yup from 'yup';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// assets
const Avatar1 = '/assets/images/users/avatar-1.png';

// ==============================|| PROFILE 3 - PROFILE ||============================== //

const Profile = ({ ...others }) => {
  const { user, updateProfile } = useAuth();
  const theme = useTheme();

  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  console.log('user', user);

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        photo: '',
        phone:'',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().max(255).required('Name is required'),
        lastName: Yup.string().max(255).required('Name is required'),
        photo: Yup.string().max(255).required('Name is required'),
        phone: Yup.string().max(255).required('Tel is required'),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          await updateProfile(values.firstName, values.lastName, values.phone, values.photo).then((res) => {
            if (res) {
              setStatus({ success: true });
              setSubmitting(false);
              dispatch(
                openSnackbar({
                  open: true,
                  message: 'Your Profile has been successfully Updated.',
                  variant: 'alert',
                  alert: {
                    color: 'success'
                  },
                  close: false
                })
              );

              setTimeout(() => {
                router.push('/login');
              }, 1500);
            }
          });
        } catch (err) {
          if (scriptedRef.current === false) {
            setStatus({ success: false });
            if (err.password[0] !== null) {
              setErrors({ submit: 'try stronger password' });
            }
            if (err.email[0] !== null) {
              setErrors({ submit: 'email must be unique' });
            }
            setSubmitting(false);
          }
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <>
          {' '}
          <form noValidate onSubmit={handleSubmit} {...others}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} md={4}>
                <SubCard title="Profile Picture" contentSX={{ textAlign: 'center' }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Avatar alt={user.nickname} src={user.photo} sx={{ width: 100, height: 100, margin: '0 auto' }} />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle2" align="center">
                        Upload/Change Your Profile Image
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <AnimateButton>
                        <Button variant="contained" >Upload Avatar</Button>
                      </AnimateButton>
                    </Grid>
                  </Grid>
                </SubCard>
              </Grid>
              <Grid item sm={6} md={8}>
                <SubCard title="Edit Account Details">
                  <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="First Name"
                        id="outlined-basic1"
                        name="firstName"
                        type="text"
                        value={user.firstName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="outlined-basic6"
                        label="Last Name"
                        name="lastName"
                        type="text"
                        value={user.lastName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        id="outlined-basic4"
                        label="Phone number"
                        name="lastName"
                        type="text"
                        value={user.phone}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        id="outlined-basic6"
                        disabled
                        type="email"
                        value={user.email}
                        name="email"
                        id="filled-disabled"
                        label="Email"
                      />
                    </Grid>

                    {/* {errors.submit && (
                    <Box sx={{ mt: 3 }}>
                      <FormHelperText error>{errors.submit}</FormHelperText>
                    </Box>
                  )} */}

                    <Grid item xs={12}>
                      <Stack direction="row">
                        <AnimateButton>
                          <Button type="submit" variant="contained">
                            Change Details
                          </Button>
                        </AnimateButton>
                      </Stack>
                    </Grid>
                  </Grid>
                </SubCard>
              </Grid>
            </Grid>
          </form>
        </>
      )}
    </Formik>
  );
};

export default Profile;
