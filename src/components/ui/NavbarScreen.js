
import { Link, NavLink, useNavigate} from "react-router-dom";

const NavbarScreen = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };


  return (
    <div className="flex max-w-full items-center justify-between px-4 bg-gray-800 text-white w-full h-16">
      <div className="flex items-center gap-2 md:gap-10">
        <Link className="font-medium mb-1 text-2xl" to="/">
          Heroes
        </Link>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold border-b-2 border-white" : ""
          }
          to="/dc"
        >
          DC
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold border-b-2 border-white" : ""
          }
          to="/marvel"
        >
          Marvel
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold border-b-2 border-white" : ""
          }
          to="/search"
        >
          Search
        </NavLink>
      </div>
      
      <div className="flex gap-2 md:gap-4 items-center">
        <span>kevin</span>
        <button
          onClick={handleLogout}
          className="hover:border-b-2 border-white"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default NavbarScreen;
