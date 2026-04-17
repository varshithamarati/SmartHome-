import { useState } from "react";
import "./Devices.css";

function Devices() {
  const [devices, setDevices] = useState({
    light: false,
    fan: false,
    fridge: false,
    cooler: false
  });

  const toggleDevice = (name) => {
    setDevices({ ...devices, [name]: !devices[name] });
  };

  return (
    <div className="devices-container">
      <h2>All Devices</h2>

      <div className="devices-grid">

        {/* Light */}
        <div className="device-card">
          <img src="https://img.icons8.com/fluency/96/light-on.png" alt="Light"/>
          <h3>Light</h3>
          <button
            className={devices.light ? "on" : "off"}
            onClick={() => toggleDevice("light")}
          >
            {devices.light ? "ON" : "OFF"}
          </button>
        </div>

        {/* Fan */}
        <div className="device-card">
          <img src="https://img.icons8.com/fluency/96/fan.png" alt="Fan"/>
          <h3>Fan</h3>
          <button
            className={devices.fan ? "on" : "off"}
            onClick={() => toggleDevice("fan")}
          >
            {devices.fan ? "ON" : "OFF"}
          </button>
        </div>

        {/* Fridge */}
        <div className="device-card">
          <img src="https://img.icons8.com/fluency/96/fridge.png" alt="Fridge"/>
          <h3>Fridge</h3>
          <button
            className={devices.fridge ? "on" : "off"}
            onClick={() => toggleDevice("fridge")}
          >
            {devices.fridge ? "ON" : "OFF"}
          </button>
        </div>

        {/* Cooler */}
        <div className="device-card">
          <img src="https://img.icons8.com/fluency/96/air-conditioner.png" alt="Cooler"/>
          <h3>Cooler</h3>
          <button
            className={devices.cooler ? "on" : "off"}
            onClick={() => toggleDevice("cooler")}
          >
            {devices.cooler ? "ON" : "OFF"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default Devices;