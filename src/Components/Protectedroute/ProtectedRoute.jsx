import { useAuth } from "../../context/AuthContext";
import Login from "../Login/Login";

export default function ProtectedRoute({ children }) {
  const { token } = useAuth();
  if (!token) {
    return <Login />;
  }
  return children;
}
