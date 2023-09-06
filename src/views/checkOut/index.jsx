import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement } from "@stripe/react-stripe-js";
import DeliveryCard from "../../components/deliveryCard";
import { Box, Button, Divider, Grid, List, ListItem, ListItemButton, ListItemText, Typography, useTheme } from "@mui/material";
import { colorsTheme } from "../../theme";
import { useSelector } from "react-redux";

const stripePromise = loadStripe("pk_test_51NnKHsFJ0h1X9x3NKJc6s8iVZvynZ7Ls5d5UfY2xAq7CiFLcW4SBMplJP2kkHGZkdjNHNYAhcsEMJtUBcdDEdPvM00HVP1LEHJ");

const CheckOut = () => {

  const theme = useTheme();
  const colors = colorsTheme(theme.palette.mode);


  const order = useSelector((state) => state.order.order);
  const { id, name, city, phoneNumber, idLocation, totalCount, productsOrder } = order ? order : {};


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Herrrrrrrrrrrrrreeee')
  }

  return (
    <Box>
      {order
        ?
        <>
          <DeliveryCard deliveryNumber={1} deliveryTitle="Delivery Info">
            <Grid container spacing={2} >
              <Grid item xs={12}>
                <Typography color={colors.grey[500]}>{`Name: ${name}`}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color={colors.grey[500]}>{`Adress: ${city}`}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color={colors.grey[500]}>{`Phone: ${idLocation}${phoneNumber}`}</Typography>
              </Grid>
            </Grid>
          </DeliveryCard>
          <DeliveryCard deliveryNumber={2} deliveryTitle="Your Order">
            <List>
              {productsOrder.map((product, index) => (
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
                    <Box m={2}>
                      <Typography color={colors.grey[500]}>{product.name}</Typography>
                      <Typography color={colors.grey[500]}>{`$ ${product.productValue}`}</Typography>
                    </Box>
                  </ListItem>
                  <Divider sx={{
                    backgroundColor: colors.primary[500]
                  }} />
                </>
              ))}
            </List>
            <Typography color={colors.grey[500]}>{`Total:  $${totalCount}`}</Typography>
          </DeliveryCard>
          <DeliveryCard deliveryNumber={3} deliveryTitle="Payment Details">
            <Elements stripe={stripePromise}>
              <form onSubmit={handleSubmit} >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <CardElement />
                  </Grid>
                  <Grid item xs={12} sx={{
                    display: "flex",
                    justifyContent: "center"
                  }}>
                    <Button

                      type="submit"
                      sx={{
                        backgroundColor: colors.blueOk[800],
                        color: colors.grey[100]
                      }}
                      variant="contained">Place Order</Button>
                  </Grid>
                </Grid>
              </form>
            </Elements>
          </DeliveryCard>
        </>
        : <Typography variant="h1"> Porfavor actualice su carrito de compras porque esta vacio</Typography>}
    </Box>
  )
}

export default CheckOut;