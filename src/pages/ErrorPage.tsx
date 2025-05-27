import { Link } from "react-router-dom";
import { PAGE } from "./pageConfig";

const ErrorPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link to={PAGE.BASE}>Home</Link>
    </div>
  );
};

export default ErrorPage;
