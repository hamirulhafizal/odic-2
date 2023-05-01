/* eslint-disable react-hooks/rules-of-hooks */
import PropTypes from 'prop-types';
import * as React from 'react';
import Link from 'Link';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  CardContent,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
  Tab,
  Tabs,
  Box,
  useMediaQuery,
  CircularProgress,
  Skeleton,
  ClickAwayListener,
  tooltipClasses,
  styled
} from '@mui/material';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';

// third-party
import { format } from 'date-fns';

// project imports
import MainCard from 'components/ui-component/cards/MainCard';
import Avatar from 'components/ui-component/extended/Avatar';
import Chip from 'components/ui-component/extended/Chip';
import { useDispatch, useSelector } from 'store';
import { getProducts, getSlotData, resetAllSlot } from 'store/slices/product';

// assets
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import useAuth from 'hooks/useAuth';

import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { deleteListingById, getListsbyQuery } from 'contexts/ApiListing';
import { dispatch } from '../../store/index';
import { openSnackbar } from 'store/slices/snackbar';
import { generateReferalLink, numberWithCommas } from 'utils/helper';

import BottomAppBar from 'components/board/BottomAppBar';

import AddIcon from '@mui/icons-material/Add';
const prodImage = '/assets/images/e-commerce';

import ListIcon from '@mui/icons-material/List';
import CardSlot from 'components/board/CardSlot';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import { getAllInvestment, getInvestments } from 'contexts/ApiInvestment';
import ScrollDialog from 'components/ui-elements/advance/UIDialog/ScrollDialog';
import SkeletonCard from 'components/board/SkeletonCard';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterDrawer from 'components/board/FilterDrawer';
import { getApiDirectSales, getApiEmpireSales, getApiPartners } from 'contexts/ApiBusinessCenter';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { LatestOrder } from 'components/widget/Data/LatestOrder';

const HtmlTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgba(97, 97, 97, 0.9)',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9'
  }
}));

// table sort
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

const getComparator = (order, orderBy) =>
  order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// table header options
const headCells = [
  {
    id: 'cover',
    numeric: false,
    label: 'Cover Photo',
    align: 'center'
  },
  {
    id: 'title',
    numeric: false,
    label: 'Title',
    align: 'center'
  },
  {
    id: 'price',
    numeric: true,
    label: 'Price',
    align: 'center'
  },
  {
    id: 'location',
    numeric: false,
    label: 'Location',
    align: 'center'
  },
  {
    id: 'propertyType',
    numeric: false,
    label: 'Property Type',
    align: 'center'
  },
  {
    id: 'bathrooms',
    numeric: true,
    label: 'Bathrooms',
    align: 'center'
  },

  {
    id: 'bedrooms',
    numeric: true,
    label: 'Bedrooms',
    align: 'center'
  },

  {
    id: 'status',
    numeric: true,
    label: 'Status',
    align: 'center'
  }
];

// ==============================|| TABLE HEADER TOOLBAR ||============================== //

const EnhancedTableToolbar = ({ numSelected }) => (
  <Toolbar
    sx={{
      p: 0,
      pl: 2,
      pr: 1,
      color: numSelected > 0 ? 'secondary.main' : 'inherit'
    }}
  >
    {numSelected > 0 ? (
      <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="h4" component="div">
        {numSelected} Selected
      </Typography>
    ) : (
      <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
        Nutrition
      </Typography>
    )}

    {numSelected > 0 && (
      <Tooltip title="Delete">
        <IconButton size="large">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    )}
  </Toolbar>
);

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

// ==============================|| TABLE HEADER ||============================== //

