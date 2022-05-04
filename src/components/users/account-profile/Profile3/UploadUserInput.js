import React, { useEffect, useState, useReducer } from 'react';

// material-ui
import { Avatar, Button, Grid, InputLabel, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import useAuth from 'hooks/useAuth';
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import accountReducer from 'store/accountReducer';

const Input = styled('input')({
  display: 'none'
});

const UploadUserInput = () => {
  const { updateProfile, user } = useAuth();
  const [photo, setFieldImgValue] = useState(undefined);
  const [avatarPreview, setAvatarPreview] = useState('');
  const [state, dispatch] = useReducer(accountReducer);

  // useEffect(async () => {
  //   if (photo !== undefined) {
  //     const formData = new FormData();
  //     formData.append('photo', photo);

  //     await updateProfile(user?.user_name, formData).then((res) => {});
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [photo]);

  useEffect(() => {
    async function putDataProfile() {
      const formData = new FormData();
      formData.append('photo', photo);
      const response = await updateProfile(user?.user_name, formData).then((res) => {});
    }
    if (photo !== undefined) {
      putDataProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photo]);

  const preViewImage = (e) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        setAvatarPreview(fileReader.result);
      }
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Avatar alt={user?.nickname} src={avatarPreview || user?.photo} sx={{ width: 100, height: 100, margin: '0 auto' }} />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle2" align="center">
            Upload/Change Your Profile Image
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <AnimateButton>
            <InputLabel htmlFor="photo">
              <Input
                accept="image/*"
                id="photo"
                type="file"
                name="photo"
                label="photo"
                onChange={(e) => {
                  setFieldImgValue(e.target.files[0]);
                  preViewImage(e);
                }}
              />
              <Button color="secondary" sx={{ color: 'white' }} variant="contained" component="span">
                Upload Avatar
              </Button>
            </InputLabel>
          </AnimateButton>
        </Grid>
      </Grid>
    </>
  );
};

export default UploadUserInput;
