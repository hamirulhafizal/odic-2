import React, { useEffect, useState, useReducer, useRef } from 'react';

// material-ui
import { Avatar, Button, FormHelperText, Grid, InputLabel, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import useAuth from 'hooks/useAuth';
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import accountReducer from 'store/accountReducer';
import { openSnackbar } from 'store/slices/snackbar';
import { dispatch } from 'store';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const Input = styled('input')({
  display: 'none'
});

const UploadUserInput = ({ htmlFor }) => {
  const { updateProfile, user } = useAuth();
  const [message, setMessage] = useState('');

  const [photo1, setFieldImgValue1] = useState(undefined);
  const [photo2, setFieldImgValue2] = useState(undefined);

  const [avatarPreview1, setAvatarPreview1] = useState('');
  const [avatarPreview2, setAvatarPreview2] = useState('');

  useEffect(() => {
    async function putDataProfile() {
      if (photo1?.size >= 2000000 || photo2?.size >= 2000000) {
        setMessage('File Size is too large, below 1MB');
      } else {
        setMessage('');
        const formData = new FormData();
        htmlFor == 'ProfilePicture' && formData.append('profile_image', photo1);
        htmlFor == 'ICPicture' && formData.append('identity_card', photo2);

        await updateProfile(user?.username, formData).then((res) => {
          res?.status == '201' && htmlFor == 'ProfilePicture' ? setAvatarPreview1('') : setAvatarPreview2('');

          dispatch(
            openSnackbar({
              open: true,
              message: htmlFor == 'ProfilePicture' ? 'Profile Picture Updated.' : 'IC Picture  Updated.',
              variant: 'alert',
              alert: {
                color: 'success'
              },
              close: false
            })
          );
        });
      }
    }
    if (photo1 !== undefined || photo2 !== undefined) {
      putDataProfile();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photo1, photo2]);

  const preViewImage1 = (e) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        setAvatarPreview1(fileReader.result);
      }
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  const preViewImage2 = (e) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        setAvatarPreview2(fileReader.result);
      }
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {htmlFor == 'ProfilePicture' && (
            <Avatar
              alt={user?.nickname}
              src={avatarPreview1 || `https://app.onedreamproperty.net/profile/${user?.profile_image}`}
              sx={{
                height: 100,
                width: 100,
                margin: '0 auto',
                borderRadius: '50px',

                '.MuiAvatar-img': {
                  objectFit: 'cover',
                  backgroundColor: 'black'
                }
              }}
            />
          )}

          {htmlFor == 'ICPicture' && (
            <Avatar
              alt={user?.nickname}
              src={
                user?.identity_card !== null
                  ? avatarPreview2
                    ? avatarPreview2
                    : `https://app.onedreamproperty.net/profile/${user?.identity_card}`
                  : '/assets/sampleIc.PNG'
              }
              sx={{
                height: htmlFor == 'ICPicture' ? 150 : 100,
                width: htmlFor == 'ICPicture' ? 250 : 100,
                margin: '0 auto',
                borderRadius: htmlFor == 'ICPicture' ? '5px' : '50px',

                '.MuiAvatar-img': {
                  objectFit: htmlFor == 'ICPicture' ? 'contain' : 'cover',
                  backgroundColor: 'black'
                }
              }}
            />
          )}
        </Grid>

        <Grid item xs={12}>
          <Stack directiom="column">
            <Typography variant="subtitle2" align="center">
              Upload/Change Your Profile Image <br /> *Below 1MB
            </Typography>
            <FormHelperText sx={{ textAlign: 'center' }} error>
              {message}
            </FormHelperText>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          {htmlFor == 'ProfilePicture' && (
            <>
              <AnimateButton>
                <InputLabel htmlFor="photo1">
                  <Input
                    accept="image/*"
                    id="photo1"
                    type="file"
                    name="photo1"
                    label="photo1"
                    onChange={(e) => {
                      setFieldImgValue1(e.target.files[0]);
                      preViewImage1(e);
                    }}
                  ></Input>
                  <Button color="secondary" sx={{ color: 'white' }} variant="contained" component="span">
                    {'UPLOAD'}
                  </Button>
                </InputLabel>
              </AnimateButton>
            </>
          )}

          {htmlFor == 'ICPicture' && (
            <>
              <Stack direction="row" sx={{ gap: 2, justifyContent: 'center' }}>
                <AnimateButton>
                  <InputLabel
                    htmlFor="photo2"
                    style={{
                      boxShadow: '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)'
                    }}
                  >
                    <Input
                      accept="image/*"
                      id="photo2"
                      type="file"
                      name="photo2"
                      label="photo2"
                      onChange={(e) => {
                        preViewImage2(e);
                        setFieldImgValue2(e.target.files[0]);
                      }}
                    ></Input>
                    <Button
                      endIcon={<FileUploadIcon />}
                      color="secondary"
                      sx={{
                        color: 'white'
                      }}
                      variant="contained"
                      component="span"
                    >
                      {'UPLOAD'}
                    </Button>
                  </InputLabel>
                </AnimateButton>

                {/* {user?.identity_card && (
                  <AnimateButton>
                    <Button color="error" sx={{ color: 'white' }} variant="contained" component="span"

                    onClick={(()=>{




                    })}
                    >
                      {'DELETE'}
                    </Button>
                  </AnimateButton>
                )} */}
              </Stack>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default UploadUserInput;
