import { useState, useRef, useEffect, useReducer } from 'react';

// material-ui
import { Box, Grid, Stack, Avatar, Button, TextField, Typography, useMediaQuery, FormHelperText } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';

// project imports
import useAuth from 'hooks/useAuth';
import SubCard from 'components/ui-component/cards/SubCard';
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import ItemAttachments from 'components/ui-component/third-party/ItemAttachments';
import { gridSpacing } from 'store/constant';
import { Form, Formik } from 'formik';
import { openSnackbar } from 'store/slices/snackbar';

// third party
import * as Yup from 'yup';

// hook
import useScriptRef from 'hooks/useScriptRef';

// store
import { useDispatch } from 'store';

// yup
import { object, string, mixed, number } from 'yup';
import { useSelector } from 'store';
import accountReducer from 'store/accountReducer';

// ==============================|| PROFILE 3 - PROFILE ||============================== //

const Input = styled('input')({
  display: 'none'
});

// const validationSchema = object().shape({
//   firstName: string().max(255).required('Name is required'),
//   lastName: string().max(255).required('Name is required'),
//   photo: mixed().test(1000, 'File Size is too large', (value) => value?.size <= 2000000),
//   phone: number().max(255).required('Tel is required'),
//   email: string().email().required('Email is required')
// });

const Profile = ({ ...others }) => {
  const { updateProfile, user } = useAuth();

  const theme = useTheme();
  const scriptedRef = useScriptRef();

  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        email: user?.email || '',
        phone: user?.phone || '',
        photo: user?.photo || '',
        submit: null
      }}
      validator={() => ({})}
      validationSchema={Yup.object().shape({
        photo: Yup.mixed().test(200000, 'File Size is too large', (value) => value?.size <= 2000000)
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        const { firstName, lastName, phone, photo, email } = values;

        /* Then create a new FormData obj */
        let formData = new FormData();

        /* FormData requires name: id */
        formData.append('website', 'question');

        /* append input field values to formData */
        for (let value in values) {
          formData.append(value, values[value]);
        }

        // /* Can't console.log(formData), must
        //      use formData.entries() - example:  */
        // for (let property of formData.entries()) {
        //   console.log(property[0], property[1]);
        // }

        /* Now POST your formData: */
        // formPost(endpoint, formData);

        try {
          await updateProfile(user?.user_name, formData).then((res) => {
            if (scriptedRef.current) {
              setStatus({ success: true, msg: 'success' });
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
            }
          });
        } catch (err) {
          if (scriptedRef.current === false) {
            setStatus({ success: false, msg: 'fail' });
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
      {({ errors, status, handleBlur, handleChange, handleSubmit, setFieldValue, values }) => (
        <>
          <Form noValidate onSubmit={handleSubmit} {...others}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} md={4}>
                <SubCard title="Profile Picture" contentSX={{ textAlign: 'center' }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Avatar alt={user?.nickname} src={user?.photo || null} sx={{ width: 100, height: 100, margin: '0 auto' }} />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography variant="subtitle2" align="center">
                        Upload/Change Your Profile Image
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <AnimateButton>
                        <label htmlFor="contained-button-file">
                          <Input
                            accept="image/*"
                            id="contained-button-file"
                            type="file"
                            name="photo"
                            label="Photo"
                            value={setFieldValue.photo}
                            // value={values.photo}
                            onChange={(event) => {
                              setFieldValue('photo', event.currentTarget.files[0]);
                            }}
                            onBlur={handleBlur}
                          />
                          <Button variant="contained" component="span">
                            Upload Avatar
                          </Button>
                        </label>
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
                        required
                        fullWidth
                        label="First Name"
                        id="outlined-basic1"
                        name="firstName"
                        type="text"
                        value={values.firstName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="outlined-basic6"
                        label="Last Name"
                        name="lastName"
                        type="text"
                        value={values.lastName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        id="outlined-basic4"
                        label="Phone number"
                        name="phone"
                        type="number"
                        value={values.phone}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField fullWidth disabled type="email" value={values.email} name="email" id="filled-disabled" label="Email" />
                    </Grid>

                    <Grid item xs={12}>
                      <Stack direction="row">
                        <AnimateButton>
                          <Button type="submit" variant="contained">
                            Change Details
                          </Button>
                        </AnimateButton>
                      </Stack>

                      <Box sx={{ mt: 3 }}>
                        <FormHelperText>{status?.success && `${status?.msg}`}</FormHelperText>
                      </Box>
                    </Grid>
                  </Grid>
                </SubCard>
              </Grid>
            </Grid>
          </Form>
        </>
      )}
    </Formik>
  );
};

Profile.Layout = 'authGuard';
export default Profile;
