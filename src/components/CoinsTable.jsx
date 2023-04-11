import { fetchCoinList } from "../api/Coinsapi";
import { useQuery } from "react-query";
import { useCrypto } from "../context/CryptoContext";
import { darkTheme } from "../App";
import { ThemeProvider } from "@mui/material/styles";
import { Container, TextField, Typography } from "@mui/material";

export default function CoinsTable() {
  const { currency } = useCrypto();
  const {
    data: coinlist,
    isError,
    error,
    isLoading,
  } = useQuery(["coinlist", currency], () => fetchCoinList(currency));
  //   console.log(coinlist);
  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            margin: "18px",
            fontFamily: "Montserrat",
          }}
        >
          CryptoCurrency prices by market Cap
        </Typography>
        <TextField
          variant="outlined"
          label="Search For a Cryptocurrency..."
          sx={{
            marginBottom: 20,
            width: "100%",
          }}
        />
      </Container>
    </ThemeProvider>
  );
}
