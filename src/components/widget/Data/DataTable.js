import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Chip from 'components/ui-component/extended/Chip';
import { Stack } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const rows = [
  // { id: 1, username: 'odic000002', roi: 'RM310', status: 'Progress' },
  { id: 2, username: 'odic000002', roi: 'RM300', status: 'Withdraw' },
  { id: 3, username: 'odic000002', roi: 'RM300', status: 'Progress' },
  { id: 4, username: 'odic000001', roi: 'RM300', status: 'Progress' },
  { id: 5, username: 'odic000002', roi: 'RM300', status: 'Progress' },
  { id: 6, username: 'odic000002', roi: 'RM300', status: 'Progress' },
  { id: 7, username: 'odic000002', roi: 'RM300', status: 'Progress' },
  { id: 8, username: 'odic00002', roi: 'RM300', status: 'Floating' },
  { id: 9, username: 'odic000102', roi: 'RM300', status: 'Fail' }
  // { id: 10, username: 'odic000002', roi: 'RM300', status: 'Pending' }
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function DataTable() {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [value, setValue] = React.useState(0);

  const handleSelectionChange = (newSelection) => {
    setSelectedRows(newSelection);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isRowSelected = (params) => selectedRows.indexOf(params.id) !== -1;

  const columns = [
    { field: 'id', headerName: 'Slot ID', width: 100 },
    { field: 'username', headerName: 'ODIC', width: 100 },
    { field: 'roi', headerName: '2%', width: 100 },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
      renderCell: (params) => (
        <Chip
          chipcolor={
            params.value == 'Completed'
              ? 'completed'
              : params.value == 'Progress'
              ? 'secondary'
              : params.value == 'Floating'
              ? 'floating'
              : params.value == 'Fail'
              ? 'error'
              : params.value == 'Withdraw'
              ? 'success'
              : params.value == 'Pending'
              ? 'pending'
              : 'warning'
            // warning, success, orange, error,secondary
          }
          label={params.value}
          size="small"
        />
      )
    }
  ];

  const row = JSON.parse(localStorage.getItem('OD Member'));
  const row1 = JSON.parse(localStorage.getItem('Empire'));

  console.log('row', row);
  console.log('row1', row1);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="OD Member" {...a11yProps(0)} />
            <Tab label="Empire" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <DataGrid
            rows={row}
            columns={columns}
            onSelectionModelChange={handleSelectionChange}
            selectionModel={selectedRows}
            // checkboxSelection
            // disableRowCount
            // pagination={false}
            // pageSize={5}
            // rowsPerPageOptions={[5]}
          />
          {/* <Stack
        sx={{
          display: 'flex',
          justifyContent: 'end'
        }}
      >
        <Button
          onClick={() => {
            handleClickOpenModal('withdraw');
          }}
          sx={{
            mb: 2,
            background: 'green',
            width: '30%'
          }}
          variant="contained"
          disabled={selectedRows.length == 0 ? true : false}
        >
          {`Withdraw  💲`}
        </Button>
      </Stack> */}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DataGrid
            rows={row1}
            columns={columns}
            // pagination={false}
            // pageSize={5}
            // rowsPerPageOptions={[5]}
            onSelectionModelChange={handleSelectionChange}
            selectionModel={selectedRows}
            // checkboxSelection
            // disableRowCount
          />
        </TabPanel>
      </Box>
    </div>
  );
}
