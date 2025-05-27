import { Route, Routes } from "react-router-dom";
import { PAGE } from "./pages/pageConfig";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import ErrorPage from "./pages/ErrorPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={PAGE.BASE} element={<HomePage />} />
      <Route path={PAGE.DETAILS} element={<DetailPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
