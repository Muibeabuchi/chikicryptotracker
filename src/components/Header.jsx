import {
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import { useCrypto } from "../context/CryptoContext";

export default function Header() {
  const navigate = useNavigate();
  const { currency, setCurrency } = useCrypto();
  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography
            onClick={() => navigate("/")}
            sx={{
              flex: 1,
              flexWrap: "nowrap",
              color: "gold",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              cursor: "pointer",
              width: "100px",
              fontSize: {
                xs: "10px",
                sm: "14px",
                md: "18px",
                lg: "22px",
              },
            }}
          >
            CHIKI CRYPTO
          </Typography>
          <Select
            variant="outlined"
            sx={{
              width: 100,
              height: 40,
              marginLeft: 15,
              // color: "white",
            }}
            // label="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"NGN"}>NGN</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
