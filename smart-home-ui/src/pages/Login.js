import { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        username,
        password
      })
    })
      .then(res => res.text())
      .then(data => {
        if (data === "success") {
          window.location.href = "/dashboard";
        } else {
          alert("Invalid login");
        }
      });
  };

  return (
    <div className="login-bg">
      <div className="overlay"></div>

      <div className="login-card">
        <h2>🏠 Smart Home</h2>

        <input
          type="text"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;