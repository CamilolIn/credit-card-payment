
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../store/carSlice';
import { colorsTheme } from '../../theme';
import { useTheme } from '@emotion/react';
import { Box, Button, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ClearIcon from '@mui/icons-material/Clear';

const SwipeDrawer = ({ drawer, toggleDrawer }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const theme = useTheme();
  const colors = colorsTheme(theme.palette.mode);
  const cartProducts = useSelector((state) => state.carProducts.products);
  const dispatch = useDispatch()
  const onHandleRemoveItem = (id) => {
    dispatch(deleteProduct(id))
  }

  useEffect(() => {
    if (cartProducts.length > 0) {
      cartProducts.map((product) => {
        let newTotalPrice = totalPrice + product.productValue;
        setTotalPrice(newTotalPrice);
      })
    }
  }, [cartProducts])

  const listShoppingCart = () => (
    <Box>
      <List>
        {cartProducts.map((product, index) => (
          <>
            <ListItem key={product.id} >
              <img
                src={product.urlImg}
                loading="lazy"
                width={50}
                height={50}
                style={{
                  objectFit: 'fill'
                }}
              />
              <ListItemButton>
                <Box>
                  <ListItemText primary={product.name} />
                  <ListItemText primary={`$ ${product.productValue}`} />
                </Box>
              </ListItemButton>
              <IconButton onClick={() => onHandleRemoveItem(product.id)}>
                <ClearIcon />
              </IconButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor={'right'}
      open={drawer}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <IconButton onClick={toggleDrawer}>
            <ShoppingCartIcon />
          </IconButton>
          <Typography>{`${cartProducts.length} Items`}</Typography>
        </Box>
        <IconButton onClick={toggleDrawer}>
          <ClearIcon />
        </IconButton>
      </Box>
      <Divider />
      {cartProducts.length === 0 ?
        "Esta vacio"
        : listShoppingCart()}
      <Box marginTop="auto" alignSelf="center" marginBottom={3}>
        <Button
          sx={{
            backgroundColor: colors.blueOk[500]
          }}
          variant="contained"
        >{`Pay with credit card ($${totalPrice})`}</Button>
      </Box>
    </SwipeableDrawer>
  )
}

export default SwipeDrawer