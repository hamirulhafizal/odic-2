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
                <SubCard title="" contentSX={{ textAlign: 'center' }}>
                  <UploadUserInput htmlFor="BankPicture" />
                </SubCard>
              </Grid>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    </Grid>
  );
};

export default Bank;
