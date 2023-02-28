import React from 'react';
import MainCard from 'components/ui-component/cards/MainCard';

import { Box, Button, IconButton, Stack, styled, Tooltip, tooltipClasses, Typography, useMediaQuery, useTheme } from '@mui/material';

import { numberWithCommas } from 'utils/helper';
import { useSelector } from 'store';
import CountdownTimer from './CountdownTimer';
import StatusProgress from './StatusProgress';
import AnimateButton from 'components/ui-component/extended/AnimateButton';

const CardSlot = ({ data, handleClickOpenModal }) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const { slot } = useSelector((state) => state.product);

  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const checkRoi = (value) => {
    let roi;

    if (value <= 10000) roi = 25;
    if (value >= 10000 && value <= 30000) roi = 27;
    if (value > 30000) roi = 30;

    return roi;
  };

  return (
    <>
      {data?.map((item, index) => {
        return (
          <>
            <MainCard
              id={index}
              key={index}
              sx={{
                width: matchDownSM ? '100%' : '550px',
                boxShadow: '1px 2px 5px -1px rgb(0 0 0 / 64%) !important',
                borderColor: 'transparent'
              }}
            >
              <Box
                flexDirection={'column'}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  width: '100%',
                  justifyContent: 'space-between'
                }}
              >
                <Stack
                  direction="row"
                  sx={{
                    width: '100%',
                    textAlign: 'start'
                  }}
                >
                  <Typography variant="caption">slot ID : {item?.id}</Typography>
                </Stack>
                <Stack
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'start',
                    justifyContent: 'start',
                    width: '100%',
                    p: 0
                  }}
                >
                  <Typography variant="h5">RM {numberWithCommas(+item?.amount)}</Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#287F93',
                      pl: 1
                    }}
                  >
                    {`=  Invested ${+item?.amount / 1000} Slot`}
                  </Typography>
                </Stack>

                <Stack
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        textAlign: 'start'
                      }}
                    >
                      RM {numberWithCommas((+item?.amount * checkRoi(item?.amount)) / 100)}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        position: 'relative',
                        top: '1px',
                        color: '#28933F',
                        pl: 1,
                        pt: 1
                      }}
                    >
                      ROI {checkRoi(+item?.amount)}%
                    </Typography>
                  </Box>
                </Stack>

                <Stack
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    width: '100%'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'start',
                      flexFlow: 'wrap',
                      width: '100%',
                      pt: 3
                    }}
                  >
                    <Typography variant="h5" sx={{ color: '#B5A837', pr: 2 }}>
                      {`Dividend:`}
                    </Typography>
                    <CountdownTimer created_date={item?.created_date} created_time={item?.created_time} dividenDate={item?.dividenDate}>
                      {/* <StatusProgress /> */}
                      <Box
                        sx={{
                          pt: 2,
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'end'
                        }}
                      >
                        <AnimateButton>
                          <Button
                            // fullWidth
                            disabled={item?.status == 'Pending' ? true : false}
                            endIcon={'🔍'}
                            variant="contained"
                            type="submit"
                            onClick={() => {
                              item?.status == 'Progress' && handleClickOpenModal(item);
                            }}
                            sx={{ textTransform: 'uppercase' }}
                          >
                            {item?.status}
                          </Button>
                        </AnimateButton>
                      </Box>
                    </CountdownTimer>
                  </Box>
                </Stack>
              </Box>
            </MainCard>
          </>
        );
      })}
    </>
  );
};

export default CardSlot;
