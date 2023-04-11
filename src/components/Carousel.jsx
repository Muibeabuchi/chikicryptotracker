import { useQuery } from "react-query";
import { TrendingCoins, fetchTrendingCoins } from "../api/Coinsapi";
import { useCrypto } from "../context/CryptoContext";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
// import axios from "axios";
// ,
const style = {
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
  carouselItem: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    alignItems: "center",
    textTransform: "uppercase",
    cursor: "pointer",
  },
};

const responsive = {
  0: {
    items: 2,
  },
  512: {
    items: 4,
  },
};

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3}) +(?!\d))/g, ",");
};

export default function Carousel() {
  const { currency, symbol } = useCrypto();
  const {
    data: trendingCoins,
    isloading,
    error,
  } = useQuery(["trendingcoins", currency], () => fetchTrendingCoins(currency));
  //   console.log(data);

  const items = trendingCoins?.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <Link to={`/coins/${coin?.id}`} style={style.carouselItem}>
        <img
          src={coin?.image}
          alt={coin?.name}
          height="80px"
          style={{ marginBottom: 10 }}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              fontWeight: 500,
              color: profit > 0 ? "rgb(14,203,129)" : "red",
            }}
          >
            {profit && "+"} {coin?.price_change_percentage_24h?.toFixed(2)}
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol}
          {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });
  return (
    <div style={style.carousel}>
      <AliceCarousel
        infinite
        mouseTracking
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
}