function EnhancedTableHead({ onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, theme, selected }) {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {/* <TableCell padding="checkbox" sx={{ pl: 3 }}>
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts'
            }}
          />
        </TableCell> */}
        {numSelected > 0 && (
          <TableCell padding="none" colSpan={7}>
            <EnhancedTableToolbar numSelected={selected.length} />
          </TableCell>
        )}
        {numSelected <= 0 &&
          headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.align}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Typography component="span" sx={{ display: 'none' }}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Typography>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        {numSelected <= 0 && (
          <TableCell sortDirection={false} align="center" sx={{ pr: 3 }}>
            <Typography variant="subtitle1" sx={{ color: theme.palette.mode === 'dark' ? theme.palette.grey[600] : 'grey.900' }}>
              Action
            </Typography>
          </TableCell>
        )}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  theme: PropTypes.object,
  selected: PropTypes.array,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

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

// ==============================|| PRODUCT LIST ||============================== //

const handleDelete = (index) => {
  deleteListingById(index).then((res) => {
    const deleteRow = document.getElementById(`row-${index}`);
    deleteRow?.remove();

    dispatch(
      openSnackbar({
        open: true,
        message: 'Your list has been successfully Deleted.',
        variant: 'alert',
        alert: {
          color: 'error'
        },
        close: false
      })
    );
  });
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
};

const businessCenter = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useAuth();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [paging, setPagging] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [search, setSearch] = React.useState('');
  const [rows, setRows] = React.useState([]);
  const [isFilter, setFilter] = React.useState([]);
  const [isModal, setOpenModal] = React.useState(false);
  const [isSlotId, setSlotId] = React.useState();

  const { slot } = useSelector((state) => state.product);

  const [categoryState, setCategory] = React.useState(0);
  const [locationState, setLocation] = React.useState(null);
  const [typeState, setType] = React.useState({ value: null, label: 'all' });
  const [titleState, setTitle] = React.useState(null);

  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [productEditId, setProductEditId] = React.useState(null);
  // open dialog to edit review
  const [open, setOpen] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [isMessage, setMessage] = React.useState(false);
  const [isInitial, setInitial] = React.useState(false);
  const [isOpenFilterDrawer, setOpenFilterDrawer] = React.useState(false);
  const listofPartner = localStorage.getItem('listofpartner');
  const [directSale, setDataDirectSale] = React.useState(null);
  const [empireSale, setDataEmpireSale] = React.useState(null);
  const [empireSize, setDataEmpireSize] = React.useState(null);
  const [directSize, setDataDirectSize] = React.useState(null);

  const [openBank, setOpenBank] = React.useState(false);

  const handleBankTooltipClose = () => {
    setOpenBank(false);
  };

  const handleBankTooltipOpen = (string) => {
    navigator.clipboard.writeText(`${string}`);
    setOpenBank(true);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDialog = (index) => {
    setProductEditId(index);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setProductEditId();
    setOpen(false);
    dispatch(getProducts(user?.user_name));
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const filterByCategory = (param) => {
    return rows
      ?.slice(0)
      .reverse()
      .filter((item) => {
        return item.category == param;
      });
  };

  const handleSearch = (event) => {
    const newString = event.target.value;
    setSearch(newString || '');

    if (newString) {
      const newRows = rows.filter((row) => {
        let matches = true;

        const properties = ['name', 'description', 'rating', 'salePrice', 'offerPrice', 'gender'];
        let containsQuery = false;

        properties?.forEach((property) => {
          if (row[property].toString().toLowerCase().includes(newString.toString().toLowerCase())) {
            containsQuery = true;
          }
        });

        if (!containsQuery) {
          matches = false;
        }
        return matches;
      });
      setRows(newRows);
    } else {
      getProducts();
    }
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelectedId = rows.map((n) => n.name);
      setSelected(newSelectedId);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    if (event.target.value) setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const propertyTypeData = (num) => {
    if (num == 5) return 'Apartment';
    if (num == 6) return 'Landed House';
    if (num == 7) return 'Private Room';
    if (num == 8) return 'Factory';
    if (num == 9) return 'Office';
    if (num == 10) return 'Hotel/Resort';
    if (num == 11) return 'ShopLot';
    if (num == 12) return 'Land';
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const handleClickOpenModal = (slotId) => {
    setOpenModal(true);
    setSlotId(slotId);
  };

  const handleClickCloseModal = () => {
    setOpenModal(false);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows?.length) : 0;

  const fetchAllInvestment = async (username) => {
    try {
      setLoading(true);
      await getAllInvestment(username).then((response) => {
        let results = response?.data;

        const statusFilter = slot[slot.length - 1];
        const dataFiltered = statusFilter && statusFilter !== 'All' ? results?.filter((item) => item?.status == statusFilter) : results;

        results.length == 0 ? setInitial(true) : setInitial(false);

        setRows(dataFiltered);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
      setMessage(true);
    }
  };

  const handleSwipe = () => {
    const btnAdd = document.getElementById('ButtonAddInvest');
    btnAdd.click();
  };

  const handleClear = () => {
    dispatch(resetAllSlot());
  };

  const handleOpenFilterDrawer = () => {
    setOpenFilterDrawer(!isOpenFilterDrawer);
  };

  const handleCloseFilterDrawer = () => {
    setOpenFilterDrawer(false);
  };

  React.useEffect(() => {
    // user?.username && fetchAllInvestment(user?.username);

    listofPartner == null && getApiPartners();
    directSale == null &&
      getApiDirectSales().then((res) => {
        const totalDirectSales = res?.data?.reduce((sum, item) => sum + item?.total_direct_sales, 0);
        setDataDirectSale(totalDirectSales);
        setDataDirectSize(res?.data);

        localStorage.setItem('OD Member', JSON.stringify(res?.data));
      });

    empireSale == null &&
      getApiEmpireSales().then((res) => {
        const totalEmpireSales = res?.data?.reduce((sum, item) => sum + item?.total_empire_sales, 0);
        setDataEmpireSale(totalEmpireSales);
        setDataEmpireSize(res?.data);
        localStorage.setItem('Empire', JSON.stringify(res?.data));
      });

    slot?.length > 100 && handleClear();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, slot]);

  return (
    <>
      <MainCard
        title={
          <>
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <BusinessCenterIcon sx={{ mr: 1 }} />
              <Typography variant="h4">BUSINESS CENTER</Typography>
            </Stack>
          </>
        }
        content={false}
        contentSX={{ p: 0 }}
        sx={{ textAlign: 'center', mb: matchDownSM ? '30%' : '5%' }}
      >
        <CardContent
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: '2em'
          }}
        >
          <Stack
            direction="column"
            sx={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography variant={matchDownSM ? 'h4' : 'h4'}>Welcome on board</Typography>
            <Typography variant={matchDownSM ? 'h4' : 'h3'}>
              <br /> Team : {user?.od_partner}
            </Typography>

            <Typography variant={matchDownSM ? 'h4' : 'h3'}>
              <br /> OD Member : {user?.od_member}
            </Typography>
          </Stack>

          <Stack
            direction={matchDownSM ? 'column' : 'row'}
            sx={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography variant="h4"> {`Referal link :  `}</Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Typography
                variant={matchDownSM ? 'h6' : 'h4'}
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  fontWeight: 'bold',
                  pl: 1,
                  '&:hover': {
                    backgroundColor: 'white'
                  }
                }}
              >
                {generateReferalLink(user?.username)}
              </Typography>

              <ClickAwayListener onClickAway={handleBankTooltipClose}>
                <AnimateButton>
                  <IconButton
                    size="small"
                    aria-label="delete"
                    variant="contained"
                    sx={{
                      backgroundColor: '#b5a837',
                      ml: 1,
                      boxShadow: '0px 3px 1px -2px rgb(0 0 0/20%) , 0px 2px 2px 0px rgb(0 0 0/14%) , 0px 1px 5px 0px rgb(0 0 0/12%)',
                      '&:hover': {
                        backgroundColor: 'green',
                        color: 'white !important'
                      }
                    }}
                    onClick={() => {
                      handleBankTooltipOpen(generateReferalLink(user?.username));
                    }}
                  >
                    <HtmlTooltip
                      arrow
                      placement="bottom-end"
                      disableFocusListener
                      disableHoverListener
                      disableTouchListener
                      onClose={handleBankTooltipClose}
                      open={openBank}
                      title={
                        <>
                          <Typography
                            variant="h5"
                            sx={{
                              color: 'white'
                            }}
                          >
                            Copied !
                          </Typography>
                        </>
                      }
                    >
                      <ContentCopyIcon
                        sx={{
                          color: 'white',
                          '&:hover': {
                            color: 'white !important'
                          }
                        }}
                        fontSize="small"
                      />
                    </HtmlTooltip>
                  </IconButton>
                </AnimateButton>
              </ClickAwayListener>
            </Box>
          </Stack>

          {/* <Stack
            direction="column"
            sx={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography variant="h4">Latest Total Commission for Direct Sales</Typography>
            <Typography variant="h6">2% from every slot</Typography>
            <Typography variant="h2">RM {directSale ? numberWithCommas(directSale) : 0}</Typography>
          </Stack> */}

          <Stack
            direction="column"
            sx={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <LatestOrder title="OD Member" data={directSize} handleClickOpenModal={handleClickOpenModal} />
          </Stack>

          {user?.role == 'Partner' && (
            <>
              <Stack
                direction="column"
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <LatestOrder title="Empire" data={empireSize} handleClickOpenModal={handleClickOpenModal} />
              </Stack>
            </>
          )}
        </CardContent>
      </MainCard>

      {/* <button
        id="openModel"
        onClick={() => {
          handleClickOpenModal('withdraw');
        }}
      >
        masuk
      </button> */}

      <ScrollDialog
        isModal={isModal}
        isSlotId={isSlotId}
        handleClickOpenModal={handleClickOpenModal}
        handleClickCloseModal={handleClickCloseModal}
      />

      {/* <FilterDrawer
        isOpenFilterDrawer={isOpenFilterDrawer}
        handleCloseFilterDrawer={handleCloseFilterDrawer}
        handleOpenFilterDrawer={handleOpenFilterDrawer}
      /> */}
    </>
  );
};
businessCenter.Layout = 'authGuard';
export default businessCenter;
