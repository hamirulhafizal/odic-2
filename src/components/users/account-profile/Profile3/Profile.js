import { useState } from 'react';

// material-ui
import {
  Box,
  Grid,
  Stack,
  Avatar,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  FormHelperText,
  CircularProgress,
  FormControl,
  InputLabel
} from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';

// project imports
import useAuth from 'hooks/useAuth';
import SubCard from 'components/ui-component/cards/SubCard';
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import { Form, Formik } from 'formik';
import { openSnackbar } from 'store/slices/snackbar';

// third party
import * as Yup from 'yup';

// hook
import useScriptRef from 'hooks/useScriptRef';
import { useDispatch } from 'store';
import UploadUserInput from './UploadUserInput';

// ==============================|| PROFILE 3 - PROFILE ||============================== //

const Profile = ({ ...others }) => {
  const { updateProfile, user } = useAuth();

  const theme = useTheme();
  const scriptedRef = useScriptRef();

  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Formik
      enableReinitialize={Boolean(true)}
      initialValues={{
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        email: user?.email || '',
        phone: user?.phone || ''
      }}
      validator={() => ({})}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().max(255).required(),
        lastName: Yup.string().max(255).required()
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        if (!values.firstName) {
          setErrors({ firstName: 'Required' });
        } else if (!values.lastName) {
          setErrors({ lastName: 'Required' });
        }

        setLoading(true);

        /* Then create a new FormData obj */
        const formData = new FormData();
        /* append input field values to formData */
        Object.keys(values).forEach((value) => {
          formData.append(value, values[value]);
        });

        try {
          await updateProfile(user?.user_name, formData).then((res) => {
            if (scriptedRef.current) {
              setLoading(false);
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
            setLoading(false);
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
        setLoading(false);
      }}
    >
      {({ errors, touched, status, handleBlur, handleChange, handleSubmit, values }) => (
        <>
          <Form noValidate onSubmit={handleSubmit} {...others}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} md={4}>
                <SubCard title="Profile Picture" contentSX={{ textAlign: 'center' }}>
                  <UploadUserInput />
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
                        error={Boolean(errors.firstName && touched.firstName)}
                        helperText={errors.firstName && touched.firstName && String(errors.firstName)}
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
                        error={Boolean(errors.lastName && touched.lastName)}
                        helperText={errors.lastName && touched.lastName && String(errors.lastName)}
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
                            {isLoading ? <CircularProgress sx={{ color: 'white' }} size={20} /> : 'Change Details'}
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
