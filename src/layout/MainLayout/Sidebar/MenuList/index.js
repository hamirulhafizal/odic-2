import { memo } from 'react';

// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = ({ user }) => {
  let a;

  const checkRole = (user) => {
    if (user?.role == 'Normal') {
      return (a = menuItem?.item);
    }

    if (user?.role == 'Partner') {
      return (a = menuItem?.items);
    }

    if (user?.role == 'Member') {
      return (a = menuItem?.items);
    }
  };

  checkRole(user);

  const navItems = a?.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};

export default memo(MenuList);
