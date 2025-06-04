import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PAGE } from "./pages/pageConfig";
import { lazy } from "react";
import MainLayout from "./layouts/MainLayout";
const PhotosPage = lazy(() => import("./pages/photos/PhotosPage"));
const PhotoPage = lazy(() => import("./pages/photos/PhotoPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

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
