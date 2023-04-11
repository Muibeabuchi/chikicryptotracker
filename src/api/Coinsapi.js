import { useCrypto } from "../context/CryptoContext";
import axios from 'axios';



const api = axios.create({
    baseURL: "https://api.coingecko.com/api/v3/coins",
  });


export const CoinList = (currency) =>
  `/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency) =>
  `/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;


//   const 
export const fetchTrendingCoins = async (currency) => {
    const { data } = await api.get(TrendingCoins(currency));
    return data;
  };

export const fetchCoinList = async (currency) => {
    const { data } = await api.get(CoinList(currency));
    return data;
  };




