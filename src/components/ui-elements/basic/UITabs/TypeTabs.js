import PropTypes from 'prop-types';
import React from 'react';
import Link from 'Link';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Chip, Tab, Tabs, Typography } from '@mui/material';

// assets
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import PanoramaTwoToneIcon from '@mui/icons-material/PanoramaTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import RecentActorsTwoToneIcon from '@mui/icons-material/RecentActorsTwoTone';
import CardProperty from 'components/ui-component/cards/CardProperty';
import BedroomParentTwoToneIcon from '@mui/icons-material/BedroomParentTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import HotelTwoToneIcon from '@mui/icons-material/HotelTwoTone';

// tab content customize
function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box
          sx={{
            p: 1,
           
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

// ================================|| UI TABS - COLOR ||================================ //

export default function TypeTabs() {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        variant="scrollable"
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        sx={{
          mb: 5,
          '& a': {
            minHeight: 'auto',
            minWidth: 10,
            py: 1.5,
            px: 1,
            mr: 2.2,
            color: theme.palette.grey[600],
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          },
          '& a.Mui-selected': {
            color: theme.palette.primary.secondary
          },
          '& a > svg': {
            mb: '0px !important',
            mr: 1.1
          }
        }}
      >
        <Tab component={Link} href="#" icon={<BedroomParentTwoToneIcon sx={{ fontSize: '1.3rem' }} />} label="Rent" {...a11yProps(0)} />
        <Tab component={Link} href="#" icon={<HomeTwoToneIcon sx={{ fontSize: '1.3rem' }} />} label="Buy" {...a11yProps(1)} />
        <Tab
          component={Link}
          href="#"
          icon={<HotelTwoToneIcon sx={{ fontSize: '1.3rem' }} />}
          label={
            <>
              Short stay{' '}
              <Chip
                label="10"
                size="small"
                sx={{ color: theme.palette.secondary.main, background: theme.palette.secondary.light, ml: 1.3 }}
              />
            </>
          }
          {...a11yProps(2)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <CardProperty />
        <CardProperty />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CardProperty />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CardProperty />
      </TabPanel>
    </>
  );
}
