import React, { useState, useEffect } from 'react';
import MainCard from 'components/ui-component/cards/MainCard';

import { Box, Button, IconButton, Stack, styled, Tooltip, tooltipClasses, Typography, useMediaQuery, useTheme } from '@mui/material';

import { checkDateEnd, numberWithCommas } from 'utils/helper';
import { useSelector } from 'store';
import CountdownTimer from './CountdownTimer';
import StatusProgress from './StatusProgress';
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import moment from 'moment';
import { ConstructionSharp } from '@mui/icons-material';

const CardSlot = ({ data, handleClickOpenModal }) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  const checkRoi = (value) => {
    let roi;

    if (value <= 10000) roi = 25;
    if (value >= 10000 && value <= 30000) roi = 27;
    if (value > 30000) roi = 30;

    return roi;
  };

  return (
    <>
      {data
        ?.slice()
        .reverse()
        .map((item, index) => {
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
                    key={index}
                    direction="row"
                    sx={{
                      width: '100%',
                      textAlign: 'start'
                    }}
                  >
                    <Typography variant="caption" sx={{ fontWeight: 'bolder' }}>
                      slot ID : {item?.id}
                    </Typography>
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
                    <Typography
                      variant="h5"
                      sx={{
                        textAlign: 'left',
                        width: '90%'
                      }}
                    >
                      RM {numberWithCommas(+item?.amount)}
                      <span
                        style={{
                          color: '#287F93',
                          position: 'relative',
                          left: '5%'
                        }}
                      >
                        {`=  Invested ${+item?.amount / 1000} Slot`}
                      </span>
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
                        pt: item?.status == 'Progress' && 3
                      }}
                    >
                      <CountdownTimer
                        created_date={item?.created_at}
                        status={item?.status}
                        created_time={item?.created_time}
                        dividen_date={item?.dividen_date}
                      >
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
                              disabled={item?.status == 'Pending' ? true : false}
                              variant="contained"
                              type="submit"
                              onClick={() => {
                                item?.status == 'Progress' && checkDateEnd(item?.dividen_date, item?.id) && handleClickOpenModal(item);
                                item?.status == 'Withdraw' && handleClickOpenModal(item);
                              }}
                              sx={{
                                textTransform: 'uppercase',
                                width: '140px',
                                opacity:
                                  item?.status == 'Progress' ||
                                  item?.status == 'Fail' ||
                                  item?.status == 'Completed' ||
                                  item?.status == 'Floating'
                                    ? item?.status == 'Withdraw' ||
                                      (item?.status == 'Progress' && checkDateEnd(item?.dividen_date, item?.id))
                                      ? '1'
                                      : '0.6'
                                    : 'none',
                                backgroundColor:
                                  item?.status == 'Withdraw' || (item?.status == 'Progress' && checkDateEnd(item?.dividen_date, item?.id))
                                    ? '#28933F'
                                    : item?.status == 'Fail'
                                    ? '#B53737'
                                    : item?.status == 'Completed'
                                    ? '#372893'
                                    : item?.status == 'Floating'
                                    ? '#378FB5'
                                    : 'none',
                                '&:hover': {
                                  backgroundColor:
                                    item?.status == 'Withdraw' || (item?.status == 'Progress' && checkDateEnd(item?.dividen_date, item?.id))
                                      ? '#28933F'
                                      : item?.status == 'Fail'
                                      ? '#B53737'
                                      : item?.status == 'Completed'
                                      ? '#372893'
                                      : item?.status == 'Floating'
                                      ? '#378FB5'
                                      : 'none'
                                }
                              }}
                            >
                              {item?.status == 'Pending' && 'Pending 🔍'}
                              {item?.status == 'Withdraw' && 'Withdraw 💲'}
                              {item?.status == 'Fail' && 'Fail ❌️'}
                              {item?.status == 'Floating' && 'Floating 🔄'}
                              {item?.status == 'Completed' && 'Completed 💯'}
                              {item?.status == 'Progress' && checkDateEnd(item?.dividen_date, item?.id) && 'Withdraw 💲'}
                              {item?.status == 'Progress' && !checkDateEnd(item?.dividen_date, item?.id) && 'Progress ⏱️'}
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
