import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PAGE } from "./pages/pageConfig";
import PhotosPage from "./pages/photos/PhotosPage";
import PhotoPage from "./pages/photos/PhotoPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} path={PAGE.BASE}>
          <Route index element={<Navigate to={PAGE.PHOTOS} />} />

          <Route path={PAGE.PHOTOS}>
            <Route index element={<PhotosPage />} />
            <Route path=":id" element={<PhotoPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
