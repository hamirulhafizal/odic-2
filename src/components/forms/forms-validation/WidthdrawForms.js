import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'store';

// material-ui
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';

// project imports
import MainCard from 'components/ui-component/cards/MainCard';
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import SecondaryAction from 'components/ui-component/cards/CardSecondaryAction';
import { openSnackbar } from 'store/slices/snackbar';
import { gridSpacing } from 'store/constant';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';

// assets
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import InvestFormula from './InvestFormula';

import { getSlot, editSlot } from 'store/slices/product';
import { setWithDrawAPI } from 'contexts/ApiInvestment';

/**
 * 'Enter your email'
 * yup.string Expected 0 arguments, but got 1 */
const validationSchema = yup.object({
  investVal: yup.number().min(1000, 'Min. RM1000 = 1 Slot').max(1000000, 'Max. RM1,000,000.00 = 1000 Slot').required('Amount is required')
});

// ==============================|| FORM VALIDATION - LOGIN FORMIK  ||============================== //

const WidthdrawForms = ({ withDrawData }) => {
  const { amount, createdAt, id, receipt, roi, roiAmount, slot, updatedAt, username } = withDrawData;

  const dispatch = useDispatch();
  const slotState = useSelector((state) => state.slot);
  const [isChecked, setCheckBox] = useState(true);
  const [isMessage, setMessage] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCheckBox = (state) => {
    setCheckBox(state);
  };

  const handleCloseScroll = () => {
    const btnScroll = document.getElementById('scrollBtnEl');
    btnScroll.click();
  };

  const handleWithdrawApi = async (data) => {
    setLoading(true);
    await setWithDrawAPI(data).then((res) => {
      console.log('res', res);

      res?.title == 'Success!' &&
        setTimeout(() => {
          setMessage(true);
          setLoading(false);
          const refreshBtn = document.getElementById('refreshButton');
          refreshBtn.click();
        }, 3000);
    });
  };

  return (
    <>
      <Stack direction={'column'}>
        {isMessage ? (
          <Box
            sx={{
              textAlign: 'center',
              pb: 2
            }}
          >
            <Typography variant="body">
              we at ODIC, wanted to express deepest sincere appreciation for your trust and patience in our investment strategies.
              <br />
              <br />
              Your commitment and belief in our expertise have been a driving force behind our success. Thank you for your continued
              confidence in our team.
            </Typography>
          </Box>
        ) : (
          <>
            <Box
              sx={{
                textAlign: 'center'
              }}
            >
              <Typography variant="caption">{"Your withdrawal request's will complete within the next 24 working hours"}</Typography>
            </Box>
            <Box
              sx={{
                pt: 2,
                pb: 3,
                display: 'flex',
                justifyContent: 'start'
              }}
            >
              <MainCard
                sx={{
                  width: matchDownSM ? '100%' : '550px',
                  boxShadow: '1px 2px 5px -1px rgb(0 0 0 / 64%) !important',
                  borderColor: 'transparent'
                }}
              >
                <InvestFormula value={amount} htmlFor="withdraw" />
              </MainCard>
            </Box>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Box sx={{ pb: 1, display: 'flex' }}>
                  <FormControlLabel
                    sx={{
                      textAlign: 'initial',
                      '& .MuiFormControlLabel-label': { fontSize: '12px' }
                    }}
                    variant="caption"
                    control={
                      <Checkbox
                        defaultChecked
                        onClick={() => {
                          handleCheckBox(!isChecked);
                        }}
                      />
                    }
                    label={`By ticking this box, your agreed with our T&C`}
                  />
                </Box>
              </Grid>
            </Grid>
          </>
        )}
        <AnimateButton>
          <Button
            onClick={() => {
              !isLoading && isMessage ? handleCloseScroll() : handleWithdrawApi(withDrawData);
            }}
            fullWidth
            endIcon={
              isLoading ? <CircularProgress size={20} sx={{ color: 'white' }} /> : !isLoading && isMessage ? null : <ArrowForwardIcon />
            }
            variant="contained"
            type="submit"
            disabled={isChecked || (!isLoading && isMessage) ? false : true}
            sx={{
              backgroundColor: '#28933F',
              opacity: !isLoading && isMessage && 1,
              '&:hover': {
                backgroundColor: '#28933F'
              }
            }}
          >
            {!isLoading && isMessage ? 'COMPLETED' : 'WITHDRAW'}
          </Button>
        </AnimateButton>
      </Stack>
    </>
  );
};

export default WidthdrawForms;
