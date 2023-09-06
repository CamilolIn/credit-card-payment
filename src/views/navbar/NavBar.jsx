import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { IconButton, useTheme, Box } from '@mui/material'
import { ColorMode } from '../../theme';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import logo from '../../Assets/images/LogoClaro.png';
import SwipeDrawer from '../../components/SwipeableDrawer';
import { Link } from 'react-router-dom';



const NavBar = () => {
  const count = useSelector((state) => state.carProducts.products);
  const theme = useTheme();
  const colorMode = useContext(ColorMode)
  const [drawer, setDrawer] = useState(false)

  const toggleDrawer = () => {
    drawer ? setDrawer(false) : setDrawer(true)
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2} >
      {/* box to hamburguer menu */}
      <Box display="flex" >
        <Link to={"/"}>
          <img src={logo} alt="Logo" width={40} />
        </Link>
      </ Box>
      {/* box to icons users */}
      <Box Box display="flex" >
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton onClick={toggleDrawer}>
          <Badge badgeContent={count.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Box>
      <SwipeDrawer drawer={drawer} toggleDrawer={toggleDrawer} />
    </ Box >
  )
}

export default NavBar; 