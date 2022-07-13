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
  useMediaQuery
} from '@mui/material';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';

// third-party
import { format } from 'date-fns';

// project imports
import MainCard from 'components/ui-component/cards/MainCard';
import Avatar from 'components/ui-component/extended/Avatar';
import Chip from 'components/ui-component/extended/Chip';
import { useDispatch, useSelector } from 'store';
import { getProducts } from 'store/slices/product';

// assets
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import useAuth from 'hooks/useAuth';
import ReviewEdit from 'components/application/customer/ProductReview/ReviewEdit';
import ListingUpdate from './ListingUpdate';

import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

const prodImage = '/assets/images/e-commerce';

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
    id: 'Img ',
    numeric: false,
    label: 'Image Cover',
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
        <TableCell padding="checkbox" sx={{ pl: 3 }}>
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts'
            }}
          />
        </TableCell>
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

// ==============================|| PRODUCT LIST ||============================== //

const Listing = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const router = useRouter();

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [paging, setPagging] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [search, setSearch] = React.useState('');
  const [rows, setRows] = React.useState([]);
  const { products } = useSelector((state) => state.product);

  const { user } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [productEditId, setProductEditId] = React.useState(null);

  // open dialog to edit review
  const [open, setOpen] = React.useState(false);

  const handleDialog = (index) => {
    setProductEditId(index);
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setProductEditId();
    setOpen(false);
  };

  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    setRows(products.inventories);
  }, [products]);

  React.useEffect(() => {
    dispatch(getProducts(user?.user_name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paging]);

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
    if (num == 1) return 'Apartment';
    if (num == 2) return 'Landed House';
    if (num == 3) return 'Private Room';
    if (num == 4) return 'Factory';
    if (num == 5) return 'Office';
    if (num == 6) return 'Hotel/Resort';
    if (num == 7) return 'ShopLot';
    if (num == 8) return 'Land';
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows?.length) : 0;

  return (
    <>
      <MainCard title="Product List" content={false} contentSX={{ p: 0 }}>
        <CardContent>
          <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
            <Grid item xs={12} sm={6}>
              {/* <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                )
              }}
              placeholder="Search Product"
              value={search}
              size="small"
            /> */}
            </Grid>
            {products?.inventories?.length != 0 && (
              <Grid item xs={12} sm={6} sx={{ textAlign: `${matchDownSM ? 'start' : 'right'}` }}>
                {/* product add & dialog */}
                <Tooltip title="Add Product">
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
                </Tooltip>
              </Grid>
            )}
          </Grid>
        </CardContent>

        {products?.inventories?.length == 0 ? (
          <>
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
          </>
        ) : (
          <>
            <TableContainer>
              <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows?.length}
                  theme={theme}
                  selected={selected}
                />
                <TableBody>
                  {rows?.map((row, index) => {
                    if (typeof row === 'number') return null;
                    const isItemSelected = isSelected(index);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow hover role="checkbox" aria-checked={isItemSelected} tabIndex={-1} key={index} selected={isItemSelected}>
                        <TableCell padding="checkbox" sx={{ pl: 3 }} onClick={(event) => handleClick(event, row.name)}>
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId
                            }}
                          />
                        </TableCell>
                        <TableCell align="center" component="th" id={labelId} scope="row" sx={{ cursor: 'pointer' }}>
                          <Avatar
                            component={Link}
                            href={`/listing/${row?.id}`}
                            src={row?.photo_1 && `${row?.photo_1}`}
                            size="md"
                            variant="rounded"
                          />
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row" sx={{ cursor: 'pointer' }}>
                          <Typography
                            component={Link}
                            href={`/listing/${row?.id}`}
                            variant="subtitle1"
                            sx={{
                              color: theme.palette.mode === 'dark' ? theme.palette.grey[600] : 'grey.900',
                              textDecoration: 'none'
                            }}
                          >
                            {row?.title}
                          </Typography>
                        </TableCell>
                        {/* <TableCell>{format(new Date(row.created), 'E, MMM d yyyy')}</TableCell> */}
                        <TableCell align="center">RM {row?.price}</TableCell>
                        <TableCell align="center">{row?.location}</TableCell>

                        <TableCell align="center">{propertyTypeData(row?.propertyType)}</TableCell>
                        <TableCell align="center">{row?.bathrooms}</TableCell>
                        <TableCell align="center">{row?.bedrooms}</TableCell>

                        <TableCell align="center">
                          <Chip
                            size="small"
                            label={row?.status ? 'Active' : 'Active'}
                            chipcolor={row?.status ? 'success' : 'success'}
                            sx={{ borderRadius: '4px', textTransform: 'capitalize' }}
                          />
                        </TableCell>
                        <TableCell align="center" sx={{ pr: 3 }}>
                          <IconButton color="primary" size="large">
                            <VisibilityTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                          </IconButton>
                          <IconButton
                            color="secondary"
                            onClick={() => {
                              handleDialog(row?.id);
                            }}
                            size="large"
                          >
                            <EditTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}

                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: 53 * emptyRows
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}

                  {/* {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                if (typeof row === 'number') return null;
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow hover role="checkbox" aria-checked={isItemSelected} tabIndex={-1} key={index} selected={isItemSelected}>
                    <TableCell padding="checkbox" sx={{ pl: 3 }} onClick={(event) => handleClick(event, row.name)}>
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId
                        }}
                      />
                    </TableCell>
                    <TableCell
                      align="center"
                      component="th"
                      id={labelId}
                      scope="row"
                      onClick={(event) => handleClick(event, row.name)}
                      sx={{ cursor: 'pointer' }}
                    >
                      <Avatar src={row.image && `${prodImage}/${row.image}`} size="md" variant="rounded" />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" sx={{ cursor: 'pointer' }}>
                      <Typography
                        component={Link}
                        href={`/app/e-commerce/product-details/${row.id}`}
                        variant="subtitle1"
                        sx={{
                          color: theme.palette.mode === 'dark' ? theme.palette.grey[600] : 'grey.900',
                          textDecoration: 'none'
                        }}
                      >
                        {row.name}
                      </Typography>
                    </TableCell>
                    <TableCell>{format(new Date(row.created), 'E, MMM d yyyy')}</TableCell>
                    <TableCell align="right">${row.offerPrice}</TableCell>
                    <TableCell align="right">${row.salePrice}</TableCell>
                    <TableCell align="center">
                      <Chip
                        size="small"
                        label={row.isStock ? 'In Stock' : 'Out of Stock'}
                        chipcolor={row.isStock ? 'success' : 'error'}
                        sx={{ borderRadius: '4px', textTransform: 'capitalize' }}
                      />
                    </TableCell>
                    <TableCell align="center" sx={{ pr: 3 }}>
                      <IconButton onClick={handleMenuClick} size="large">
                        <MoreHorizOutlinedIcon
                          fontSize="small"
                          aria-controls="menu-popular-card-1"
                          aria-haspopup="true"
                          sx={{ color: 'grey.500' }}
                        />
                      </IconButton>
                      <Menu
                        id="menu-popular-card-1"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        variant="selectedMenu"
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right'
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right'
                        }}
                        sx={{
                          '& .MuiMenu-paper': {
                            boxShadow: theme.customShadows.z1
                          }
                        }}
                      >
                        <MenuItem onClick={handleClose}> Edit</MenuItem>
                        <MenuItem onClick={handleClose}> Delete</MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                );
              })}

            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53 * emptyRows
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )} */}
                </TableBody>
              </Table>
            </TableContainer>

            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        )}
      </MainCard>

      <ListingUpdate open={open} productId={productEditId} handleCloseDialog={handleCloseDialog} />
    </>
  );
};
Listing.Layout = 'authGuard';
export default Listing;
