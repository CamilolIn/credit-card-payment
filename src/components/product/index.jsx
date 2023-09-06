import { useDispatch } from "react-redux";
import { Box, Grid, Typography, useTheme } from "@mui/material"
import { colorsTheme } from "../../theme";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import { addProduct } from "../../store/carSlice";

const Product = ({ product }) => {

  const theme = useTheme();
  const colors = colorsTheme(theme.palette.mode);
  const dispatch = useDispatch();

  const { name, brand, productValue, urlImg, index } = product

  const onHandleAddItem = () => {
    console.log('herrrrre')
    dispatch(addProduct(product))
  }

  return (
    <Grid item xs={12} sm={4} md={4} key={index} >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={2}
        borderRadius={5}
        backgroundColor={colors.primary[400]}
        height={"300px"}
      >
        <img
          src={urlImg}
          loading="lazy"
          width={150}
          height={150}
          style={{
            objectFit: 'fill'
          }}
        />
        <Typography color={colors.grey[100]} alignSelf={"flex-start"}>{name}</Typography>
        <Typography color={colors.grey[100]} alignSelf={"flex-start"}>{brand}</Typography>
        <Typography color={colors.grey[100]} alignSelf={"flex-start"}>{productValue}</Typography>
        <Button
          onClick={onHandleAddItem}
          sx={{
            backgroundColor: colors.blueOk[500]
          }}
          variant="contained"
          endIcon={<AddShoppingCartIcon
          />}>Agregar al carrito</Button>
      </Box>
    </Grid>
  )
}

export default Product