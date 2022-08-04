import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, CardMedia, Grid, useMediaQuery } from '@mui/material';

// project import
import MainCard from 'components/ui-component/cards/MainCard';
import Avatar from 'components/ui-component/extended/Avatar';
import { gridSpacing } from 'store/constant';

// third-party
import Slider from 'react-slick';
import Carousel, { Modal, ModalGateway } from 'react-images';
import useConfig from '../../../../hooks/useConfig';

// ==============================|| PRODUCT DETAILS - IMAGES ||============================== //

const ProductImages = ({ product }) => {
  const theme = useTheme();
  const { borderRadius } = useConfig();
  const products = [product?.photo_2, product?.photo_3, product?.photo_4, product?.photo_5, product?.photo_1];

  const matchDownLG = useMediaQuery(theme.breakpoints.up('lg'));
  const initialImage = product.image ? product?.photo_1 : product?.photo_1;

  const [selected, setSelected] = useState(initialImage);
  const [modal, setModal] = useState(false);

  const lgNo = matchDownLG ? 4 : 3;

  var resultObject = Object.values(products).filter((item) => item != null);

  const settings = {
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '0px',
    slidesToShow: resultObject?.length > 3 ? lgNo : resultObject?.length
  };

  return (
    <>
      <Grid container alignItems="center" justifyContent="center" spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard content={false} sx={{ m: '0 auto' }}>
            <CardMedia
              // onClick={() => setModal(!modal)}
              component="img"
              image={selected}
              sx={{
                borderRadius: `${borderRadius}px`,
                overflow: 'hidden',
                cursor: 'zoom-in',
                height: ' 434px',
                objectFit: 'contain',
                backgroundColor: 'black'
              }}
            />
          </MainCard>
        </Grid>
        <Grid item xs={11} sm={7} md={9} lg={10} xl={8}>
          <Slider {...settings}>
            {products
              .filter((item) => item != null)
              .map((item, index) => (
                <Box key={index} onClick={() => setSelected(item)} sx={{ p: 1 }}>
                  <Avatar
                    outline={selected === item}
                    size={matchDownLG ? 'lg' : 'md'}
                    color="primary"
                    src={item}
                    variant="rounded"
                    sx={{ m: '0 auto', cursor: 'pointer' }}
                  />
                </Box>
              ))}
          </Slider>
        </Grid>
      </Grid>
      {/* <ModalGateway>
        {modal ? (
          <Modal onClose={() => setModal(!modal)}>
            <Carousel views={images} />
          </Modal>
        ) : null}
      </ModalGateway> */}
    </>
  );
};

ProductImages.propTypes = {
  product: PropTypes.object
};

export default ProductImages;
