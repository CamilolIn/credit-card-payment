import { Box, Grid } from "@mui/material";
import { mockDataProducts } from "../../data/mockProducts";
import Product from "../../components/product";

const Home = () => {
  return (
    <Box p={2} >
      <Grid container spacing={2}>
        {mockDataProducts.map((product, index) => (
          <Product
            product={product}
          />
        ))}
      </Grid>
    </Box>
  )
}

export default Home; 