import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>🏠 Smart Home</h2>

        <ul>
          <li onClick={() => navigate("/dashboard")}>Home</li>

          <li onClick={() => navigate("/devices")}>
            Devices
          </li>

          <li onClick={() => navigate("/settings")}>
            Settings
          </li>

          <li onClick={() => navigate("/login")}>
            Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">

        {/* Welcome Card */}
        <div className="welcome-card">
          <h2>🎉 Welcome to Smart Home</h2>

          <p>
            Control and monitor all your smart devices from one place.
            Enjoy automation, comfort, and security.
          </p>

          <button onClick={() => navigate("/devices")}>
            Go to Devices
          </button>
        </div>

        {/* Status Cards */}
        <div className="status-grid">

          <div className="status-card">
            💡 Lights Status: ON
          </div>

          <div className="status-card">
            🌀 Fan Status: OFF
          </div>

          <div className="status-card">
            🧊 Fridge: ON
          </div>

          <div className="status-card">
            ❄ Cooler: OFF
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;