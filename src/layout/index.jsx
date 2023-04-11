import { Header } from "../components";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "../App";

const style = {
  backgroundColor: "#14161a",
  color: "white",
  minHeight: "100vh",
};

export default function RootLayout() {
  return (
    <div style={style}>
      <ThemeProvider theme={darkTheme}>
        <Header />
      </ThemeProvider>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
