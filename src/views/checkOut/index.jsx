import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement } from "@stripe/react-stripe-js";
import { Box, useTheme } from "@mui/material";
import { colorsTheme } from "../../theme";

const stripePromise = loadStripe("pk_test_51NnKHsFJ0h1X9x3NKJc6s8iVZvynZ7Ls5d5UfY2xAq7CiFLcW4SBMplJP2kkHGZkdjNHNYAhcsEMJtUBcdDEdPvM00HVP1LEHJ");

const CheckOut = () => {

  const theme = useTheme();
  const colors = colorsTheme(theme.palette.mode);

  return (
    <Elements stripe={stripePromise}>
      <Box color={colors.grey[100]} p={2}>
        <CardElement />
      </Box>
    </Elements>
  )
}

export default CheckOut;