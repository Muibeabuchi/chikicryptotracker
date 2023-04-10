import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Homepage, Coinpage } from "./pages";
import RootLayout from "./layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/coin/:id" element={<Coinpage />} />
    </Route>
  )
);
export default function App() {
  return <RouterProvider router={router} />;
}
