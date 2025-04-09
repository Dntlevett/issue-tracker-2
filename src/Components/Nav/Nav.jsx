import { Link, useLocation } from "react-router-dom";
import "./nav.scss";
import { AiFillBug } from "react-icons/ai";
function Nav() {
  const location = useLocation();
  return (
    <div className="navBarContainer">
      {/* <Link to="/">
        <div className="logoBug">
          <AiFillBug href="/" />{" "}
        </div>
      </Link> */}
      <Link
        className={`logobug" ${location.pathname === "/" ? "selected" : ""}`}
        to="/"
      >
        <AiFillBug />
      </Link>

      {/* <nav className="navBar">
        <Link className="navBar-Link1" to="/issues">
          Issues
        </Link>{" "} */}
      <nav className="navBar">
        <Link
          className={`navBar-Link1 ${
            location.pathname === "/issues" ? "selected" : ""
          }`}
          to="/issues"
        >
          Issues
        </Link>
        <Link
          className={`navBar-Link2" ${
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
