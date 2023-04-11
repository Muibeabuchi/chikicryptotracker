import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import CryptoContextProvider from "./context/CryptoContext";
import "react-alice-carousel/lib/alice-carousel.css";

const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CryptoContextProvider>
      <QueryClientProvider client={queryclient}>
        <App />
      </QueryClientProvider>
    </CryptoContextProvider>
  </React.StrictMode>
);
