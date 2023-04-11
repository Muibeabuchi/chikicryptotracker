import { useContext, createContext, useState, useEffect } from "react";

const CryptoContext = createContext();

export default function CryptoContextProvider({ children }) {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    if (currency == "USD") {
      setSymbol("$");
    } else if (currency == "NGN") {
      setSymbol("₦");
    }
  }, [currency]);

  return (
    <CryptoContext.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </CryptoContext.Provider>
  );
}

export function useCrypto() {
  return useContext(CryptoContext);
}
