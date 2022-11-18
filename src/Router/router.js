import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import MainPage from "../Views/MainPage";
import AddUsers from "../Views/AddUsers";
import SearchDetails from "../Views/SearchDetails";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<MainPage />} />
      <Route path="add-users" element={<AddUsers />} />
      <Route path="search-result" element={<SearchDetails />} />
    </Route>
  )
);
