import PropTypes from 'prop-types';
// @mui
import { Grid, Typography, Box } from '@mui/material';
import { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import CustomizedDialogs from 'src/components/modal/CustomModal';
// eslint-disable-next-line import/no-unresolved
import ProfileGenaric from 'src/components/ProfileGenaric/ProfileGenaric';
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default function ProductList({ products, ...other }) {
  const [open, setOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState();
  const handleOpen = (product) => {
    console.log('click---------');
    setItemSelected(product);
    setOpen(true);
  };
  return (
    <>
      <Grid container spacing={3} {...other}>
        {products.map((product) => (
          <Grid key={product._id} item xs={12} sm={6} md={3}>
            <ShopProductCard product={product} onClick={() => handleOpen(product)} />
          </Grid>
        ))}
      </Grid>
      <Box width="200%">
        <CustomizedDialogs open={open} setOpen={setOpen}>
          <ProfileGenaric item={itemSelected} />
        </CustomizedDialogs>
      </Box>
    </>
  );
}
