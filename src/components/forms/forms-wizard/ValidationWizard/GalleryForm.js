import PropTypes from 'prop-types';

// material-ui
import { Button, Grid, Input, Stack, Typography, CardMedia, Divider, InputLabel, TextField, FormHelperText } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// project imports
import AnimateButton from 'components/ui-component/extended/AnimateButton';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';

import { useTheme, styled } from '@mui/material/styles';
import { values } from 'lodash-es';

const validationSchema = yup.object({
  // size: yup.mixed().test(200000, 'File Size is too large', (values) => values?.size <= 2000000)
});

// styles
const ImageWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '4px',
  cursor: 'pointer',
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.background.default,
  '& > svg': {
    verticalAlign: 'sub',
    marginRight: 6
  }
}));

// ==============================|| FORM WIZARD - VALIDATION  ||============================== //

export default function GalleryForm({ imageProperty, setPaymentData, handleNext, handleBack, setErrorIndex }) {
  const [avatarPreview, setAvatarPreview] = useState('');
  const [imgE, setEImg] = useState();
  const [message, setMessage] = useState('');
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      file: '',
      size: ''
    },
    validationSchema,

    onSubmit: (values) => {
      if (values.size >= 2000000) {
        setMessage('File Size is too large');
      } else {
        setPaymentData({
          imgE: imgE
        });
        handleNext();
      }
    }
  });

  const preViewImage = (e) => {
    if (e.target.files[0].size >= 2000000) {
      setMessage('File Size is too large');
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        formik.setFieldValue('file', e.target.files[0]);
        formik.setFieldValue('size', e.target.files[0].size);
        setAvatarPreview(fileReader.result);
        setEImg(e);
      }
    };

    fileReader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Cover Image
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <div>
              <TextField
                accept="image/*"
                multiple
                name="file"
                type="file"
                id="file-upload"
                fullWidth
                label="Enter SKU"
                sx={{ display: 'none' }}
                onChange={(e) => {
                  preViewImage(e);
                  // formik.setFieldValue('file', e.target.files[0]);
                }}
              />

              <InputLabel
                htmlFor="file-upload"
                sx={{
                  background: theme.palette.background.default,
                  py: 3.75,
                  px: 0,
                  textAlign: 'center',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  mb: 3,
                  '& > svg': {
                    verticalAlign: 'sub',
                    mr: 0.5
                  }
                }}
              >
                <CloudUploadIcon /> Drop file here to upload
              </InputLabel>
              <FormHelperText error>{message}</FormHelperText>
            </div>
            {/* </label> */}

            <ImageWrapper>
              <CardMedia component="img" image={avatarPreview} title="Product" />
            </ImageWrapper>
          </Grid>

          <Divider />

          <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between">
              <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                Back
              </Button>
              <AnimateButton>
                <Button variant="contained" type="submit" sx={{ my: 3, ml: 1 }} onClick={() => setErrorIndex(1)}>
                  Next
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

GalleryForm.propTypes = {
  setPaymentData: PropTypes.func,
  handleNext: PropTypes.func,
  handleBack: PropTypes.func,
  setErrorIndex: PropTypes.func
};
