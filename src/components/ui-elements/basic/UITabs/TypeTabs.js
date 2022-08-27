import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Link from 'Link';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Chip, Stack, Tab, Tabs, Typography, Button } from '@mui/material';

// assets
import CardProperty from 'components/ui-component/cards/CardProperty';
import BedroomParentTwoToneIcon from '@mui/icons-material/BedroomParentTwoTone';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import HotelTwoToneIcon from '@mui/icons-material/HotelTwoTone';
import { useRouter } from 'next/router';

// tab content customize

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}
function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box
          sx={{
            p: 1
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

const NavBarItem = {
  '/': 0,
  '#sales': 1,
  '#rent': 2
};
export default function TypeTabs({ username, agentData }) {
  const theme = useTheme();
  const router = useRouter();

  // const [value, setValue] = React.useState(0);
  const [value, setValue] = React.useState(location.hash !== '' ? NavBarItem[location.hash] : 0);

  const handleChange = (event, newValue) => {
    let decoded = decodeURIComponent(Object.keys(NavBarItem)[newValue]);
    router.push(`${agentData?.user_name}/${decoded}`, undefined, { shallow: true });

    setValue(newValue);
  };

  const filterByCategory = (param) => {
    return agentData?.inventories.filter((item) => {
      return item.category == param;
    });
  };
  return (
    <>
      <Tabs
        value={value}
        // variant="scrollable"
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        sx={{
          mb: 6,
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
        centered
      >
        <LinkTab
          component={Link}
          href={`/`}
          label={
            <>
              All{' '}
              <Chip
                label={agentData?.inventories.length}
                size="small"
                sx={{ color: theme.palette.secondary.main, background: theme.palette.secondary.light, ml: 1.3 }}
              />
            </>
          }
          icon={<BedroomParentTwoToneIcon sx={{ fontSize: '1.3rem' }} />}
          {...a11yProps(0)}
        />

        <LinkTab
          component={Link}
          href="#sales"
          icon={<HomeTwoToneIcon sx={{ fontSize: '1.3rem' }} />}
          label={
            <>
              Sales{' '}
              <Chip
                label={`${filterByCategory(2).length}`}
                size="small"
                sx={{ color: theme.palette.secondary.main, background: theme.palette.secondary.light, ml: 1.3 }}
              />
            </>
          }
          {...a11yProps(1)}
        />

        <LinkTab
          component={Link}
          href="#rent"
          icon={<HotelTwoToneIcon sx={{ fontSize: '1.3rem' }} />}
          label={
            <>
              Rent{' '}
              <Chip
                label={`${filterByCategory(1).length}`}
                size="small"
                sx={{ color: theme.palette.secondary.main, background: theme.palette.secondary.light, ml: 1.3 }}
              />
            </>
          }
          {...a11yProps(2)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        {agentData?.inventories?.map((element, index) => {
          return <CardProperty agentData={agentData} itemData={element} key={index} />;
        })}
      </TabPanel>

      <TabPanel value={value} index={1}>
        {filterByCategory(2).map((element, index) => {
          return <CardProperty agentData={agentData} itemData={element} key={index} />;
        })}
      </TabPanel>

      <TabPanel value={value} index={2}>
        {filterByCategory(1).map((element, index) => {
          return <CardProperty agentData={agentData} itemData={element} key={index} />;
        })}
      </TabPanel>

      {agentData?.inventories == 0 && (
        <Stack sx={{ p: 2, alignItems: 'center' }}>
          <Typography variant="h4" sx={{ pb: 2, textAlign: 'center' }}>
            No Item Found
          </Typography>
          <Button
            onClick={() => {
              router.push('/listing/create');
            }}
            variant="contained"
            color="secondary"
            sx={{ color: 'white' }}
            size="small"
            startIcon={<AddLocationAltOutlinedIcon sx={{ color: 'white' }} fontSize="small" />}
          >
            Create New List
          </Button>
        </Stack>
      )}
    </>
  );
}
