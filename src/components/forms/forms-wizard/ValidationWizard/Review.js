import * as React from 'react';

// material-ui
import { CardMedia, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/styles';

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

    fileReader.readAsDataURL(imgE?.target.files[0]);
  };

  React.useEffect(() => {
    if (imgE !== undefined || imgE !== null) {
      preViewImage(imgE);
    }
  }, [imgE]);

  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Review Summary
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
          <ListItemText primary={'Title'} secondary={firstName} />
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary={'Type'} secondary={propertyType} />
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary={'Category'} secondary={category} />
        </ListItem>
      </List>
    </>
  );
}
