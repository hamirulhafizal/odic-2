import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';

import InvestForms from '../../components/forms/forms-validation/InvestForms';
import BankAcc from 'components/forms/forms-validation/BankAcc';
import AggrementForms from 'components/forms/forms-validation/AggrementForms';
import { Avatar, useMediaQuery, useTheme } from '@mui/material';
import MainCard from 'components/ui-component/cards/MainCard';

const steps = [
  {
    label: 'How much would you like to invest ?',
    description: `Enter your RM amount it will calculate how much you will earn`,
    component: 'InvestForms'
  },
  {
    label: 'Upload Bank Transfer',
    description: `Kindlly transfer your investment amount and upload the receipt`,
    component: 'BankAcc'
  },
  {
    label: 'Sign Aggrement',
    description: `Click signature button, then check signature at the bottom of document by scrolling down`,
    component: 'Aggrement'
  }
];

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800]
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)'
}));

function SwipeableEdgeDrawer({ open, handleToggle }) {
  const drawerBleeding = 0;
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
  const createdInvestment_id = localStorage.getItem('Investment_id');

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(95% - ${drawerBleeding}px)`,
            overflow: 'visible',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
          }
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={handleToggle(false)}
        onOpen={handleToggle(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true
        }}
        sx={{}}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            visibility: 'visible',
            right: 0,
            left: 0,
            pt: 5,
            textAlign: 'center',
            zIndex: 1
          }}
        >
          <Puller />
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            pt: 5,
            height: '100%',
            overflow: 'auto',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: matchDownSM ? 'start' : 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            sx={{
              position: 'relative',
              top: '2%',
              width: matchDownSM ? '100%' : 'unset',

              '& .MuiStepIcon-text': {
                fill: 'white !important',
                fontSize: '80%'
              }
            }}
          >
            {steps?.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  // optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}
                  sx={{
                    textAlign: 'initial',
                    '& .Mui-active': {
                      color: '#b5a837 !important'
                    }
                  }}
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography
                    sx={{
                      textAlign: 'initial',
                      color: 'black'
                    }}
                  >
                    {index === 2 ? (
                      <>
                        <Stack
                          direction="row"
                          sx={{
                            alignItems: 'center'
                          }}
                        >
                          {step.description}
                          <Avatar
                            sx={{
                              borderRadius: '0px',
                              backgroundColor: 'white',
                              scale: '0.7'
                            }}
                            src="/assets/images/icons/scroll.png"
                          />
                        </Stack>
                      </>
                    ) : (
                      <>{step.description}</>
                    )}
                  </Typography>
                  {step.component == 'InvestForms' && <InvestForms handleNext={handleNext} handleBack={handleBack} index={index} />}
                  {step.component == 'BankAcc' && <BankAcc handleNext={handleNext} handleBack={handleBack} index={index} />}
                  {step.component == 'Aggrement' && <AggrementForms handleNext={handleNext} handleBack={handleBack} index={index} />}
                </StepContent>
              </Step>
            ))}
            {activeStep === steps.length && (
              <>
                <Stack direction={'column'}>
                  <Box
                    sx={{
                      pt: 2,
                      pb: 5,
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                      maxWidth: '100%'
                    }}
                  >
                    <MainCard
                      sx={{
                        borderColor: 'transparent',
                        width: matchDownSM ? '100%' : '600px',
                        height: 'auto'
                      }}
                    >
                      <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography variant="h3">
                          <strong>ALL STEP COMPLETED</strong>
                        </Typography>

                        <Typography variant="h5">
                          <br />
                          <strong>{`This is your slot ID : ${createdInvestment_id} `} </strong>
                        </Typography>

                        <Typography variant="caption">
                          <br />
                          {`we will reviewing within 24 hours working day.`}
                          <br />
                          {`You can check by clicking status slot button`}
                          <br />
                          <br />
                        </Typography>
                        <Stack
                          direction={matchDownSM ? 'column-reverse' : 'row'}
                          sx={{
                            gap: 2,
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            mt: 1
                          }}
                        >
                          <Button
                            onClick={handleReset}
                            variant="contained"
                            component="label"
                            type="submit"
                            startIcon={<AddIcon />}
                            sx={{ width: matchDownSM ? '150px' : '30%' }}
                          >
                            NEW SLOT
                          </Button>
                          <Button
                            onClick={handleToggle(false)}
                            variant="contained"
                            component="label"
                            type="submit"
                            startIcon={<ListIcon />}
                            sx={{ width: matchDownSM ? '150px' : '30%', backgroundColor: '#28933F' }}
                          >
                            STATUS SLOT
                          </Button>
                        </Stack>
                      </Paper>
                    </MainCard>
                  </Box>
                </Stack>
              </>
            )}
          </Stepper>
        </StyledBox>
      </SwipeableDrawer>
    </>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default SwipeableEdgeDrawer;
