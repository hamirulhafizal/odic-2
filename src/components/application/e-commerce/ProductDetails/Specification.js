// material-ui
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextareaAutosize,
  Typography,
  useMediaQuery,
  Stack
} from '@mui/material';

import { useTheme } from '@mui/material/styles';

function createData(key, value) {
  return { key, value };
}

const propertyType = (item) => {
  if (item == 1) {
    return 'Apartment';
  }
  if (item == 2) {
    return 'Landed House';
  }

  if (item == 3) {
    return 'Private Room';
  }

  if (item == 4) {
    return 'Factory';
  }

  if (item == 5) {
    return 'Office';
  }

  if (item == 6) {
    return 'Hotel/Resort';
  }

  if (item == 7) {
    return 'ShopLot';
  }

  if (item == 8) {
    return 'Land';
  }
  if (item == null) {
    return null;
  }
};

const furnishing = (item) => {
  if (item == 'Freehold') {
    return 'Full Furnished';
  }
  if (item == 'Partial') {
    return 'Partly Furnish';
  }
  if (item == 'None') {
    return 'UnFurnish';
  }
};

// ==============================|| PRODUCT DETAILS - SPECIFICATION ||============================== //

const Specification = ({ product }) => {
  const productData = product['product'];
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        {/* <Typography variant="h4" sx={{ pb: 1.5 }}>
          General
        </Typography> */}
        <TableContainer>
          <Table sx={{ maxWidth: 'auto' }} size="small" aria-label="simple table">
            <TableBody>
              <TableRow sx={{ '& td, & th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>
                    Bedrooms
                  </Typography>
                </TableCell>
                <TableCell>{productData?.bedrooms}</TableCell>
              </TableRow>
              <TableRow sx={{ '& td, & th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>
                    Bathrooms
                  </Typography>
                </TableCell>
                <TableCell>{parseInt(productData?.bathrooms)}</TableCell>
              </TableRow>
              <TableRow sx={{ '& td, & th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>
                    Carpark
                  </Typography>
                </TableCell>
                <TableCell>{productData?.carpark}</TableCell>
              </TableRow>
              <TableRow sx={{ '& td, & th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>
                    Floor
                  </Typography>
                </TableCell>
                <TableCell>{productData?.floorRange}</TableCell>
              </TableRow>
              <TableRow sx={{ '& td, & th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>
                    Type
                  </Typography>
                </TableCell>
                <TableCell>{propertyType(productData?.propertyType)}</TableCell>
              </TableRow>
              <TableRow sx={{ '& td, & th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>
                    Furnishing
                  </Typography>
                </TableCell>
                <TableCell>{furnishing(productData?.furnishing)}</TableCell>
              </TableRow>
              <TableRow sx={{ '& td, & th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>
                    Address
                  </Typography>
                </TableCell>
                <TableCell>{productData?.address}</TableCell>
              </TableRow>
              <TableRow sx={{ '& td, & th': { border: 0 }, display: matchDownSM ? 'none' : '' }}>
                <TableCell sx={{ display: 'block' }} component="th" scope="row">
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>
                    Description
                  </Typography>
                </TableCell>
                <TableCell>
                  <TextareaAutosize
                    inputProps={{ readOnly: true }}
                    label="Description"
                    multiline
                    rows={5}
                    value={productData?.description}
                    disable
                    disableUnderline
                    readOnly
                    aria-label="empty textarea"
                    style={{
                      width: '100%',
                      cursor: 'default',
                      border: '0px',
                      resize: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Stack sx={{ padding: '6px 16px ', width: '100%', display: matchDownSM ? 'flex' : 'none' }}>
            <Typography variant="caption" sx={{ fontWeight: 500 }}>
              Description
            </Typography>
            <TextareaAutosize
              InputProps={{ readOnly: true, disableUnderline: true }}
              label="Description"
              multiline
              rows={5}
              value={productData?.description}
              disable
              aria-label="empty textarea"
              style={{
                width: '100%',
                cursor: 'default',
                border: '0px',
                fontFamily: 'inherit'
              }}
            />
          </Stack>
        </TableContainer>
      </Grid>

      {/* <Grid item xs={12} lg={6}>
        <Typography variant="h4" sx={{ pb: 1.5 }}>
          In The Box
        </Typography>
        <TableContainer>
          <Table sx={{ maxWidth: 280 }} size="small" aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.key} sx={{ '& td, & th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    <Typography variant="caption" sx={{ fontWeight: 500 }}>
                      {row.key}
                    </Typography>
                  </TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid> */}
    </Grid>
  );
};

export default Specification;
