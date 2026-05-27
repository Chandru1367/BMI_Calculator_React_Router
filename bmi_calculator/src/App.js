import React, { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || height <= 0 || weight <= 0) {
      setError("Please enter valid height and weight");
      setBmi(null);
      return;
    }

    setError("");

    // Convert cm to meter
    const heightInMeter = height / 100;

    // BMI Formula
    const bmiValue = (
      weight /
      (heightInMeter * heightInMeter)
    ).toFixed(2);

    setBmi(bmiValue);

    // BMI Category
    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory("Normal");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
  };

  const resetForm = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setCategory("");
    setError("");
  };

  return (
    <div className="container">
      <div className="bmi-box">
        <h1>BMI Calculator</h1>

        <form onSubmit={calculateBMI}>
          <div className="input-group">
            <label>Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height"
            />
          </div>

          <div className="input-group">
            <label>Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight"
            />
          </div>

          <button type="submit">Calculate BMI</button>
        </form>

        {error && <p className="error">{error}</p>}

        {bmi && (
          <div className="result">
            <h2>Your BMI: {bmi}</h2>
            <h3>Category: {category}</h3>

            <button className="reset-btn" onClick={resetForm}>
              Calculate Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;