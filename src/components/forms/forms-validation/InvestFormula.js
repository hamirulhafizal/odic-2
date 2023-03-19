import {
  Box,
  Button,
  ClickAwayListener,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  styled,
  Tooltip,
  tooltipClasses,
  Typography
} from '@mui/material';
import React from 'react';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { numberWithCommas } from 'utils/helper';

const HtmlTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgba(97, 97, 97, 0.9)',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9'
  }
}));

const InvestFormula = ({ value, htmlFor }) => {
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
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <Typography variant="h6">RM {numberWithCommas(value)}</Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#287F93'
            }}
          >
            {value / 1000} Slot
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
          <Typography
            variant="h3"
            sx={{
              textAlign: 'start'
            }}
          >
            RM {numberWithCommas(value * (checkRoi(value) / 100)).substring(0, 10)}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <Button
                onClick={handleTooltipOpen}
                color="secondary"
                sx={{
                  p: 0,
                  ':hover': {
                    backgroundColor: 'transparent'
                  }
                }}
              >
                <HtmlTooltip
                  arrow
                  placement="bottom-end"
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  onClose={handleTooltipClose}
                  open={open}
                  title={
                    <>
                      <Stack
                        sx={{
                          pt: 2,

                          textAlign: 'center'
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            color: 'white'
                          }}
                        >
                          Return On Investment (ROI)
                        </Typography>
                      </Stack>

                      <List
                        sx={{
                          width: 'auto'
                        }}
                      >
                        <ListItem
                          disablePadding
                          sx={{
                            textAlign: 'center',
                            flexDirection: 'column',
                            color: 'white'
                          }}
                        >
                          <ListItemText variant="span" primary="RM10K below ROI 25%" />
                          <br />
                          <ListItemText variant="span" primary="RM10-30K range ROI 27%" />
                          <br />
                          <ListItemText variant="span" primary="RM30K above ROI 30%" />
                        </ListItem>
                      </List>
                    </>
                  }
                >
                  <InfoOutlinedIcon
                    sx={{
                      fontSize: '130%',
                      p: 0,
                      mr: 0.5,
                      color: '#28933F',
                      backgroundColor: '#28933F',
                      color: 'white',
                      borderRadius: '50%',
                      boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'
                    }}
                  />
                </HtmlTooltip>
                <Typography
                  variant="h6"
                  sx={{
                    position: 'relative',
                    top: htmlFor == 'NewInvest' ? '2px' : '1px',
                    color: '#28933F',
                    cursor: 'pointer',
                    textDecoration: htmlFor == 'NewInvest' && 'underline'
                  }}
                >
                  ROI {checkRoi(value)}%
                </Typography>
              </Button>
            </ClickAwayListener>
          </Box>
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
          <Typography variant="h6" sx={{ color: '#B5A837' }}>
            Lock duration{' '}
          </Typography>

          <Typography variant="h6">
            {htmlFor == 'NewInvest' && `14 Month`}
            {htmlFor == 'withdraw' && `Completed`}
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default InvestFormula;
