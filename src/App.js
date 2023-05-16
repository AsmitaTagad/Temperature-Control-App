import React, { useState } from 'react';
import './style.css'

const TemperatureControlApp = () => {
  const [temperature, setTemperature] = useState(10);

  const handleIncrement = () => {
    setTemperature(prevTemperature => prevTemperature + 1);
  };

  const handleDecrement = () => {
    setTemperature(prevTemperature => prevTemperature - 1);
  };

  const getBackgroundColor = () => {
    if (temperature >= 20 && temperature <= 30) {
      return 'yellow';
    } else if (temperature > 30 && temperature <= 50) {
      return 'orange';
    } else if (temperature > 50) {
      return 'red';
    }
  };

  return (
    <div className="app" style={{ backgroundColor: getBackgroundColor() }}>
      <div className="container">
      <h1>Temperature Control App</h1>
      <p style={{marginLeft:"7rem"}}>Temperature: {temperature}°C</p>
      <button onClick={handleIncrement} style={{padding:"0.3rem", margin:"0.8rem",marginLeft:"7rem"}}>Increment</button>
      <button onClick={handleDecrement} style={{padding:"0.3rem", margin:"0.8rem"}}>Decrement</button>
      </div>
    </div>
  );
};

export default TemperatureControlApp
