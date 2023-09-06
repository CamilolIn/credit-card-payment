import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51NnKHsFJ0h1X9x3NKJc6s8iVZvynZ7Ls5d5UfY2xAq7CiFLcW4SBMplJP2kkHGZkdjNHNYAhcsEMJtUBcdDEdPvM00HVP1LEHJ");

const PayCard = ({ id }) => {


  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })

    if (error) console.log(error)
    else console.log(paymentMethod)
  }

  return (
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
  )
}

export default PayCard;