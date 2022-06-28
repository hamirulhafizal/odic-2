import PropTypes from 'prop-types';

// material-ui
import { Button, Checkbox, FormControlLabel, Grid, Stack, Typography, TextField } from '@mui/material';

// project imports
import AnimateButton from 'components/ui-component/extended/AnimateButton';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';
import FormControlSelect from 'components/ui-component/extended/Form/FormControlSelect';
import useAuth from 'hooks/useAuth';
import slugify from 'utils/helper';

const category = [
  {
    value: 1,
    label: 'Rent'
  },
  {
    value: 2,
    label: 'Sales'
  },
  {
    value: 3,
    label: 'Short Stay'
  }
];

const propertyTypes = [
  {
    value: 1,
    label: 'Apartment'
  },
  {
    value: 2,
    label: 'Landed House'
  },
  {
    value: 3,
    label: 'Private Room'
  },
  {
    value: 4,
    label: 'Factory'
  },
  {
    value: 5,
    label: 'Office'
  },
  {
    value: 6,
    label: 'Hotel/Resort'
  },
  {
    value: 7,
    label: 'ShopLot'
  },
  {
    value: 8,
    label: 'Land'
  }
];

const furnish = [
  {
    value: 'none',
    label: '-'
  },
  {
    value: 'Freehold',
    label: 'UnFurnish'
  },
  {
    value: 'Partial',
    label: 'Partly Furnish'
  },
  {
    value: 'Fully-Furnished',
    label: 'Fully Furnished'
  }
];

const carPark = [
  {
    value: '0',
    label: '-'
  },
  {
    value: '1',
    label: '1'
  },
  {
    value: '2',
    label: '2'
  },
  {
    value: '3',
    label: '3'
  },
  {
    value: '4',
    label: '4'
  },
  {
    value: '5',
    label: '5'
  },
  {
    value: 'More-than-6',
    label: 'More than 6'
  }
];

const rentalDeposit = [
  {
    value: '0',
    label: 'Zero Deposit'
  },
  {
    value: '0.5-Month',
    label: '0.5 Month'
  },
  {
    value: '1.0-Month',
    label: '1.0 Month'
  },
  {
    value: '1.5-Month',
    label: '1.5 Month'
  },
  {
    value: '2.0-Month',
    label: '2.0 Month'
  },
  {
    value: '2.5-Month',
    label: '2.5 Month'
  },
  {
    value: '3.0-Month',
    label: '3.0 Month'
  }
];

const location = [
  {
    value: '',
    label: 'Region'
  },
  {
    value: 'Johor',
    label: 'Johor'
  },
  {
    value: 'Melaka',
    label: 'Melaka'
  },
  {
    value: 'Kuala Lumpur',
    label: 'Kuala Lumpur'
  },
  {
    value: 'Selangor',
    label: 'Selangor'
  },
  {
    value: 'Penang',
    label: 'Penang'
  },
  {
    value: 'Pahang',
    label: 'Pahang'
  },
  {
    value: 'Sabah',
    label: 'Sabah'
  },
  {
    value: 'Sarawak',
    label: 'Sarawak'
  },
  {
    value: 'Terengganu',
    label: 'Terengganu'
  },
  {
    value: 'Kelantan',
    label: 'Kelantan'
  },
  {
    value: 'Kedah',
    label: 'Kedah'
  },
  {
    value: 'Perak',
    label: 'Perak'
  },
  {
    value: 'Perlis',
    label: 'Perlis'
  },
  {
    value: 'Putrajaya',
    label: 'Putrajaya'
  },
  {
    value: 'Labuan',
    label: 'Labuan'
  }
];

const initials = {
  category: 1,
  propertyType: 1,
  propertyTitle: 'Freehold',
  saleType: 'For Sale',
  tenure: 1,
  furnishing: 'Freehold',
  carpark: '2',
  amenities: 'Pool',
  title: '120 Jalan Kejayaan',
  description: 'good for investment',
  price: '40000',
  rentalDeposit: '1.5 Month',
  phone: '',
  location: 'Johor',
  city: 'Johor',
  lat: '',
  lon: '',
  address: 'johor',

  state: 'johor',
  slug: 'johor',
  zipcode: '100',
  bedrooms: 10,
  bathrooms: '1',
  floorRange: '1',
  realtor: 2
};

const validationSchema = yup.object({
  // firstName: yup.string().required('First Name is required'),
  // lastName: yup.string().required('Last Name is required')
});

// ==============================|| FORM WIZARD - VALIDATION  ||============================== //

