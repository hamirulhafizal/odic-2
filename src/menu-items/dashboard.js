// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconListCheck, IconList, IconBriefcase } from '@tabler/icons';

// constant
const icons = {
  IconDashboard,
  IconDeviceAnalytics,
  IconList,
  IconListCheck,
  IconBriefcase
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: <FormattedMessage id="Menu" />,
  type: 'group',
  children: [
    {
      id: 'board',
      title: <FormattedMessage id="Board" />,
      type: 'item',
      url: '/board/',
      icon: icons.IconList,
      breadcrumbs: false
    }
  ]
};

const dashboard1 = {
  id: 'dashboard',
  title: <FormattedMessage id="Menu" />,
  type: 'group',
  children: [
    {
      id: 'board',
      title: <FormattedMessage id="Board" />,
      type: 'item',
      url: '/board/',
      icon: icons.IconList,
      breadcrumbs: false
    },
    {
      id: 'businessCenter',
      title: <FormattedMessage id="businessCenter" />,
      type: 'item',
      url: '/business-center/',
      icon: icons.IconBriefcase,
      breadcrumbs: false
    }
  ]
};

export { dashboard, dashboard1 };
