import * as React from 'react';

// material-ui
import { CardMedia, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/styles';

// ==============================|| FORM WIZARD - VALIDATION  ||============================== //

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99'
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45'
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51'
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11'
  },
  { name: 'Shipping', desc: '', price: 'Free' }
];

const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' }
];

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

export default function Review({ shippingData, imageProperty }) {
  const theme = useTheme();

  const [avatarPreview, setAvatarPreview] = React.useState();

  const { firstName, lastName, category, propertyType } = shippingData;
  const { fileName, type, size, imgE } = imageProperty;

  const preViewImage = (imgE) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        setAvatarPreview(fileReader.result);
      }
    };

    fileReader.readAsDataURL(imgE.target.files[0]);
  };

  React.useEffect(() => {
    if (imgE !== undefined || imgE !== null) {
      preViewImage(imgE);
    }
  }, []);

  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Order summary
      </Typography>
      <List disablePadding>
        {/* {products.map((product) => (
          <ListItem sx={{ py: 1, px: 0 }} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))} */}

        <ImageWrapper>
          <CardMedia component="img" image={avatarPreview || ''} title="Product" />
        </ImageWrapper>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary={firstName} secondary={lastName} />
          <Typography variant="body2">{category}</Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1">{propertyType}</Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          {/* <Typography gutterBottom>{addresses.join(', ')}</Typography> */}
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {/* {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))} */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
