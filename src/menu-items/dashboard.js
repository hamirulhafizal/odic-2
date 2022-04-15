// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, TablerIcon } from '@tabler/icons';

// constant
const icons = {
  IconDashboard,
  IconDeviceAnalytics
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
      id: 'default',
      title: <FormattedMessage id="Lisiting" />,
      type: 'item',
      url: '/listing/create',
      icon: icons.TablerIcon,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
