import { Link } from "react-router-dom";
import { PAGE } from "../pages/pageConfig";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4! py-2! bg-amber-300">
      <Link
        to={PAGE.BASE}
        className="text-2xl font-bold text-blue-500 hover:text-blue-600"
      >
        Picfect
      </Link>
    </header>
  );
};

export default Header;
