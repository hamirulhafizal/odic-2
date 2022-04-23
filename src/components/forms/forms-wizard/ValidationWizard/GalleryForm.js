import PropTypes from 'prop-types';

// material-ui
import { Button, Grid, Input, Stack, Typography, CardMedia, Divider, InputLabel, TextField } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// project imports
import AnimateButton from 'components/ui-component/extended/AnimateButton';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';

import { DropzoneAreaBase, DropzoneDialogBase } from 'material-ui-dropzone';
import CloseIcon from '@material-ui/icons/Close';
import { useTheme, styled } from '@mui/material/styles';

const validationSchema = yup.object({
  file: yup.mixed().test(200000, 'File Size is too large', (value) => value?.size <= 2000000)
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
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      fileName: imageProperty.fileName,
      type: imageProperty.type,
      size: imageProperty.size
    },
    validationSchema,

    onSubmit: (values) => {
      console.log({
        fileName: values.file.name,
        type: values.file.type,
        size: `${values.file.size} bytes`
      });

      setPaymentData({
        fileName: values.file.name,
        type: values.file.type,
        size: `${values.file.size} bytes`
      });

      handleNext();
    }
  });

  const preViewImage = (e) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        formik.setFieldValue('file', e.target.files[0]);
        setAvatarPreview(fileReader.result);
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
            {/* <label style={{ width: '100%' }} htmlFor="contained-button-file">
               <Grid item xs={12}>
                  <Stack direction="row">
                    <Button variant="contained" component="span" startIcon={<CloudUploadIcon />}>
                      Upload
                    </Button>
                  </Stack>
                </Grid>
                  <Input
                  sx={{ display: 'none' }}
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  name="file"
                  onChange={(e) => {
                    preViewImage(e);
                  }}
                /> */}

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
            </div>
            {/* </label> */}

            <ImageWrapper>
              <CardMedia component="img" image={avatarPreview} title="Product" />
            </ImageWrapper>
          </Grid>

          <Divider />

          {/* <Grid item xs={12} md={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Image Gallery
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="column" spacing={2} alignItems="center">
                <label style={{ width: '100%' }} htmlFor="contained-button-file">
                  <Grid item xs={12}>
                    <Stack direction="row">
                      <Button variant="contained" component="span" startIcon={<CloudUploadIcon />}>
                        Upload
                      </Button>
                    </Stack>
                  </Grid>

                  <Input
                    sx={{ display: 'none' }}
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    name="file"
                    onChange={(e) => {
                      preViewImage(e);
                    }}
                  />
                </label>

                <ImageWrapper>
                  <CardMedia component="img" image={avatarPreview} title="Product" />
                </ImageWrapper>
              </Stack>
            </Grid>
          </Grid> */}

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
  paymentData: PropTypes.object,
  setPaymentData: PropTypes.func,
  handleNext: PropTypes.func,
  handleBack: PropTypes.func,
  setErrorIndex: PropTypes.func
};
