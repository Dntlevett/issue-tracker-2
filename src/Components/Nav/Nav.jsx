import { Link, useLocation } from "react-router-dom";
import "./nav.scss";
import { AiFillBug } from "react-icons/ai";
function Nav() {
  const location = useLocation();
  return (
    <div className="navBarContainer">
      <nav className="navBar">
        <Link
          className={`logoBug ${location.pathname === "/" ? "selected" : ""}`}
          to="/"
          title="Home"
        >
          <AiFillBug size={24} />
        </Link>

        <Link
          className={`navLink ${
            location.pathname === "/issues" ? "selected" : ""
          }`}
          to="/issues"
        >
          Issues
        </Link>

        <Link
          className={`navLink ${
            location.pathname === "/dashboard" ? "selected" : ""
          }`}
          to="/dashboard"
        >
          Dashboard
        </Link>
      </nav>
    </div>
  );
}
export default Nav;
