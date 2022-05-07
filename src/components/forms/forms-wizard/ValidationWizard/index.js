import React from 'react';

// material-ui
import { Button, Step, Stepper, StepLabel, Stack, Typography } from '@mui/material';

// project imports
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import GalleryForm from './GalleryForm';
import Review from './Review';
import MainCard from 'components/ui-component/cards/MainCard';
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import { Router, useRouter } from 'next/router';

// step options
const steps = ['Fill Up Detail', 'Upload Image', 'Review your Listing'];

const getStepContent = (step, handleNext, handleBack, setErrorIndex, shippingData, setShippingData, imageProperty, setPaymentData) => {
  switch (step) {
    case 0:
      return (
        <AddressForm handleNext={handleNext} setErrorIndex={setErrorIndex} shippingData={shippingData} setShippingData={setShippingData} />
      );
    case 1:
      return (
        <GalleryForm
          handleNext={handleNext}
          handleBack={handleBack}
          setErrorIndex={setErrorIndex}
          imageProperty={imageProperty}
          setPaymentData={setPaymentData}
        />
      );
    case 2:
      return <Review shippingData={shippingData} imageProperty={imageProperty} />;
    default:
      throw new Error('Unknown step');
  }
};

// ==============================|| FORMS WIZARD - BASIC ||============================== //

const ValidationWizard = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [shippingData, setShippingData] = React.useState({});
  const [imageProperty, setPaymentData] = React.useState({});
  const [errorIndex, setErrorIndex] = React.useState(null);
  const router = useRouter();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setErrorIndex(null);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const { firstName, lastName, category, propertyType } = shippingData;
  const { fileName, type, size } = imageProperty;

  return (
    <MainCard title="Create Listing">
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label, index) => {
          const labelProps = {};

          if (index === errorIndex) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                Error
              </Typography>
            );

            labelProps.error = true;
          }

          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          <>
            <Typography variant="h5" gutterBottom>
              Thank you for your Submit
            </Typography>
            <Typography variant="subtitle1">
              Your Lisiting Property is #2001539. We have emailed your appplication confirmation, and will send you an update when your
              submission has approved.
            </Typography>

            <Stack direction="row" justifyContent="flex-end">
              {/* <AnimateButton>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    setShippingData({});
                    setPaymentData({});
                    setActiveStep(0);
                  }}
                  sx={{ my: 3, ml: 1 }}
                >
                  Reset
                </Button>
              </AnimateButton> */}
              <AnimateButton>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    router.push('/listing');
                  }}
                  sx={{ my: 3, ml: 1 }}
                >
                  Listing
                </Button>
              </AnimateButton>
            </Stack>
          </>
        ) : (
          <>
            {getStepContent(
              activeStep,
              handleNext,
              handleBack,
              setErrorIndex,
              shippingData,
              setShippingData,
              imageProperty,
              setPaymentData
            )}

            {activeStep === steps.length - 1 && (
              <Stack direction="row" justifyContent={activeStep !== 0 ? 'space-between' : 'flex-end'}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <AnimateButton>
                  <Button variant="contained" onClick={handleNext} sx={{ my: 3, ml: 1 }}>
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </AnimateButton>
              </Stack>
            )}
          </>
        )}
      </>
    </MainCard>
  );
};

export default ValidationWizard;
