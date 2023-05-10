// material-ui
import {
  Button,
  CardActions,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';

// project imports
import Chip from 'components/ui-component/extended/Chip';
import { gridSpacing } from 'store/constant';

// assets
import MainCard from 'components/ui-component/cards/MainCard';
import { numberWithCommas } from 'utils/helper';

// =========================|| LATEST ORDER CARD ||========================= //

const LatestOrder = ({ title, data, handleClickOpenModal }) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <MainCard title={title} content={false}>
          <TableContainer
            sx={{
              maxHeight: '40vh'
            }}
          >
            <Table stickyHeader sx={{ minWidth: 350 }} aria-label="simple table">
              {data?.length != 0 && (
                <TableHead>
                  <TableRow>
                    <TableCell align="center">USERNAME</TableCell>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center">SLOT</TableCell>
                    <TableCell align="center">AMOUNT</TableCell>
                    <TableCell align="center">ROI</TableCell>
                    <TableCell align="center">ROI AMOUNT</TableCell>
                    <TableCell align="center">DIVIDEN DATE</TableCell>
                    <TableCell align="center">STATUS</TableCell>
                    <TableCell align="left">COMMISION {title == 'OD Member' ? '2%' : '1%'} </TableCell>
                  </TableRow>
                </TableHead>
              )}

              <TableBody>
                {data !== null &&
                  data?.map((row, index) => (
                    <>
                      <TableRow hover key={index}>
                        <TableCell align="center">{row.username}</TableCell>
                        <TableCell align="center">{row.id}</TableCell>
                        <TableCell align="center">{row.slot}</TableCell>
                        <TableCell align="center">RM {row.amount ? numberWithCommas(row.amount) : 0}</TableCell>
                        <TableCell align="center">{row.roi} %</TableCell>
                        <TableCell align="center">RM {row.roi_amount ? numberWithCommas(row.roi_amount) : 0}</TableCell>
                        <TableCell align="center">{row.dividen_date}</TableCell>
                        <TableCell align="center">
                          <Chip
                            chipcolor={
                              row.status == 'Completed'
                                ? 'completed'
                                : row.status == 'Progress'
                                ? 'secondary'
                                : row.status == 'Floating'
                                ? 'floating'
                                : row.status == 'Fail'
                                ? 'error'
                                : row.status == 'Withdraw'
                                ? 'success'
                                : row.status == 'Pending'
                                ? 'pending'
                                : 'warning'
                              // warning, success, orange, error,secondary
                            }
                            label={row.status}
                            size="small"
                          />
                        </TableCell>
                        <TableCell align="left">
                          {title == 'OD Member' && row?.total_direct_sales && `RM ${numberWithCommas(row?.total_direct_sales)}`}
                          {title == 'Empire' && row?.total_empire_sales && `RM ${numberWithCommas(row?.total_empire_sales)}`}
                        </TableCell>
                      </TableRow>{' '}
                    </>
                  ))}

                {data != null && data.length != 0 && (
                  <TableRow sx={{ position: 'sticky', bottom: 0, backgroundColor: '#f3f3f3', color: '#00a139' }}>
                    <TableCell align="center" colSpan={matchDownSM ? 6 : 7}></TableCell>
                    <TableCell align={matchDownSM ? 'left' : 'center'} colSpan={matchDownSM ? 3 : 0}>
                      <b>TOTAL VALID INVESTMENT</b> <br /> <Typography variant="caption">*Status Progress</Typography>
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        backgroundColor: '#9fffb2',
                        color: '#00a139'
                      }}
                    >
                      <Stack
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        {title == 'OD Member' &&
                          data &&
                          `RM ${numberWithCommas(
                            data?.filter((item) => item.status === 'Progress')?.reduce((sum, item) => sum + item?.total_direct_sales, 0)
                          )}`}

                        {title == 'Empire' &&
                          data &&
                          `RM ${numberWithCommas(
                            data?.filter((item) => item.status === 'Progress')?.reduce((sum, item) => sum + item?.total_empire_sales, 0)
                          )}`}

                        {/* <Button
                  onClick={() => {
                    handleClickOpenModal('withdraw');
                  }}

                  sx={{
                    ml: 2,
                    background: 'green'
                  }}
                  variant="contained"
                >
                  {`Withdraw  💲`}
                </Button> */}
                      </Stack>
                    </TableCell>
                  </TableRow>
                )}

                {data?.length == 0 && (
                  <>
                    <TableRow hover key={0}>
                      <TableCell align={matchDownSM ? 'left' : 'center'}>No Data</TableCell>
                    </TableRow>
                  </>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button variant="text" size="small">
              View all Orders
            </Button>
          </CardActions> */}
        </MainCard>
      </Grid>
    </Grid>
  );
};

export { LatestOrder };
