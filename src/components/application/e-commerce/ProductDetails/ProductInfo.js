import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'Link';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Button,
  ButtonBase,
  ButtonGroup,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Rating,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
  TableContainer,
  Badge
} from '@mui/material';

// third-party
import { useFormik, Form, FormikProvider, useField } from 'formik';
import * as yup from 'yup';

// project imports
import Chip from 'components/ui-component/extended/Chip';
import Avatar from 'components/ui-component/extended/Avatar';
import ColorOptions from '../ColorOptions';
import { openSnackbar } from 'store/slices/snackbar';
import { useDispatch, useSelector } from 'store';
import { addProduct } from 'store/slices/cart';

// assets
import CircleIcon from '@mui/icons-material/Circle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import StarBorderTwoToneIcon from '@mui/icons-material/StarBorderTwoTone';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import WhatsappTwoToneIcon from '@mui/icons-material/WhatsappTwoTone';
import PoolIcon from '@mui/icons-material/Pool';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import MosqueIcon from '@mui/icons-material/Mosque';
import { getProfileAgentById } from 'contexts/ApiListing';
import { useEffect, useState } from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import YouTubeIcon from '@mui/icons-material/YouTube';

import moment from 'moment';
import { getRelatedProducts } from 'store/slices/product';

// product color select
function getColor(color) {
  return ColorOptions.filter((item) => item.value === color);
}

// product size
const sizeOptions = [8, 10, 12, 14, 16, 18, 20];

const validationSchema = yup.object({
  color: yup.string().required('Colors selection is required'),
  size: yup.number().required('Size selection is required.')
});

// ==============================|| COLORS OPTION ||============================== //

const Colors = ({ checked, colorsData }) => {
  const theme = useTheme();
  return (
    <Grid item>
      <Tooltip title={colorsData[0].label}>
        <ButtonBase sx={{ borderRadius: '50%' }}>
          <Avatar
            color="inherit"
            size="badge"
            sx={{
              bgcolor: colorsData[0].bg,
              color: theme.palette.mode === 'light' ? 'grey.50' : 'grey.800'
            }}
          >
            {checked && <CircleIcon sx={{ color: theme.palette.mode === 'light' ? 'grey.50' : 'grey.800', fontSize: '0.75rem' }} />}
            {!checked && <CircleIcon sx={{ color: colorsData[0].bg, fontSize: '0.75rem' }} />}
          </Avatar>
        </ButtonBase>
      </Tooltip>
    </Grid>
  );
};

Colors.propTypes = {
  checked: PropTypes.bool,
  colorsData: PropTypes.array
};

function createData(key, value) {
  return { key, value };
}

const rowsGeneral = [
  createData('Type', 'Hooded Neck, Paint Clothes'),
  createData('Sleeve', 'Full'),
  createData('Fit', 'Regular'),
  createData('Fabric', 'Hosiery, Smooth, Silk'),
  createData('Style', 'CV-TS9865'),
  createData('Ideal For', 'All'),
  createData('Size', 'Free'),
  createData('Pattern', 'Printed'),
  createData('Reversible', 'No'),
  createData('Secondary Color', 'Black, Brown')
];

const Increment = (props) => {
  const [field, , helpers] = useField(props);

  const { value } = field;
  const { setValue } = helpers;
  return (
    <ButtonGroup size="large" variant="text" color="inherit" sx={{ border: '1px solid', borderColor: 'grey.400' }}>
      <Button key="three" disabled={value <= 1} onClick={() => setValue(value - 1)} sx={{ pr: 0.75, pl: 0.75, minWidth: '0px !important' }}>
        <RemoveIcon fontSize="inherit" />
      </Button>
      <Button key="two" sx={{ pl: 0.5, pr: 0.5 }}>
        {value}
      </Button>
      <Button key="one" onClick={() => setValue(value + 1)} sx={{ pl: 0.75, pr: 0.75, minWidth: '0px !important' }}>
        <AddIcon fontSize="inherit" />
      </Button>
    </ButtonGroup>
  );
};

