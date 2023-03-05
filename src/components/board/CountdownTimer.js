import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const CountdownTimer = ({ created_date, created_time, dividen_date, children, status }) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const targetTime = moment(dividen_date);
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {status == 'Progress' && (
        <>
          <Typography variant="h5" sx={{ color: '#B5A837', pr: 2 }}>
            {`Dividend:`}
          </Typography>

          <Box
            sx={{
              fontSize: '12px',
              textAlign: 'start',
              display: 'flex',
              justifyContent: 'center',
              alignItems: ' flex-start',
              flexDirection: 'column'
            }}
          >
            <Typography variant="span"> {moment(dividen_date).format('DD MMM YYYY')}</Typography>
          </Box>
        </>
      )}

      {!matchDownSM && (
        <Box
          sx={{
            fontSize: '12px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            backgroundColor: '#fff7b37d',
            borderRadius: '2px',
            mt: 1
          }}
        >
          <Typography
            variant="span"
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-evenly'
            }}
          >
            {status == 'Progress' ? (
              <>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>
                  {timeBetween.years()}{' '}
                  <span style={{ marginLeft: '-5px', paddingRight: '5px', paddingLeft: '2px', fontSize: '10px' }}>Year</span>
                </span>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                  {timeBetween.months()}{' '}
                  <span style={{ marginLeft: '-5px', paddingRight: '5px', paddingLeft: '2px', fontSize: '10px' }}>Month</span>
                </span>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                  {timeBetween.days()}{' '}
                  <span style={{ marginLeft: '-5px', paddingRight: '5px', paddingLeft: '2px', fontSize: '10px' }}>Day</span>
                </span>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                  {timeBetween.hours()}{' '}
                  <span style={{ marginLeft: '-5px', paddingRight: '5px', paddingLeft: '2px', fontSize: '10px' }}>Hour</span>
                </span>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                  {timeBetween.minutes()}{' '}
                  <span style={{ marginLeft: '-5px', paddingRight: '5px', paddingLeft: '2px', fontSize: '10px' }}>Min</span>
                </span>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                  {timeBetween.seconds()}{' '}
                  <span style={{ marginLeft: '-5px', paddingRight: '5px', paddingLeft: '2px', fontSize: '10px' }}>Sec</span>
                </span>
              </>
            ) : (
              <Typography
                variant="span"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  width: '100%'
                }}
              >
                <span style={{ fontSize: '13px', fontWeight: 'bold', p: 1 }}>
                  {status == 'Pending' && `your dividen will start count once get approval`}
                  {status == 'Withdraw' && `Now , You can request transfer for your money + dividen to your accout bank`}
                  {status == 'Floating' && `ODIC currently processing your money + dividen`}
                  {status == 'Completed' && `Congrats ! ODIC already transfed your money + dividen to your accout bank`}
                  {status == 'Fail' && `Something when wrong, make sure you upload IC or contact us for direct support`}
                </span>
              </Typography>
            )}
          </Typography>
        </Box>
      )}
      {matchDownSM && (
        <>
          <Box
            sx={{
              fontSize: '12px',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%',
              backgroundColor: '#fff7b37d',
              borderRadius: '2px',
              mt: 1
            }}
          >
            <Typography
              variant="span"
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%'
              }}
            >
              {status == 'Progress' ? (
                <>
                  <span style={{ fontSize: '14px', fontWeight: 'bold' }}>
                    {timeBetween.years()}{' '}
                    <span style={{ marginLeft: '-5px', paddingRight: '5px', paddingLeft: '2px', fontSize: '10px' }}>Yrs</span>
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                    {timeBetween.months()}{' '}
                    <span style={{ marginLeft: '-5px', paddingRight: '5px', paddingLeft: '3px', fontSize: '10px' }}>Mth</span>
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                    {timeBetween.days()}{' '}
                    <span style={{ marginLeft: '-5px', paddingRight: '5px', paddingLeft: '3px', fontSize: '10px' }}>Day</span>
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                    {timeBetween.hours()}{' '}
                    <span style={{ marginLeft: '-5px', paddingRight: '5px', paddingLeft: '3px', fontSize: '10px' }}>Hr</span>
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                    {timeBetween.minutes()}{' '}
                    <span style={{ marginLeft: '-5px', paddingRight: '5px', paddingLeft: '3px', fontSize: '10px' }}>Min</span>
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                    {timeBetween.seconds()}{' '}
                    <span style={{ marginLeft: '-5px', paddingRight: '5px', paddingLeft: '3px', fontSize: '10px' }}>Sec</span>
                  </span>
                </>
              ) : (
                <Box
                  sx={{
                    fontSize: '12px',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    width: '100%',
                    backgroundColor: '#fff7b37d',
                    borderRadius: '2px',
                    my: 1
                  }}
                >
                  <Typography
                    variant="span"
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-evenly',
                      width: '100%'
                    }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: '400', p: 1 }}>
                      {status == 'Pending' && `your dividen will start count once get approval`}
                      {status == 'Withdraw' && `Now , You can request transfer for your money + dividen to your accout bank`}
                      {status == 'Floating' && `ODIC currently processing your money + dividen`}
                      {status == 'Completed' && `Congrats ! ODIC already transfed your money + dividen to your accout bank`}
                      {status == 'Fail' && `Something when wrong, make sure you update IC or contact us for direct support`}
                    </span>
                  </Typography>
                </Box>
              )}
            </Typography>
          </Box>
        </>
      )}

      {children}
    </>
  );
};

export default CountdownTimer;
