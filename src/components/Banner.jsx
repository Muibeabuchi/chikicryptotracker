import { Container, Typography } from "@mui/material";
import { Carousel } from "../components";
const styles = {
  banner: {
    backgroundImage: "url(./banner.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: "25px",
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
};

export default function Banner() {
  return (
    <div style={styles.banner}>
      <Container sx={styles.bannerContent}>
        <div style={styles.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Chiki Crypto
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              textTransform: "capitalize",
              color: "lightgray",
              fontFamily: "Montserrat",
            }}
          >
            Get All the info regarding your favorite crypto currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}
