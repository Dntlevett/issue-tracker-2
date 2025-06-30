import { Link, useLocation } from "react-router-dom";
import "./nav.scss";
import { AiFillBug } from "react-icons/ai";
function Nav() {
  const location = useLocation();
  return (
    <div className="navBarContainer">
      <nav className="navBar">
        <div>
          {" "}
          <Link
            className={`logobug" ${
              location.pathname === "/" ? "selected" : ""
            }`}
            to="/"
          >
            <AiFillBug />
          </Link>
        </div>

        <div>
          <Link
            className={`navBar-Link1 ${
              location.pathname === "/issues" ? "selected" : ""
            }`}
            to="/issues"
          >
            Issues
          </Link>
        </div>
        <div>
          {" "}
          <Link
            className={`navBar-Link2" ${
              location.pathname === "/dashboard" ? "selected" : ""
            }`}
            to="/dashboard"
          >
            Dashboard
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
