'use strict';

import { forwardRef, useRef, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'store';

// material-ui
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Dialog,
  Grid,
  IconButton,
  Input,
  Slide,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';

// project imports
import MainCard from 'components/ui-component/cards/MainCard';
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// assets
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import CancelIcon from '@mui/icons-material/Cancel';
import ClearIcon from '@mui/icons-material/Clear';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import DownloadIcon from '@mui/icons-material/Download';
import SignatureCanvas from 'react-signature-canvas';

import { useReactToPrint } from 'react-to-print';
import { ComponentToPrint } from './ComponentToPrint';
import { getInvestDetailData, getSlotData } from 'store/slices/product';
import moment from 'moment';
import useAuth from 'hooks/useAuth';
import { createInvestment, savePdfInvestment } from 'contexts/ApiInvestment';
// ==============================|| FORM VALIDATION - LOGIN FORMIK  ||============================== //

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AggrementForms = ({ handleNext, handleBack, index }) => {
  const dispatch = useDispatch();
  const { slot, receipt } = useSelector((state) => state.product);
  const signRef = useRef(null);
  const mainCardRef = useRef(null);

  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const componentRef = useRef();

  const [open, setOpen] = useState(false);
  const [isSign, setSign] = useState({ trimmedDataURL: null });

  const onBeforeGetContentResolve = useRef(null);
  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [isSubmit, setSubmit] = useState(false);
  const [isSuccess, setSuccessMessage] = useState('');
  const [isError, setErrMessage] = useState('');

  const [text, setText] = useState('old boring text');
  const [isDoc, setDoc] = useState(false);
  const [isPreview, setPreview] = useState(true);

  const { user } = useAuth();

  const handleSubmitAggrement = async () => {
    const amount = localStorage.getItem('investVal');
    const investVal = localStorage.getItem('investVal');
    const resitUpload = localStorage.getItem('resitUpload');

    const formData = new FormData();

    setLoadingSubmit(true);
    setSubmit(true);

    formData.append('amount', amount);
    formData.append('username', user?.username);
    formData.append('receipt', receipt);
    // formData.append('agrementPdf', pdf);

    // const todayDate = moment().format('DD MMM YYYY h:mma');
    const todayDate = moment().format('DD MMM YYYY');
    const todayTime = moment().format('H');

    const dividenDate = moment(todayDate).add({ years: 1, months: 2 });

    const slot1 = {
      aggrement: true,
      investVal: investVal,
      resitUpload: resitUpload,
      created_date: todayDate,
      created_time: todayTime,
      dividenDate: dividenDate
    };

    dispatch(getInvestDetailData(slot1));

    await createInvestment(formData)
      .then((res) => {
        if (res?.status == 200) {
          localStorage.removeItem('investVal');
          localStorage.removeItem('resitUploadimg');
          localStorage.removeItem('resitUpload');
          const { Investment_id, Hash_id } = res?.data;

          localStorage.setItem('Hash_id', Hash_id);
          localStorage.setItem('Investment_id', Investment_id);
          handlePrint();
          setSubmit(false);
          setLoadingSubmit(false);
          setSuccessMessage('UPLOAD');
        } else {
          setLoadingSubmit(false);
          setErrMessage('ERROR');
          setSuccessMessage('');
        }
      })
      .catch((err) => {
        console.log('err--->', err);
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignClear = () => {
    signRef?.current.clear();
  };

  const handleSignSubmit = () => {
    setSign({
      trimmedDataURL: signRef.current.getTrimmedCanvas().toDataURL('image/png')
    });
    handleClose();
  };

  const handleSignRemove = () => {
    setSign({
      trimmedDataURL: null
    });
    setSubmit(false);
    setSuccessMessage();
  };

  const handleAfterPrint = useCallback(async () => {}, []);

  const handleBeforePrint = useCallback(() => {}, []);

  const handleOnBeforeGetContent = useCallback(() => {
    setLoading(true);
    setText('Loading new text...');
    setDoc(true);
    setPreview(false);

    return new Promise((resolve) => {
      onBeforeGetContentResolve.current = resolve;

      setTimeout(() => {
        setText('New, Updated Text!');
        resolve();
      }, 2000);
    });
  }, [setLoading, setText]);

  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [componentRef.current]);

  const generatePDF = async (dom) => {
    const options = {
      margin: 0,
      filename: 'ODIC.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      autoDownload: false
    };

    const clonedElement = dom.cloneNode(true);

    const pdfBlob = html2pdf() // move your config in the .set({...}) function below
      .from(clonedElement)
      .set({
        margin: 0,
        filename: 'ODIC.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      })
      .output('blob')
      .then(async (pdfBlob) => {
        var formData = new FormData();

        // Create a File from the Blob
        const pdfFile = new File([pdfBlob], 'ODIC.pdf', { type: 'application/pdf' });

        // Create FormData to append the PDF File
        const Hash_id = localStorage.getItem('Hash_id');

        formData.append('agreement', pdfFile);
        formData.append('hash_id', Hash_id);

        await savePdfInvestment(formData).then((response) => {
          if (response.status == 200) {
            setLoading(false);
            setPreview(true);
          } else {
            // alert('Something when wrong, Please Try Again !');
            setLoading(false);
            setPreview(true);
            setSuccessMessage('ERROR');
          }
        });
      });

    // const pdfBlob1 = await html2pdf(clonedElement, options).save();
  };

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: '',
    onBeforeGetContent: handleOnBeforeGetContent,
    onBeforePrint: handleBeforePrint,
    onAfterPrint: handleAfterPrint,
    removeAfterPrint: true,
    print: async (printIframe) => {
      const content = printIframe.contentWindow.document.body;
      const testDom = document.querySelector('#parentPage');

      await generatePDF(testDom);
    }
  });

  const DownloadAgain = async () => {
    const testDom = document.querySelector('#parentPage');

    const options = {
      margin: 0,
      filename: 'ODIC.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    await html2pdf(testDom, options);
  };

  useEffect(() => {
    if (text === 'New, Updated Text!' && typeof onBeforeGetContentResolve.current === 'function') {
      onBeforeGetContentResolve.current();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onBeforeGetContentResolve.current, text, isSubmit]);

  return (
    <>
      <Stack direction={'column'}>
        <Box
          sx={{
            pt: 3,
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <MainCard
            ref={mainCardRef}
            sx={{
              boxShadow: '1px -1px 5px -1px rgb(0 0 0/64%) !important',
              borderColor: 'transparent',
              width: matchDownSM ? '100%' : '550px',
              height:
                matchDownSM && isSign?.trimmedDataURL && isSuccess !== 'UPLOAD' ? '100vh' : `${isSign?.trimmedDataURL ? '40vh' : '25vh'}`,
              overflowY: 'scroll',
              maxWidth: '100%',
              borderBottomLeftRadius: '0px',
              borderBottomRightRadius: '0px',
              position: 'relative',
              top: '-1px'
            }}
          >
            {isSign?.trimmedDataURL !== null ? (
              <>
                <Stack
                  sx={{
                    width: '100%',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <ComponentToPrint ref={componentRef} isPreview={isPreview}>
                    {isSuccess != 'UPLOAD' ? (
                      <Box
                        sx={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'end',
                          flexDirection: 'column',
                          alignItems: 'center',
                          position: 'relative',
                          top: '-11%',
                          left: '20px'
                        }}
                      >
                        <Box
                          sx={{
                            width: matchDownSM ? '80px' : '70%',
                            display: 'flex',
                            justifyContent: 'end',
                            position: 'relative',
                            top: '12px',
                            left: '10px',
                            zIndex: 1
                          }}
                        >
                          <IconButton
                            color="secondary"
                            variant="contained"
                            size="large"
                            aria-label="delete"
                            onClick={handleSignRemove}
                            sx={{ p: 0, backgroundColor: 'white' }}
                          >
                            <CancelIcon
                              sx={{
                                backgroundColor: 'white',
                                borderRadius: '50%',
                                color: 'red'
                              }}
                            />
                          </IconButton>
                        </Box>

                        <Avatar
                          sx={{
                            width: matchDownSM ? '80px' : '77%',
                            height: 'auto',
                            backgroundColor: 'white',
                            padding: '12px',
                            borderBottomLeftRadius: '5px',
                            borderBottomRightRadius: '5px',
                            borderRadius: '5px',
                            border: '1px solid black',
                            '& .MuiAvatar-img': {
                              scale: '2',
                              padding: '5%'
                            }
                          }}
                          alt="signature"
                          src={isSign?.trimmedDataURL}
                        />
                      </Box>
                    ) : (
                      <Avatar
                        sx={{
                          width: matchDownSM ? '150px' : '77%',
                          height: 'auto',
                          backgroundColor: 'white',
                          padding: '12px',
                          '& .MuiAvatar-img': {
                            scale: '2',
                            borderRadius: 0,
                            position: 'relative',
                            left: '5%'
                          }
                        }}
                        alt="signature"
                        src={isSign?.trimmedDataURL}
                      />
                    )}
                  </ComponentToPrint>
                </Stack>
              </>
            ) : (
              <>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Avatar
                    sx={{
                      width: matchDownSM ? '77%' : '77%',
                      height: 'auto',
                      backgroundColor: 'white',
                      borderRadius: '1px',

                      '.MuiAvatar-img': {
                        border: ' 1px solid black',
                        borderRadius: '5px',
                        scale: 1
                      }
                    }}
                    alt="signature"
                    src={'assets/images/sign/prepdf2.png'}
                  />
                </Box>
              </>
            )}
          </MainCard>
        </Box>

        <Stack
          direction="row"
          sx={{
            gap: 2,
            mb: 2,
            position: 'relative',
            top: '-1px',
            justifyContent: 'space-between',
            justifyContent: 'space-around',
            py: '5%',
            boxShadow: '1px 2px 5px -1px rgb(0 0 0 /64%)',
            borderBottomLeftRadius: '5px',
            borderBottomRightRadius: '5px',
            px: 2
          }}
        >
          {isSign?.trimmedDataURL !== null ? (
            <>
              {isSuccess == 'UPLOAD' ? (
                <>
                  <AnimateButton>
                    <Button
                      variant="contained"
                      component="label"
                      type="submit"
                      size="small"
                      endIcon={
                        loading ? (
                          <CircularProgress sx={{ color: 'white', position: 'relative', left: '10%' }} size={20} />
                        ) : (
                          <DownloadIcon />
                        )
                      }
                      onClick={() => {
                        !loading ? handlePrint() : DownloadAgain();
                      }}
                    >
                      {loading ? 'LOADING...' : 'DOWNLOAD'}
                    </Button>
                  </AnimateButton>
                  <AnimateButton>
                    <Button
                      endIcon={<CheckCircleOutlineIcon />}
                      sx={{
                        '&.Mui-disabled': {
                          color: 'white',
                          backgroundColor: 'green',
                          opacity: 0.5
                        }
                      }}
                      variant="contained"
                      size="small"
                      disabled
                    >
                      {isSuccess}
                    </Button>
                  </AnimateButton>
                </>
              ) : (
                <>
                  {/* <Stack direction="row">
                    <Typography variant="caption" sx={{ pb: 2 }}>
                      *Check your signature at the bottom document by scrolling down
                    </Typography>
                    <Avatar
                      sx={{
                        borderRadius: '0px',
                        backgroundColor: 'white',
                        scale: '0.7'
                      }}
                      src="/assets/images/icons/scroll.png"
                    />
                  </Stack> */}

                  <AnimateButton>
                    <Button
                      variant="contained"
                      component="label"
                      type="submit"
                      size="small"
                      endIcon={loadingSubmit ? <CircularProgress size={15} sx={{ color: 'white' }} /> : <SendOutlinedIcon />}
                      onClick={() => {
                        handleSubmitAggrement();
                      }}
                    >
                      {loadingSubmit ? 'LOADING...' : 'SUBMIT'}
                    </Button>
                  </AnimateButton>
                </>
              )}

              {/* {isError} */}
            </>
          ) : (
            <>
              <AnimateButton>
                <Button variant="contained" component="label" type="submit" endIcon={<HistoryEduIcon />} onClick={handleClickOpen}>
                  SIGNATURE
                </Button>
              </AnimateButton>
            </>
          )}
        </Stack>

        <Grid container spacing={gridSpacing}>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <AnimateButton>
              <Button disabled={!isSuccess ? false : true} startIcon={<ArrowBackIcon />} variant="contained" onClick={handleBack}>
                BACK
              </Button>
            </AnimateButton>
            <AnimateButton>
              <Button
                disabled={isSuccess ? false : true}
                endIcon={<ArrowForwardIcon />}
                variant="contained"
                type="submit"
                onClick={handleNext}
              >
                NEXT
              </Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </Stack>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          '.MuiDialog-paper': {
            backgroundColor: 'black',
            width: '100vw',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center'
          }
        }}
      >
        <IconButton
          color="secondary"
          sx={{ position: 'relative' }}
          variant="contained"
          size="large"
          aria-label="delete"
          onClick={handleClose}
        >
          <CancelIcon
            sx={{
              backgroundColor: 'white',
              borderRadius: '50%',
              color: 'black'
            }}
          />
        </IconButton>
        <Box>
          <Stack
            sx={{
              flexDirection: 'row',
              alignItems: 'end',
              justifyContent: matchDownSM ? 'end' : 'end',
              gap: '1%',
              pb: 3
            }}
          >
            <AnimateButton>
              <Button
                color="secondary"
                variant="contained"
                component="label"
                type="submit"
                endIcon={<ClearIcon />}
                onClick={handleSignClear}
              >
                CLEAR
              </Button>
            </AnimateButton>
            <AnimateButton>
              <Button
                color="secondary"
                variant="contained"
                component="label"
                type="submit"
                endIcon={<SendOutlinedIcon />}
                onClick={handleSignSubmit}
              >
                SUBMIT
              </Button>
            </AnimateButton>
          </Stack>

          <SignatureCanvas ref={signRef} penColor="black" canvasProps={{ className: 'sigCanvas' }} backgroundColor="white" />
        </Box>
      </Dialog>
    </>
  );
};

export default AggrementForms;
