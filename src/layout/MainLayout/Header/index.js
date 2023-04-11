// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Stack } from '@mui/material';

// project imports
import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
import MobileSection from './MobileSection';
import ProfileSection from './ProfileSection';
import LocalizationSection from './LocalizationSection';
import NotificationSection from './NotificationSection';
import { useDispatch, useSelector } from 'store';
import { openDrawer } from 'store/slices/menu';

// assets
import { IconMenu2 } from '@tabler/icons';
import useAuth from 'hooks/useAuth';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { useRouter } from 'next/router';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = () => {
  const theme = useTheme();
  const { logout } = useAuth();

  const { drawerOpen } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const router = useRouter();

  const [endTime, setEndTime] = useState(moment().add(20, 'minutes'));
  const [remainingTime, setRemainingTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = moment();
      const diff = moment.duration(endTime.diff(now));
      const remaining = moment.utc(diff.asMilliseconds()).format('mm:ss');
      setRemainingTime(remaining);
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  useEffect(() => {
    if (remainingTime === '00:00') {
      // call your function here
      logout();
      router.push('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingTime]);

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        <Box component="span" sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
          <LogoSection />
        </Box>

        <Avatar
          variant="rounded"
          sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.mediumAvatar,
            overflow: 'hidden',
            transition: 'all .2s ease-in-out',
            background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary.light,
            color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
            '&:hover': {
              background: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
              color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.light
            }
          }}
          onClick={() => dispatch(openDrawer(!drawerOpen))}
          color="inherit"
        >
          <IconMenu2 stroke={1.5} size="1.3rem" />
        </Avatar>
      </Box>

      <Box sx={{ pl: 2 }}>
        <Stack>
          <p>{remainingTime}</p>
        </Stack>
      </Box>

      {/* header search */}
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      {/* profile */}
      <ProfileSection />
    </>
  );
};

export default Header;
