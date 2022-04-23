import PropTypes from 'prop-types';

// material-ui
import { Button, Checkbox, FormControlLabel, Grid, IconButton, InputLabel, Stack, TextField, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// project imports
import AnimateButton from 'components/ui-component/extended/AnimateButton';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';
import ItemAttachments from 'components/application/kanban/Board/ItemAttachments';
import { useEffect, useState } from 'react';

import { DropzoneAreaBase, DropzoneDialogBase } from 'material-ui-dropzone';
import CloseIcon from '@material-ui/icons/Close';

const validationSchema = yup.object({
  cardName: yup.string().required('First Name is required'),
  cardNumber: yup.string().required('Last Name is required')
});

// ==============================|| FORM WIZARD - VALIDATION  ||============================== //

export default function GalleryForm({ paymentData, setPaymentData, handleNext, handleBack, setErrorIndex }) {
  const [fileImg, setFileValueImg] = useState(null);

  const [open, setOpen] = useState(false);
  const [fileObjects, setFileObjects] = useState([]);

  const dialogTitle = () => (
    <>
      <span>Upload file</span>
      <IconButton style={{ right: '12px', top: '8px', position: 'absolute' }} onClick={() => setOpen(false)}>
        <CloseIcon />
      </IconButton>
    </>
  );

  const formik = useFormik({
    initialValues: {
      cardName: paymentData.cardName,
      cardNumber: paymentData.cardNumber
    },
    validationSchema,
    onSubmit: (values) => {
      setPaymentData({
        cardName: values.cardName,
        cardNumber: values.cardNumber
      });
      handleNext();
    }
  });

  useEffect(() => {
    setFileValueImg(fileObjects);
  }, [fileObjects, fileImg]);

  console.log('fileImg-->', fileImg);

  return (
    <>
    
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>

            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Cover Image
      </Typography>
          <Grid item xs={12} md={6}>
            <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
              Add Image
            </Button>

            <DropzoneDialogBase
              dialogTitle={dialogTitle()}
              acceptedFiles={['image/*']}
              fileObjects={fileObjects}
              cancelButtonText={'cancel'}
              submitButtonText={'submit'}
              maxFileSize={5000000}
              open={open}
              onAdd={(newFileObjs) => {
                console.log('onAdd', newFileObjs);
                setFileObjects([].concat(fileObjects, newFileObjs));
              }}
              onDelete={(deleteFileObj) => {
                console.log('onDelete', deleteFileObj);
              }}
              onClose={() => setOpen(false)}
              onSave={() => {
                console.log('onSave', fileObjects);
                setOpen(false);
              }}
              showPreviews={true}
              showFileNamesInPreview={true}
            />

        

            {/* <TextField
              id="cardName"
              name="cardName"
              value={formik.values.cardName}
              onChange={formik.handleChange}
              error={formik.touched.cardName && Boolean(formik.errors.cardName)}
              helperText={formik.touched.cardName && formik.errors.cardName}
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
            /> */}

            {/* <TextField type="file" id="file-upload" fullWidth label="Enter SKU" sx={{ display: 'none' }} />
            <InputLabel
              htmlFor="file-upload"
              sx={{
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
            <ItemAttachments setFileValueImg={setFileValueImg} />
            
            */}
          </Grid>

          {/* <Grid item xs={12} md={6}>
            <TextField
              id="cardNumber"
              name="cardNumber"
              label="Card number"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
              helperText={formik.touched.cardNumber && formik.errors.cardNumber}
              fullWidth
              autoComplete="cc-number"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField id="cvv" label="CVV" helperText="Last three digits on signature strip" fullWidth autoComplete="cc-csc" />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="Remember credit card details for next time"
            />
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
