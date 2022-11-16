import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import MainPage from "../Views/MainPage";
import AddUsers from "../Views/AddUsers";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<MainPage />} />
      <Route path="add-users" element={<AddUsers />} />
    </Route>
  )
);
