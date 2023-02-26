import Link from 'Link';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Button,
  CardMedia,
  Divider,
  Grid,
  Link as MuiLink,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';

// project imports
import BillCard from 'components/ui-component/cards/BillCard';
import SubCard from 'components/ui-component/cards/SubCard';
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import Chip from 'components/ui-component/extended/Chip';
import { gridSpacing } from 'store/constant';
import UploadUserInput from './UploadUserInput';

// assets
const imageDiscover = '/assets/images/pages/card-discover.png';
const imageMasterCard = '/assets/images/pages/card-master.png';
const imageVisa = '/assets/images/pages/card-visa.png';

// table data
function createData(tid, date, amount, badgeText, badgeType) {
  return { tid, date, amount, badgeText, badgeType };
}

const rows = [
  createData('12877227695', '26 Feb 2021 9:16 am', '$56.32', 'Awaiting', 'warning'),
  createData('12901477937', '30 Jan 2021 2:54 pm', '$75.56', 'Paid', 'success'),
  createData('12767886919', '22 Jan 2021 12:01 pm', '$34.23', 'Paid', 'success')
];

// ==============================|| PROFILE 3 - BILLING ||============================== //

const Bank = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <SubCard
          title="Bank Account"
          secondary={
            <AnimateButton>
              <Button variant="contained" size="small">
                Add New Method
              </Button>
            </AnimateButton>
          }
        >
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container spacing={1} alignItems="center" justifyContent="space-between">
                {/* <Grid item>
                  <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                    <CardMedia component="img" image={imageVisa} title="payment" sx={{ width: 65 }} />
                    <Stack>
                      <Typography variant="subtitle1">Visa card</Typography>
                      <Typography variant="subtitle2">Ending in 5269 07XX XXXX 8110</Typography>
                    </Stack>
                  </Stack>
                </Grid> */}
                {/* <Grid item>
                  <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={1}>
                    <Chip label="Default" size="small" />
                    <Typography variant="caption" sx={{ color: 'grey.300' }}>
                      |
                    </Typography>
                    <MuiLink component={Link} href="#" underline="hover">
                      Edit
                    </MuiLink>
                  </Stack>
                </Grid> */}

                <SubCard title="" contentSX={{ textAlign: 'center' }}>
                  <UploadUserInput htmlFor="BankPicture" />
                </SubCard>
              </Grid>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
      {/* <Grid item xs={12}>
        <SubCard sx={{ overflowX: 'auto' }} title="Billing History" content={false}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ pl: 3 }}>Order No.</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell sx={{ pr: 3 }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow hover key={index}>
                    <TableCell sx={{ pl: 3 }}>{row.tid}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell sx={{ pr: 3 }}>
                      <Chip chipcolor={row.badgeType} label={row.badgeText} size="small" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </SubCard>
      </Grid> */}
    </Grid>
  );
};

export default Bank;
