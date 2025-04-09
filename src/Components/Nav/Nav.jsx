import { Link } from "react-router-dom";
import "./nav.scss";
import { AiFillBug } from "react-icons/ai";
function Nav() {
  return (
    <div className="navBarContainer">
      <Link href="/">
        <div className="logoBug">
          <AiFillBug />{" "}
        </div>
      </Link>
      <nav className="navBar">
        <Link className="navBar-Link1" href="/Issues">
          Issues
        </Link>{" "}
        <Link className="navBar-Link2" href="/Dashboard">
          Dashboard
        </Link>
      </nav>
    </div>
  );
}
export default Nav;
