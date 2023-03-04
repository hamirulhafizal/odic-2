import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Stack, Typography } from '@mui/material';
import WidthdrawForms from 'components/forms/forms-validation/WidthdrawForms';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import CloseIcon from '@mui/icons-material/Close';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import Profile from '../../../users/account-profile/Profile3/Profile';
// src\components\users\account-profile\Profile3\Profile.js
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
                {isSlotId !== 0 ? (
                  <>
                    <PaidOutlinedIcon sx={{ mr: 1 }} /> <Typography variant="h4"> WITHDRAW SLOT </Typography>
                  </>
                ) : (
                  <>
                    <HowToRegOutlinedIcon sx={{ mr: 1 }} /> <Typography variant="h4"> UPDATE PROFILE</Typography>{' '}
                  </>
                )}
              </Stack>
            </DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
              {isSlotId !== 0 ? <WidthdrawForms withDrawData={isSlotId} /> : <Profile htmlFor="scrollDialog" />}
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
  );
}