const AddressForm = ({ shippingData, setShippingData, handleNext, setErrorIndex }) => {
  const { user } = useAuth();
  const formik = useFormik({
    initialValues: initials,
    validationSchema,
    onSubmit: (values) => {
      const {
        slug,
        title,
        address,
        city,
        state,
        zipcode,
        price,
        bedrooms,
        bathrooms,
        floorRange,
        furnishing,
        carpark,
        realtor,

        category,
        propertyType,
        propertyTitle,
        saleType,
        tenure,
        amenities,
        description,
        rentalDeposit,
        phone,
        location,
        lat,
        lon
      } = values;

      setShippingData({
        slug: slugify(title),
        title: title,
        address: address,
        state: state,
        zipcode: zipcode,
        price: price,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        floorRange: floorRange,
        furnishing: furnishing,
        carpark: carpark,
        city: city,
        realtor: realtor,

        category: category,
        propertyType: propertyType,
        propertyTitle: propertyTitle,
        saleType: saleType,
        tenure: tenure,
        amenities: amenities,
        description: description,
        rentalDeposit: rentalDeposit,
        phone: phone,
        location: location,
        lat: lat,
        lon: lon
      });
      handleNext();
    }
  });

  console.log('user', user);

  return (
    <>
      <form onSubmit={formik.handleSubmit} id="validation-forms">
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Property Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <FormControlSelect
              currencies={category}
              id="category"
              name="category"
              captionLabel="Category"
              value={formik.values.category}
              onChange={formik.handleChange}
              error={formik.touched.category && Boolean(formik.errors.category)}
              helperText={formik.touched.category && formik.errors.category}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControlSelect
              currencies={propertyTypes}
              id="propertyType"
              name="propertyType"
              captionLabel="Property Type"
              value={formik.values.propertyType}
              onChange={formik.handleChange}
              error={formik.touched.propertyType && Boolean(formik.errors.propertyType)}
              helperText={formik.touched.propertyType && formik.errors.propertyType}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControlSelect
              currencies={furnish}
              id="furnishing"
              name="furnishing"
              captionLabel="Furnishing"
              value={formik.values.furnishing}
              onChange={formik.handleChange}
              error={formik.touched.furnishing && Boolean(formik.errors.furnishing)}
              helperText={formik.touched.furnishing && formik.errors.furnishing}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlSelect
              currencies={carPark}
              id="carpark"
              name="carpark"
              captionLabel="Car Park*"
              type="number"
              value={formik.values.carpark}
              onChange={formik.handleChange}
              error={formik.touched.carpark && Boolean(formik.errors.carpark)}
              helperText={formik.touched.carpark && formik.errors.carpark}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="amenities"
              name="amenities"
              label="Amenities*"
              value={formik.values.amenities}
              onChange={formik.handleChange}
              error={formik.touched.amenities && Boolean(formik.errors.amenities)}
              helperText={formik.touched.amenities && formik.errors.amenities}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="title"
              name="title"
              label="Title*"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              name="address"
              label="address*"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="state"
              name="state"
              label="state*"
              value={formik.values.state}
              onChange={formik.handleChange}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="zipcode"
              name="zipcode"
              label="zipcode*"
              value={formik.values.zipcode}
              onChange={formik.handleChange}
              error={formik.touched.zipcode && Boolean(formik.errors.zipcode)}
              helperText={formik.touched.zipcode && formik.errors.zipcode}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="bedrooms"
              name="bedrooms"
              label="bedrooms*"
              value={formik.values.bedrooms}
              onChange={formik.handleChange}
              error={formik.touched.bedrooms && Boolean(formik.errors.bedrooms)}
              helperText={formik.touched.bedrooms && formik.errors.bedrooms}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="bathrooms"
              name="bathrooms"
              label="bathrooms*"
              value={formik.values.bathrooms}
              onChange={formik.handleChange}
              error={formik.touched.bathrooms && Boolean(formik.errors.bathrooms)}
              helperText={formik.touched.bathrooms && formik.errors.bathrooms}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="floorRange"
              name="floorRange"
              label="floorRange*"
              value={formik.values.floorRange}
              onChange={formik.handleChange}
              error={formik.touched.floorRange && Boolean(formik.errors.floorRange)}
              helperText={formik.touched.floorRange && formik.errors.floorRange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="realtor"
              name="realtor"
              label="realtor*"
              value={formik.values.realtor}
              onChange={formik.handleChange}
              error={formik.touched.realtor && Boolean(formik.errors.realtor)}
              helperText={formik.touched.realtor && formik.errors.realtor}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="description"
              name="description"
              label="Description*"
              multiline
              rows={4}
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="price"
              name="price"
              label="Price*"
              type="number"
              placeholder="RM/Month"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControlSelect
              currencies={rentalDeposit}
              type="number"
              id="rentalDeposit"
              name="rentalDeposit"
              captionLabel="Rental Deposit*"
              value={formik.values.rentalDeposit}
              onChange={formik.handleChange}
              error={formik.touched.rentalDeposit && Boolean(formik.errors.rentalDeposit)}
              helperText={formik.touched.rentalDeposit && formik.errors.rentalDeposit}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="phone"
              name="phone"
              label="phone*"
              type="tel"
              placeholder="6014644305"
              value={user?.phone || formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControlSelect
              currencies={location}
              id="location"
              name="location"
              captionLabel="Location*"
              value={formik.values.location}
              onChange={formik.handleChange}
              error={formik.touched.location && Boolean(formik.errors.location)}
              helperText={formik.touched.location && formik.errors.location}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="city"
              name="city"
              label="City*"
              type="text"
              placeholder="Area/City"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="video"
              name="video"
              label="Video*"
              type="text"
              placeholder="Youtube Link"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="flex-end">
              <AnimateButton>
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ my: 3, ml: 1, color: 'white' }}
                  type="submit"
                  onClick={() => setErrorIndex(0)}
                >
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
