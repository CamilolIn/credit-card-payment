import { IconButton, useTheme, Box } from '@mui/material'
import { useContext } from 'react';
import { ColorMode, colorsTheme } from '../../theme';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../LogoClaro.png';



const NavBar = () => {

  const theme = useTheme();
  const colors = colorsTheme(theme.palette.mode);
  const colorMode = useContext(ColorMode)

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* box to hamburguer menu */}
      <Box display="flex">
        <img src={logo} alt="Logo" width={40} />
      </Box>
      {/* box to icons users */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
      </Box>
    </Box >
  )
}

export default NavBar; 