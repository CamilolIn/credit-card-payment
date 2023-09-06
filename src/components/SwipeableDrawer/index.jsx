
import { Box, IconButton } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const SwipeDrawer = ({ drawer, toggleDrawer }) => {

  const count = useSelector((state) => state.carProducts.products);

  return (
    <SwipeableDrawer
      anchor={'right'}
      open={drawer}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      <Box>
        <IconButton onClick={toggleDrawer}>
          <ShoppingCartIcon />
        </IconButton>
      </Box>
    </SwipeableDrawer>
  )
}

export default SwipeDrawer