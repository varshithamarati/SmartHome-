import "./Welcome.css";

function Welcome() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Smart Home</h2>
        <button onClick={() => window.location.href="/login"}>
          Login
        </button>
      </nav>

      {/* Main Section */}
      <div className="welcome-container">
        <div className="left">
          <h1>Welcome to Smart Home Dashboard</h1>
          <p>
            Control lights, monitor temperature, and manage your home devices
            easily with a modern smart system.
          </p>
          <button onClick={() => window.location.href="/login"}>
            Get Started
          </button>
        </div>

        <div className="right">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="smart home"
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;