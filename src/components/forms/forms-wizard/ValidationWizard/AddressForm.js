import PropTypes from 'prop-types';

// material-ui
import { Button, Checkbox, FormControlLabel, Grid, Stack, Typography, TextField } from '@mui/material';

// project imports
import AnimateButton from 'components/ui-component/extended/AnimateButton';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';
import FormControlSelect from 'components/ui-component/extended/Form/FormControlSelect';

const type = [
  {
    value: '1',
    label: 'Rent'
  },
  {
    value: '2',
    label: 'Sales'
  },
  {
    value: '3',
    label: 'Short Stay'
  }
];

const propertyTypes = [
  {
    value: '0',
    label: 'Apartment'
  },
  {
    value: '1',
    label: 'Landed House'
  },
  {
    value: '2',
    label: 'Private Room'
  },
  {
    value: '3',
    label: 'Factory'
  },
  {
    value: '4',
    label: 'Office'
  },
  {
    value: '5',
    label: 'Hotel/Resort'
  },
  {
    value: '6',
    label: 'ShopLot'
  },
  {
    value: '7',
    label: 'Land'
  }
];

const validationSchema = yup.object({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required')
});

// ==============================|| FORM WIZARD - VALIDATION  ||============================== //

const AddressForm = ({ shippingData, setShippingData, handleNext, setErrorIndex }) => {
  const formik = useFormik({
    initialValues: {
      firstName: shippingData.firstName,
      lastName: shippingData.lastName,
      category: shippingData.category,
      propertyType: shippingData.propertyType
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('values', values);
      setShippingData({
        firstName: values.firstName,
        lastName: values.lastName,
        category: values.category,
        propertyType: values.propertyType
      });
      handleNext();
    }
  });

  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Create Listing
      </Typography>
      <form onSubmit={formik.handleSubmit} id="validation-forms">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <FormControlSelect
              currencies={type}
              idz="category"
              namez="category"
              captionLabelz="Category"
              value={formik.values.category || ''}
              onChange={formik.handleChange}
              error={formik.touched.category && Boolean(formik.errors.category)}
              helperText={formik.touched.category && formik.errors.category}
              fullWidth
            />
          </Grid>

          {/* {console.log('formik.values.category', formik.values.category)} */}

          <Grid item xs={12} sm={12}>
            <FormControlSelect
              currencies={propertyTypes}
              idz="propertyType"
              namez="propertyType"
              captionLabelz="Property Type"
              value={formik.values.propertyType || ''}
              onChange={formik.handleChange}
              error={formik.touched.propertyType && Boolean(formik.errors.propertyType)}
              helperText={formik.touched.propertyType && formik.errors.propertyType}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="firstName"
              name="firstName"
              label="First Name *"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            {/* <TextField id="address2" name="address2" label="Address line 2" fullWidth autoComplete="shipping address-line2" /> */}

            <TextField
              id="lastName"
              name="lastName"
              label="Last Name *"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              fullWidth
              autoComplete="family-name"
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField id="city" name="city" label="City" fullWidth autoComplete="shipping address-level2" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="state" name="state" label="State/Province/Region" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="zip" name="zip" label="Zip / Postal code" fullWidth autoComplete="shipping postal-code" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="country" name="country" label="Country" fullWidth autoComplete="shipping country" />
          </Grid> */}
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Use this address for payment details"
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="flex-end">
              <AnimateButton>
                <Button variant="contained" sx={{ my: 3, ml: 1 }} type="submit" onClick={() => setErrorIndex(0)}>
                  Next
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

AddressForm.propTypes = {
  shippingData: PropTypes.object,
  setShippingData: PropTypes.func,
  handleNext: PropTypes.func,
  setErrorIndex: PropTypes.func
};

export default AddressForm;
