import { Outlet } from "react-router-dom";

const PageContainer = () => {
  return (
    <main className="flex-grow flex flex-col justify-center items-center mx-6">
      <Outlet />
    </main>
  );
};

export default PageContainer;
