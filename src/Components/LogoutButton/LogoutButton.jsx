import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./logoutbutton.scss";

export default function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate();
    navigate("/"); // send user back to landing page
  };

  return (
    <button className="logout-btn" onClick={handleLogout}>
      ✌️
    </button>
  );
}
