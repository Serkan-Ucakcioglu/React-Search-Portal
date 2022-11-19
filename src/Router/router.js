import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import MainPage from "../Views/MainPage";
import AddUsers from "../Views/AddUsers";
import SearchDetails from "../Views/SearchDetails";
import Page404 from "../Views/Page404";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<MainPage />} />
      <Route path="add-users" element={<AddUsers />} />
      <Route path="search-result" element={<SearchDetails />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);
