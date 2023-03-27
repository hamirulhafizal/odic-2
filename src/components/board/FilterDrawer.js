import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {
  Autocomplete,
  autocompleteClasses,
  IconButton,
  Popper,
  Stack,
  styled,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { getSlotData, resetAllSlot } from 'store/slices/product';
import { useDispatch, useSelector } from 'store';
import { dispatch } from '../../store/index';

const filterStatus = [
  { label: 'All 🔍', status: 'All' },
  { label: 'Pending 🔍', status: 'Pending' },
  { label: 'Progress ⏱️', status: 'Progress' },
  { label: 'Withdraw 💲', status: 'Withdraw' },
  { label: 'Fail ❌️', status: 'Fail' },
  { label: 'Floating 🔄', status: 'Floating' },
  { label: 'Completed 💯', status: 'Completed' }
];

function ComboBox() {
  const [value, setValue] = React.useState(filterStatus[0]);

  const handleSelect = (option) => {
    dispatch(getSlotData(option?.status));
    setValue(option);
  };

  return (
    <Autocomplete
      onChange={(event, option) => handleSelect(option)}
      disablePortal
      id="combo-box-demo"
      fullWidth
      options={filterStatus}
      sx={{
        width: '100%'
      }}
      value={value != null ? value : filterStatus[0]}
      inputValue={value != null ? value?.label : filterStatus[0].label}
      size="small"
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{
            // color: 'grey',
            color:
              option.label == 'Pending 🔍'
                ? 'grey'
                : option.label == 'Withdraw 💲'
                ? '#28933F'
                : option.label == 'Fail ❌️'
                ? '#B53737'
                : option.label == 'Floating 🔄'
                ? '#378FB5'
                : option.label == 'Completed 💯'
                ? '#372893'
                : option.label == 'Progress ⏱️'
                ? '#b5a837'
                : option.label == 'All 🔍'
                ? 'black'
                : null,
            ':hover': {
              color:
                option.label == 'Pending 🔍'
                  ? 'grey'
                  : option.label == 'Withdraw 💲'
                  ? '#28933F'
                  : option.label == 'Fail ❌️'
                  ? '#B53737'
                  : option.label == 'Floating 🔄'
                  ? '#378FB5'
                  : option.label == 'Completed 💯'
                  ? '#372893'
                  : option.label == 'Progress ⏱️'
                  ? '#b5a837'
                  : option.label == 'All 🔍'
                  ? 'black'
                  : null,
              backgroundColor: 'grey'
            }
            // ':focus': {
            //   color: 'black',
            //   backgroundColor: 'grey'
            // }
          }}
          {...props}
        >
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Status"
          value={'Failed'}
          onKeyPress={(e) => {
            e.preventDefault();
          }}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password' // disable autocomplete and autofill
          }}
          sx={{
            caretColor: 'white'
          }}
        />
      )}
    />
  );
}

export default function FilterDrawer({ isOpenFilterDrawer, handleCloseFilterDrawer, handleOpenFilterDrawer }) {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: '100%' }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <List key={0}>
        <ListItem key={1} disablePadding>
          <ListItemButton>
            <ComboBox></ComboBox>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        anchor={'right'}
        open={isOpenFilterDrawer}
        onClose={handleCloseFilterDrawer}
        sx={{
          '.MuiDrawer-paperAnchorRight': {
            width: matchDownMD ? '60% !important' : '15% !important',
            height: '100% !important'
          },

          '.MuiBackdrop-root': {
            backgroundColor: 'rgb(0 0 0 / 15%)'
          }
        }}
      >
        <Stack sx={{ pt: 2, pl: 2 }} justifyContent="space-between" alignItems="center" direction="row">
          <Typography variant="h6">Filter</Typography>

          <Box>
            <IconButton aria-label="close" onClick={handleCloseFilterDrawer} id="scrollBtnEl">
              <CloseIcon />
            </IconButton>
          </Box>
        </Stack>
        {list()}
      </Drawer>
    </>
  );
}