// ==============================|| PRODUCT DETAILS - INFORMATION ||============================== //

const ProductInfo = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [agentData, setAgentData] = useState();

  const cart = useSelector((state) => state.cart);

  const agetData = (user_name) => {
    getProfileAgentById(user_name).then((res) => {
      setAgentData(res?.data);

      dispatch(getRelatedProducts(router.query.id, res?.data?.inventories));
    });
  };

  useEffect(() => {
    if (agentData == null) {
      agetData(product?.user_name);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product?.user_name, agentData]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: product.id,
      name: product.name,
      image: product.image,
      salePrice: product.salePrice,
      offerPrice: product.offerPrice,
      color: '',
      size: '',
      quantity: 1
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(addProduct(values, cart.checkout.products));
      dispatch(
        openSnackbar({
          open: true,
          message: 'Submit Success',
          variant: 'alert',
          alert: {
            color: 'success'
          },
          close: false
        })
      );

      router.push('/app/e-commerce/checkout');
    }
  });

  const { values, errors, handleSubmit, handleChange } = formik;

  const addCart = () => {
    values.color = values.color ? values.color : 'primaryDark';
    values.size = values.size ? values.size : '8';
    dispatch(addProduct(values, cart.checkout.products));
    dispatch(
      openSnackbar({
        open: true,
        message: 'Add To Cart Success',
        variant: 'alert',
        alert: {
          color: 'success'
        },
        close: false
      })
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Chip
                size="small"
                label={product.isStock ? 'Active' : 'Active'}
                chipcolor={product.isStock ? 'success' : 'success'}
                sx={{ borderRadius: '4px', textTransform: 'capitalize' }}
              />
            </Grid>
          </Grid>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3">{product?.title}</Typography>
      </Grid>

      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h2" color="primary">
            RM {product?.price} / month
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Stack direction="column" sx={{ pt: 2 }}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={<VerifiedIcon sx={{ fontSize: '1.5em' }} color="secondary" />}
            >
              <Avatar
                onClick={() => {
                  router.push(`/${agentData?.user_name}`);
                }}
                alt="User 1"
                src={agentData?.photo}
                sx={{
                  borderRadius: '16px',
                  margin: '5px auto 0',
                  width: '50px',
                  height: '50px',
                  backgroundColor: 'transparent',
                  borderRadius: '100%',
                  cursor: 'pointer'
                }}
              />
            </Badge>
          </Stack>

          <Stack direction="column" sx={{ pl: 2, pt: { xs: 3 } }}>
            <Typography
              onClick={() => {
                router.push(`/${agentData?.user_name}`);
              }}
              variant="h4"
              color="main"
              sx={{ textTransform: 'capitalize', cursor: 'pointer' }}
            >
              {agentData?.firstName} {agentData?.lastName}
            </Typography>
            <Typography variant="subtitle2" color="secondary">
              Posted on {moment(product?.inventory_date).format('DD MMM YYYY')}
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={10}>
                {/* <List>
                  <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap ', py: 1, px: 0 }}>
                    <ListItemText
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',

                        '& .MuiListItemText-primary': {
                          pr: '10%'
                        }
                      }}
                      primary={
                        <>
                          <Stack display="flex" direction="row" alignItems="center">
                            <ListItemIcon>
                              <PoolIcon />
                            </ListItemIcon>
                            Pool
                          </Stack>
                        </>
                      }
                      secondary={
                        <>
                          <Stack display="flex" direction="row" alignItems="center">
                            <ListItemIcon>
                              <LocalGasStationIcon />
                            </ListItemIcon>
                            Petrol
                          </Stack>
                        </>
                      }
                    />

                    <ListItemText
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',

                        '& .MuiListItemText-primary': {
                          pr: '10%'
                        }
                      }}
                      primary={
                        <>
                          <Stack display="flex" direction="row" alignItems="center">
                            <ListItemIcon>
                              <StoreMallDirectoryIcon />
                            </ListItemIcon>
                            Mall
                          </Stack>
                        </>
                      }
                      secondary={
                        <>
                          <Stack display="flex" direction="row" alignItems="center">
                            <ListItemIcon>
                              <MosqueIcon />
                            </ListItemIcon>
                            Mosque
                          </Stack>
                        </>
                      }
                    />
                  </ListItem>
                </List> */}

                <TableContainer>
                  <Table sx={{ maxWidth: 380 }} size="small" aria-label="simple table">
                    <TableBody>
                      <TableRow sx={{ '& td, & th': { border: 0, textTransform: 'capitalize' } }}>
                        <TableCell>
                          <b>Bedrooms </b> {product?.bedrooms}
                        </TableCell>
                        <TableCell>
                          <b>Bathrooms </b> {parseInt(product?.bathrooms)}
                        </TableCell>
                      </TableRow>
                      <TableRow sx={{ '& td, & th': { border: 0, textTransform: 'capitalize' } }}>
                        {/* <TableCell>
                          <b>Deposit </b> {product?.rentalDeposit.replace('-', ' ')}
                        </TableCell> */}
                        <TableCell>
                          <b>State </b> {product?.state}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                {/* <Table>
                  <TableBody sx={{ '& .MuiTableCell-root': { borderBottom: 'none' } }}>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body2">
                          Colors{' '}
                          <Typography color="error" component="span">
                            *
                          </Typography>
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <RadioGroup
                          row
                          value={values.color}
                          onChange={handleChange}
                          aria-label="colors"
                          name="color"
                          id="color"
                          sx={{ ml: 1 }}
                        >
                          {product.colors &&
                            product.colors.map((item, index) => {
                              const colorsData = getColor(item);
                              return (
                                <FormControlLabel
                                  key={index}
                                  value={item}
                                  control={
                                    <Radio
                                      sx={{ p: 0.25 }}
                                      disableRipple
                                      checkedIcon={<Colors checked colorsData={colorsData} />}
                                      icon={<Colors colorsData={colorsData} />}
                                    />
                                  }
                                  label=""
                                />
                              );
                            })}
                        </RadioGroup>
                        {errors.color && (
                          <FormHelperText error id="standard-label-color">
                            {errors.color}
                          </FormHelperText>
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Stack>
                          <Typography variant="body2">
                            Size{' '}
                            <Typography color="error" component="span">
                              *
                            </Typography>
                          </Typography>
                          <Typography variant="caption" color="primary" component={Link} href="#">
                            Size Chart?
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell align="left">
                        <FormControl sx={{ minWidth: 120 }}>
                          <Select
                            id="size"
                            name="size"
                            value={values.size}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {sizeOptions.map((option, index) => (
                              <MenuItem sx={{ p: 1.25 }} key={index} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        {errors.size && (
                          <FormHelperText error id="standard-label-size">
                            {errors.size}
                          </FormHelperText>
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body2">Quantity</Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Increment name="quantity" />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table> */}
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Stack
                      direction="row"
                      sx={{
                        justifyContent: 'start'
                      }}
                    >
                      {product?.video !== null && (
                        <Button sx={{ position: 'relative', right: '2%' }} variant="contained" size="medium" startIcon={<YouTubeIcon />}>
                          <a target="_blank" href={product?.video} rel="noopener noreferrer">
                            Youtube
                          </a>
                        </Button>
                      )}
                      <Button
                        startIcon={<WhatsappTwoToneIcon />}
                        variant="contained"
                        size="medium"
                        sx={{ backgroundColor: '#28933F', color: 'white' }}
                      >
                        <a target="_blank" href={`https://wasap.my/${agentData?.phone}/${product.title}`} rel="noopener noreferrer">
                          Whatsapp
                        </a>
                      </Button>
                    </Stack>
                  </Grid>
                  {/* <Grid item xs={12}>
                    <Button type="submit" fullWidth color="secondary" variant="contained" size="large">
                      Buy Now
                    </Button>
                  </Grid> */}
                </Grid>
              </Grid>
            </Grid>
          </Form>
        </FormikProvider>
      </Grid>
    </Grid>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.object
};

export default ProductInfo;
