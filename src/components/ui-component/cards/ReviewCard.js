import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Avatar, Stack } from '@mui/material';
import useAuth from 'hooks/useAuth';

const Avatar1 = 'https://avatars.githubusercontent.com/u/732422?s=116';
const Avatar2 = 'https://avatars.githubusercontent.com/u/197016?s=116';
const Avatar3 = 'https://avatars.githubusercontent.com/u/732421?s=116';
// const images1 = '/assets/images/landing/living-room-with-yellow.png';

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    avatar: Avatar1
  },
  {
    label: 'Create an ad group',
    description: 'An ad group contains one or more ads which target a shared set of keywords.',
    avatar: Avatar2
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    avatar: Avatar3
  }
];

export default function ReviewCard() {
  const theme = useTheme();
  const { user } = useAuth();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" sx={{ color: 'black' }} onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" sx={{ color: 'black' }} onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default'
        }}
      >
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Avatar src={`${steps[activeStep].avatar}`} />

          <Typography sx={{ pl: 2 }} variant="main">
            {steps[activeStep].label}
            {/* {steps[activeStep].label} */}
            {/* {user?.firstName} */}
          </Typography>
        </Stack>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>{steps[activeStep].description}</Box>
    </Box>
  );
}
