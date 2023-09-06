import { Box, Typography, useTheme } from "@mui/material"
import { colorsTheme } from "../../theme";

const DeliveryCard = ({ children, deliveryNumber = 0, deliveryTitle = 'No Title' }) => {

  const theme = useTheme();
  const colors = colorsTheme(theme.palette.mode);
  return (
    <Box
      sx={{
        backgroundColor: colors.primary[100]
      }}
      color={colors.grey[100]}
      p={2}
      m={2}
      borderRadius={3}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        marginBottom={2}
      >
        <Typography
          variant="h2"
          marginRight={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={colors.blueOk[800]}
          borderRadius="50%"
          width="45px"
          height="45px"
        >{deliveryNumber}</Typography>
        <Typography variant="h2" color={colors.grey[500]}>{deliveryTitle}</Typography>
      </Box>
      {children}
    </Box>
  )
}

export default DeliveryCard;