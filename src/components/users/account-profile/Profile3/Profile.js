import { useState } from 'react';

// material-ui
import { Box, Grid, Stack, Button, TextField, useMediaQuery, FormHelperText, CircularProgress, TextareaAutosize } from '@mui/material';
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
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import FormControlSelect from 'components/ui-component/extended/Form/FormControlSelect';
import { location } from 'utils/constant';
import { isUser } from 'utils/isUser';

// ==============================|| PROFILE 3 - PROFILE ||============================== //

const Profile = ({ ...others }) => {
  const { updateProfile, user } = useAuth();

  const theme = useTheme();
  const scriptedRef = useScriptRef();

  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Formik
      enableReinitialize={Boolean(true)}
      initialValues={{
        fullname: user?.fullname || '',
        od_partner: user?.od_partner || '',
        email: user?.email || '',
        phone_no: user?.phone_no || '',
        postcode: user?.postcode || '',
        city: user?.city || '',
        address: user?.address || '',
        state: user?.state || '',
        bank_name: user?.bank_name || '',
        bank_account: user?.bank_account || '',
        identity_card_no: user?.identity_card_no || ''
      }}
      validator={() => ({})}
      validationSchema={Yup.object().shape({
        fullname: Yup.string().required(),
        address: Yup.string().required(),
        city: Yup.string().required(),
        postcode: Yup.string().required(),
        state: Yup.string().required(),
        od_partner: Yup.string()
          .max(25)
          .test('no-special-chars', 'Special characters are not allowed', (value) => {
            return /^[a-zA-Z0-9]+$/.test(value);
          }),
        phone_no: Yup.string()
          .required()
          .test('no-special-chars', 'Special characters or alphabet are not allowed', (value) => {
            return /^[0-9]+$/.test(value);
          }),

        bank_name: Yup.string().required(),
        bank_account: Yup.string().required(),
        identity_card_no: Yup.string().required()
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        if (!values.fullname) setErrors({ fullname: 'Required' });

        setLoading(true);

        // values.name = values.fullname;

        /* Then create a new FormData obj */
        const formData = new FormData();
        /* append input field values to formData */
        Object.keys(values).forEach((value) => {
          formData.append(value, values[value]);
        });

        try {
          await updateProfile(user?.username, formData).then((res) => {
            // if (scriptedRef.current) {
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
            <Grid container spacing={gridSpacing} sx={{ justifyContent: 'center' }}>
              {!user?.identity_card && (
                <Grid item sm={12} md={others?.htmlFor == 'profilePage' ? 6 : 12}>
                  <SubCard title="*IC Picture" contentSX={{ textAlign: 'center' }}>
                    <UploadUserInput htmlFor="ICPicture" />
                  </SubCard>
                </Grid>
              )}

              <Grid item sm={12} md={others?.htmlFor == 'profilePage' ? 6 : 12}>
                {user?.identity_card && user?.verified_status !== 'Pending' && (
                  <SubCard title="Profile Picture" contentSX={{ textAlign: 'center' }}>
                    <UploadUserInput htmlFor="ProfilePicture" />
                  </SubCard>
                )}

                {user?.identity_card && (
                  <SubCard title="*Edit Account Details">
                    <Grid container spacing={gridSpacing}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          disabled
                          type="text"
                          value={user?.username}
                          name="username"
                          id="filled-disabled"
                          label="username"
                          aria-readonly
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField fullWidth disabled type="email" value={values.email} name="email" id="filled-disabled" label="Email" />
                      </Grid>

                      {user?.role == 'Partner' && (
                        <>
                          <Grid item xs={12} md={6}>
                            <TextField
                              required
                              fullWidth
                              label="OD Partner Name"
                              id="outlined-basic1"
                              disabled={true}
                              name="od_partner"
                              type="text"
                              value={values.od_partner}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              error={Boolean(errors.od_partner && touched.od_partner)}
                              inputProps={{
                                pattern: '[a-zA-Z0-9]+',
                                inputMode: 'numeric',
                                maxLength: 25,
                                style: { textTransform: 'UPPERCASE' }
                              }}
                              sx={{
                                '& .MuiFormHelperText-root ': {
                                  color: 'red'
                                }
                              }}
                              helperText={errors.od_partner && touched.od_partner && String(errors.od_partner)}
                            />
                          </Grid>
                        </>
                      )}

                      <Grid item xs={12} md={user?.role == 'Partner' ? 6 : 12}>
                        <TextField
                          disabled
                          id="filled-disabled"
                          aria-readonly
                          required
                          fullWidth
                          label="OD Member (Introducer)"
                          name="od_member"
                          type="text"
                          value={user?.od_member}
                          // onBlur={handleBlur}
                          // onChange={handleChange}
                          // error={Boolean(errors.od_member && touched.od_member)}
                          // inputProps={{
                          //   pattern: '[a-zA-Z0-9]+',
                          //   inputMode: 'numeric',
                          //   maxLength: 25,
                          //   style: { textTransform: 'UPPERCASE' }
                          // }}
                          sx={{
                            '& .MuiFormHelperText-root ': {
                              color: 'red'
                            }
                          }}
                          // helperText={errors.od_member && touched.od_member && String(errors.od_member)}
                        />
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <TextField
                          required
                          fullWidth
                          label="Full Name (as IC)"
                          id="outlined-basic1"
                          name="fullname"
                          type="text"
                          value={values.fullname}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={Boolean(errors.fullname && touched.fullname)}
                          helperText={errors.fullname && touched.fullname && String(errors.fullname && 'Full name is required')}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id="identity_card_no"
                          label="No IC"
                          name="identity_card_no"
                          type="text"
                          required
                          placeholder="970105015223"
                          value={values.identity_card_no}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={user?.identity_card_no ? false : true}
                          sx={{
                            '& .MuiFormHelperText-root ': {
                              color: 'red'
                            }
                          }}
                          helperText={
                            errors.identity_card_no && touched.identity_card_no && String(errors.identity_card_no && 'No IC is required')
                          }
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id="phone_no"
                          label="Phone"
                          name="phone_no"
                          type="tel"
                          required
                          placeholder="012345678"
                          value={values?.phone_no}
                          inputProps={{
                            pattern: '[0-9]*',
                            inputMode: 'numeric'
                          }}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={user?.phone_no ? false : true}
                          sx={{
                            '& .MuiFormHelperText-root ': {
                              color: 'red'
                            }
                          }}
                          helperText={errors.phone_no && touched.phone_no && String(errors.phone_no)}
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField
                          fullWidth
                          multiline
                          rows={2}
                          id="outlined-basic4"
                          label="Address  (as IC)"
                          name="address"
                          type="text"
                          required
                          placeholder="149 jalan kejayaan"
                          value={values.address}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={user?.address ? false : true}
                          sx={{
                            '& .MuiFormHelperText-root ': {
                              color: 'red'
                            }
                          }}
                          helperText={errors.address && touched.address && String(errors.address && 'Address is required field')}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id="postcode"
                          label="Postcode (as IC)"
                          name="postcode"
                          type="number"
                          required
                          placeholder="81100"
                          value={values?.postcode}
                          inputProps={{
                            pattern: '[0-9]*',
                            inputMode: 'numeric'
                          }}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={user?.postcode ? false : true}
                          sx={{
                            '& .MuiFormHelperText-root ': {
                              color: 'red'
                            }
                          }}
                          helperText={errors.postcode && touched.postcode && String(errors.postcode)}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id="city"
                          label="City"
                          name="city"
                          type="text"
                          required
                          placeholder="Johor Bahru"
                          value={values.city}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={user?.city ? false : true}
                          sx={{
                            '& .MuiFormHelperText-root ': {
                              color: 'red'
                            }
                          }}
                          helperText={errors.city && touched.city && String(errors.city && 'City is required')}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControlSelect
                          required
                          fullWidth
                          currencies={location}
                          id="location"
                          name="state"
                          captionLabel="Location* (as IC)"
                          value={values.state}
                          onChange={handleChange}
                          error={user?.state ? false : true}
                          helperText={errors.state && touched.state && String(errors.state && 'State is required field')}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id="outlined-basic4"
                          label="Bank Name"
                          name="bank_name"
                          type="text"
                          required
                          placeholder="Cimb"
                          value={values.bank_name}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={user?.bank_name ? false : true}
                          sx={{
                            '& .MuiFormHelperText-root ': {
                              color: 'red'
                            }
                          }}
                          helperText={errors.bank_name && touched.bank_name && String(errors.bank_name && 'Bank name is required field')}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id="outlined-basic4"
                          label="Bank No Acc"
                          name="bank_account"
                          type="text"
                          required
                          placeholder="Cimb"
                          value={values.bank_account}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={user?.bank_account ? false : true}
                          sx={{
                            '& .MuiFormHelperText-root ': {
                              color: 'red'
                            }
                          }}
                          helperText={
                            errors.bank_account && touched.bank_account && String(errors.bank_account && 'Bank No Acc is required field')
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Stack direction="row">
                          <AnimateButton>
                            <Button
                              endIcon={!isLoading && <SaveOutlinedIcon />}
                              type="submit"
                              variant="contained"
                              color="secondary"
                              sx={{ color: 'white' }}
                            >
                              {isLoading ? <CircularProgress sx={{ color: 'white' }} size={20} /> : 'SAVE'}
                            </Button>
                          </AnimateButton>
                        </Stack>

                        <Box sx={{ mt: 3 }}>
                          <FormHelperText sx={{ color: 'green' }}>{status?.success && `${status?.msg}`}</FormHelperText>
                        </Box>
                      </Grid>
                    </Grid>
                  </SubCard>
                )}

                {!user?.identity_card && user?.verified_status !== 'Pending' && (
                  <SubCard title="Profile Picture" contentSX={{ textAlign: 'center' }}>
                    <UploadUserInput htmlFor="ProfilePicture" />
                  </SubCard>
                )}
              </Grid>

              {user?.identity_card && (
                <Grid item sm={12} md={others?.htmlFor == 'profilePage' ? 6 : 12}>
                  <SubCard title="*IC Picture" contentSX={{ textAlign: 'center' }}>
                    <UploadUserInput htmlFor="ICPicture" />
                  </SubCard>
                </Grid>
              )}
            </Grid>
          </Form>
        </>
      )}
    </Formik>
  );
};

Profile.Layout = 'authGuard';
export default Profile;
