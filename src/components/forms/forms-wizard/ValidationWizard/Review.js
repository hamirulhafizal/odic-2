import * as React from 'react';

// material-ui
import { CardMedia, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/styles';
import { Box } from '@mui/material';

// ==============================|| FORM WIZARD - VALIDATION  ||============================== //

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

export default function Review({ shippingData, imageProperty, previewData, editData }) {
  const theme = useTheme();

  const [avatarPreview, setAvatarPreview] = React.useState();

  const { fileName, type, size, imgE } = imageProperty;

  const {
    category,
    propertyType,
    propertyTitle,
    saleType,
    tenure,
    furnishing,
    carpark,
    amenities,
    title,
    description,
    price,
    rentalDeposit,
    phone,
    location,
    city,
    lat,
    lon,
    featureImage,
    photo_1,
    photo_2,
    photo_3,
    photo_4,
    photo_5,
    photo_6,
    photo_7,
    photo_8,
    photo_9,
    photo_10,
    video
  } = editData != null ? editData : previewData;

  const preViewImage = (item) => {
    if (item != undefined && typeof item !== 'string') {
      var src = URL?.createObjectURL(item);
      setAvatarPreview(src);
    } else {
      setAvatarPreview(item);
    }
  };

  React.useEffect(() => {
    if (imageProperty !== undefined || imageProperty !== null || featureImage !== null || editData?.previewData !== null) {
      preViewImage(previewData?.featureImage ? previewData?.featureImage : featureImage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgE, imageProperty, previewData, editData]);

  // console.log('editData--->', editData);
  console.log('previewData--->', previewData);

  return (
    <>
      <Typography variant="h3" gutterBottom sx={{ mb: 2 }}>
        Review Property Details
      </Typography>

      <List disablePadding>
        {[shippingData].map((product, key) => (
          <Box key={key}>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary={'Title'} secondary={previewData?.title} />
            </ListItem>

            <ListItem sx={{ py: 1, px: 0, flexWrap: 'wrap' }} key={product.title}>
              <ListItemText primary={'Description'} sx={{ textTransform: 'capitalize' }} secondary={product?.description} />
              <Typography variant="body2">RM {product.price}/month</Typography>
            </ListItem>

            {/* <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary={'Price'} secondary={product?.price} />
            </ListItem> */}

            {/* <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary={'Type'} secondary={propertyType} />
            </ListItem>

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary={'Category'} secondary={category} />
            </ListItem> */}
          </Box>
        ))}

        <ImageWrapper>
          <CardMedia component="img" image={avatarPreview || ''} title="Product" />
        </ImageWrapper>
      </List>
    </>
  );
}
