import React, { useEffect } from 'react';

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
import axiosInstance from 'contexts/axios';
import { setProduct, updateListingById } from 'contexts/ApiListing';
import slugify from 'utils/helper';
import useAuth from 'hooks/useAuth';
import Link from 'Link';

// step options
const steps = ['Fill Up Detail', 'Upload Image', 'Review your Listing'];

const getStepContent = (
  step,
  handleNext,
  handleBack,
  setErrorIndex,
  shippingData,
  setShippingData,
  imageProperty,
  setPaymentData,
  editData
) => {
  switch (step) {
    case 0:
      return (
        <AddressForm
          editData={editData}
          handleNext={handleNext}
          setErrorIndex={setErrorIndex}
          shippingData={shippingData}
          setShippingData={setShippingData}
        />
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

const ValidationWizard = ({ updateProperty, formFor }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [shippingData, setShippingData] = React.useState({});
  const [imageProperty, setPaymentData] = React.useState({});
  const [errorIndex, setErrorIndex] = React.useState(null);
  const [editData, setEditData] = React.useState(null);

  const [lisitngId, setLisitngId] = React.useState(null);

  const router = useRouter();

  const { user } = useAuth();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setErrorIndex(null);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  useEffect(() => {
    if (activeStep == 3 && imageProperty?.imgE != null) {
      const featureImage = imageProperty?.imgE;
      const photo_1 = imageProperty?.imgEAlbum[0];
      const photo_2 = imageProperty?.imgEAlbum[1];
      const photo_3 = imageProperty?.imgEAlbum[2];
      const photo_4 = imageProperty?.imgEAlbum[3];
      const photo_5 = imageProperty?.imgEAlbum[4];

      const propertyObj = {
        featureImage: featureImage,
        photo_1: photo_1 ? photo_1 : '',
        photo_2: photo_2 ? photo_2 : '',
        photo_3: photo_3 ? photo_3 : '',
        photo_4: photo_4 ? photo_4 : '',
        photo_5: photo_5 ? photo_5 : '',
        realtor: user?.inventories[0]?.realtor,
        ...shippingData
      };

      var form_data = new FormData();

      Object.keys(propertyObj).map(function (key, index) {
        form_data.append(key, propertyObj[key]);
      });

      if (formFor == 'UpdateListing') {
        updateListingById(updateProperty?.id, form_data).then((res) => {});
      }

      if (formFor == 'createListing') {
        setProduct(form_data)
          .then((res) => {
            const resJson1 = JSON.stringify(res);
            const resParse1 = JSON.parse(resJson1);
            setLisitngId(res?.data?.id);
            // setError('400');
            return res;
          })
          .catch((err) => {
            const resJson = JSON.stringify(err);
            const resParse = JSON.parse(resJson);
            // console.log('resParse-->', resParse);
            // console.log('err---?', err);
            return err;
          });
      }
    }

    if (updateProperty != undefined) {
      setEditData(updateProperty);
    }
    if (updateProperty == undefined) {
      setEditData();
    }
  }, [activeStep, shippingData, imageProperty, user, updateProperty, editData, formFor]);

  return (
    <MainCard title={formFor == 'createListing' ? 'Create Listing' : formFor == 'UpdateListing' ? 'Update Listing' : null}>
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
            <Typography variant="subtitle1">Your Lisiting Property is Live. Share to your waiting clients using this </Typography>

            {/* <Link href={`/listing/${lisitngId}`}>link</Link> */}

            {/* <Button
              variant="text"
              sx={{ color: 'black' }}
              onClick={() => {
                router.push(`/listing/${lisitngId}`);
              }}
            >
              link
            </Button> */}

            <Link
              href={`/listing/${lisitngId}`}
              underline="hover"
              color="default"
              // onClick={() => {
              //   router.push(`/listing/${lisitngId}`);
              // }}
              sx={{
                overflow: 'hidden',
                display: 'block',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                ':hover': { color: 'primary.main' },
                cursor: 'pointer'
              }}
            >
              LINK
            </Link>

            <Stack direction="row" justifyContent="flex-end">
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
              setPaymentData,
              editData
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
