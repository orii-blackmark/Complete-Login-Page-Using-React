import "./Style.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function logoutSubmit() {
    localStorage.setItem("login", false);
    localStorage.setItem("loginStatus", "Logged out successfully!");
    navigate("/");
  }

  return (
    <div className="form">
      <h3>Dashboard</h3>
      <p onClick={logoutSubmit}>Logout</p>
    </div>
  );
}

export default Dashboard;
