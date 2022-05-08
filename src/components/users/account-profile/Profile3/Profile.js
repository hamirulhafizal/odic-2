import { useState } from 'react';

// material-ui
import { Box, Grid, Stack, Button, TextField, useMediaQuery, FormHelperText, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';

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

// assets
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import TiktokIcon from '@mui/icons-material/tiktok';

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
        phone: user?.phone || '',
        description:
          user?.description ||
          `Nama saya ${user?.firstName} ${user?.lastName}. Saya merupakan agent Sah aktif One Dream Property. Saya sudah bantu lebih 500 orang pembeli dan pelabur hartanah. Ingin saya bantu anda? Hubungi saya untuk bimbingan.`,
        facebook: user?.facebook || '',
        instagram: user?.instagram || '',
        youtube: user?.youtube || '',
        linkedin: user?.linkedin || '',
        tiktok: user?.tiktok || ''
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
                    <Grid item xs={12} md={6}>
                      <TextField
                        required
                        fullWidth
                        inputProps={{ style: { textTransform: 'capitalize' } }}
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
                    <Grid item xs={12} md={6}>
                      <TextField
                        required
                        fullWidth
                        inputProps={{ style: { textTransform: 'capitalize' } }}
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
                        placeholder="6012345678"
                        value={values.phone}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField fullWidth disabled type="email" value={values.email} name="email" id="filled-disabled" label="Email" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        rows={6}
                        multiline
                        fullWidth
                        id="outlined-basic4"
                        label="Bio"
                        name="description"
                        type="text"
                        value={values.description}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container alignItems="center" spacing={gridSpacing} sx={{ mb: 1.25 }}>
                        <Grid item>
                          <WhatsAppIcon />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <TextField
                            fullWidth
                            id="outlined-basic4"
                            label="Whatsapp Url"
                            name="phone"
                            type="text"
                            value={values.phone}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item>
                          <AnimateButton>
                            <Button variant="contained" size="small" color="secondary">
                              Connect
                            </Button>
                          </AnimateButton>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12}>
                      <Grid container alignItems="center" spacing={gridSpacing} sx={{ mb: 1.25 }}>
                        <Grid item>
                          <FacebookIcon />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <TextField
                            fullWidth
                            id="outlined-basic4"
                            label="Facebook Profile Url"
                            name="facebook"
                            type="text"
                            value={values.facebook}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item>
                          <AnimateButton>
                            <Button variant="contained" size="small" color="secondary">
                              Connect
                            </Button>
                          </AnimateButton>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container alignItems="center" spacing={gridSpacing} sx={{ mb: 1.25 }}>
                        <Grid item>
                          <InstagramIcon />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <TextField
                            fullWidth
                            id="outlined-basic4"
                            label="Instagram Profile Url"
                            name="instagram"
                            type="text"
                            value={values.instagram}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item>
                          <AnimateButton>
                            <Button variant="contained" size="small" color="secondary">
                              Connect
                            </Button>
                          </AnimateButton>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container alignItems="center" spacing={gridSpacing} sx={{ mb: 1.25 }}>
                        <Grid item>
                          <YouTubeIcon />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <TextField
                            fullWidth
                            id="outlined-basic4"
                            label="Youtube Profile Url"
                            name="youtube"
                            type="text"
                            value={values.youtube}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item>
                          <AnimateButton>
                            <Button variant="contained" size="small" color="secondary">
                              Connect
                            </Button>
                          </AnimateButton>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container alignItems="center" spacing={gridSpacing} sx={{ mb: 1.25 }}>
                        <Grid item>
                          <LinkedInIcon />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <TextField
                            fullWidth
                            id="outlined-basic4"
                            label="Linkedin Profile Url"
                            name="linkedin"
                            type="text"
                            value={values.linkedin}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item>
                          <AnimateButton>
                            <Button variant="contained" size="small" color="secondary">
                              Connect
                            </Button>
                          </AnimateButton>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container alignItems="center" spacing={gridSpacing} sx={{ mb: 1.25 }}>
                        <Grid item>
                          <TwitterIcon />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <TextField
                            fullWidth
                            id="outlined-basic4"
                            label="Twitter Profile Url"
                            name="twitter"
                            type="text"
                            value={values.twitter}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item>
                          <AnimateButton>
                            <Button variant="contained" size="small" color="secondary">
                              Connect
                            </Button>
                          </AnimateButton>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container alignItems="center" spacing={gridSpacing} sx={{ mb: 1.25 }}>
                        <Grid item>
                          <TwitterIcon />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <TextField
                            fullWidth
                            id="outlined-basic4"
                            label="Tiktok Profile Url"
                            name="tiktok"
                            type="text"
                            value={values.tiktok}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item>
                          <AnimateButton>
                            <Button variant="contained" size="small" color="secondary">
                              Connect
                            </Button>
                          </AnimateButton>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12}>
                      <Stack direction="row">
                        <AnimateButton>
                          <Button type="submit" variant="contained" color="secondary" sx={{ color: 'white' }}>
                            {isLoading ? <CircularProgress sx={{ color: 'white' }} size={20} /> : 'Change Details'}
                          </Button>
                        </AnimateButton>
                      </Stack>

                      <Box sx={{ mt: 3 }}>
                        <FormHelperText sx={{ color: 'green' }}>{status?.success && `${status?.msg}`}</FormHelperText>
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
