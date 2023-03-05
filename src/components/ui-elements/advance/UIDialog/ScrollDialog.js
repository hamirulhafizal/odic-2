import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Slide, Stack, Typography } from '@mui/material';
import WidthdrawForms from 'components/forms/forms-validation/WidthdrawForms';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import CloseIcon from '@mui/icons-material/Close';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import Profile from '../../../users/account-profile/Profile3/Profile';
// src\components\users\account-profile\Profile3\Profile.js
// ===============================|| UI DIALOG - SCROLLABLE ||=============================== //

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ScrollDialog({ isModal, handleClickOpenModal, handleClickCloseModal, isSlotId }) {
  const theme = useTheme();

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
        TransitionComponent={Transition}
        transitionDuration={500}
        keepMounted
      >
        <DialogTitle id="scroll-dialog-title">
          <IconButton
            aria-label="close"
            onClick={handleClickCloseModal}
            id="scrollBtnEl"
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
        <DialogContent dividers={true}>
          {isSlotId !== undefined && isSlotId !== 0 ? <WidthdrawForms withDrawData={isSlotId} /> : <Profile htmlFor="scrollDialog" />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
