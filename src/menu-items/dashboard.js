// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconListCheck } from '@tabler/icons';

// constant
const icons = {
  IconDashboard,
  IconDeviceAnalytics,
  IconListCheck
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: <FormattedMessage id="dashboard" />,
  type: 'group',
  children: [
    {
      id: 'default',
      title: <FormattedMessage id="default" />,
      type: 'item',
      url: '/dashboard/',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'listing',
      title: <FormattedMessage id="listing" />,
      type: 'item',
      url: '/listing/',
      icon: icons.IconListCheck,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
