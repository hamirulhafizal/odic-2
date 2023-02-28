import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Stack, Typography } from '@mui/material';
import WidthdrawForms from 'components/forms/forms-validation/WidthdrawForms';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import CloseIcon from '@mui/icons-material/Close';

// ===============================|| UI DIALOG - SCROLLABLE ||=============================== //

export default function ScrollDialog({ isModal, handleClickOpenModal, handleClickCloseModal, isSlotId }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (isModal) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [isModal]);

  return (
    <div>
      <Dialog
        open={isModal}
        onClose={handleClickCloseModal}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth={true}
        maxWidth={'sm'}
      >
        {isModal && (
          <>
            <DialogTitle id="scroll-dialog-title">
              <IconButton
                aria-label="close"
                onClick={handleClickCloseModal}
                sx={{
                  position: 'absolute',
                  right: '1px',
                  top: '-3px'
                }}
              >
                <CloseIcon />
              </IconButton>
              <Stack
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <PaidOutlinedIcon sx={{ mr: 1 }} />
                <Typography variant="h4">WITHDRAW SLOT</Typography>
              </Stack>
            </DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
              {/* <Box
                sx={{
                  textAlign: 'justify',
                  my: 2
                }}
              >
                {`  We ODIC wanted to express my sincere appreciation for your trust and patience in our investment strategies.`}
                <br />
                <br /> Your commitment and belief in our expertise have been a driving force behind our success. Thank you for your
                continued confidence in our team.
              </Box> */}

              <Box
                sx={{
                  textAlign: 'center'
                }}
              >
                <Typography variant="caption">{"Your withdrawal request's will complete within the next 24 working hours"}</Typography>
              </Box>

              <WidthdrawForms withDrawData={isSlotId} />
            </DialogContent>
            {/* <DialogActions sx={{ pr: 2.5, pt: 2.5 }}>
              <Button sx={{ color: theme.palette.error.dark }} onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button variant="contained" size="small" onClick={handleClose}>
                Subscribe
              </Button>
            </DialogActions> */}
          </>
        )}
      </Dialog>
    </div>
  );
}
