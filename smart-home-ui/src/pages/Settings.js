import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";

function Settings() {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // ✅ FIXED RESET FUNCTION
  const handleReset = () => {
    if (newPassword === "" || confirmPassword === "") {
      alert("Please fill all fields ❌");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    fetch("http://localhost:8080/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        username: "admin",
        newPassword: newPassword
      })
    })
      .then(res => res.text())
      .then(data => {
        alert(data);  // ✅ real backend response
        setNewPassword("");
        setConfirmPassword("");
      })
      .catch(error => {
        console.log(error);
        alert("❌ Backend not connected");
      });
  };

  return (
    <div className="settings-page">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>⚙ Settings</h2>
        <ul>
          <li onClick={() => navigate("/dashboard")}>Home</li>
          <li onClick={() => navigate("/devices")}>Devices</li>
          <li onClick={() => navigate("/settings")}>Settings</li>
          <li onClick={() => navigate("/login")}>Logout</li>
        </ul>
      </div>

      {/* Main */}
      <div className="settings-main">

        <h2>Settings</h2>

        {/* Profile */}
        <div className="card">
          <h3>👤 Profile</h3>
          <p>Name: Varshitha</p>
          <p>Email: user@gmail.com</p>
        </div>

        {/* Notifications */}
        <div className="card">
          <h3>🔔 Notifications: {notifications ? "ON" : "OFF"}</h3>
          <button onClick={() => setNotifications(!notifications)}>
            Toggle
          </button>
        </div>

        {/* Reset Password */}
        <div className="card">
          <h3>🔒 Reset Password</h3>

          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className="save-btn" onClick={handleReset}>
            Save
          </button>
        </div>

      </div>
    </div>
  );
}

export default Settings;