import "./Style.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const naviget = useNavigate();

  function logoutSubmit() {
    naviget("/");
  }

  return (
    <div className="form">
      <h3>Dashboard</h3>
      <p onClick={logoutSubmit}>Logout</p>
    </div>
  );
}

export default Dashboard;
