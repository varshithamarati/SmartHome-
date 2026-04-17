import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Devices from "./pages/Devices";
import Settings from "./pages/Settings";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Router>
      <Routes>

        {/* Default page */}
        <Route path="/" element={<Welcome />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Devices */}
        <Route path="/devices" element={<Devices />} />

        {/* Settings */}
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </Router>
  );
}

export default App;