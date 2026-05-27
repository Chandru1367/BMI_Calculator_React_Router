# Ex06 BMI Calculator


## AIM
To develop a responsive and interactive Body Mass Index (BMI) Calculator using React that allows users to input their height and weight, and calculates their BMI to categorize their health status (e.g., Underweight, Normal, Overweight, Obese).

## DESIGN STEPS

### STEP 1: Initialize React Project

<li>Create a new React app using create-react-app.</li>
<li>Install React Router using:</li>
npm install react-router-dom

### STEP 2: Set Up Routing

Create routing structure with react-router-dom:

<li>Home route (/) – Intro or Navigation</li>

<li>BMI Calculator route (/bmi)</li>

<li>Result route (/result)</li>

### STEP 3: Design the BMI Form Page

<li>Create a form to accept Height (in cm or m) and Weight (in kg).</li>

<li>On form submit, navigate to the result page with entered values via URL query params or context/state.</li>

## STEP 4: Handle Input Validation

<li>Check if height and weight are valid numbers.</li>

<li>Optionally, show error messages for invalid inputs.</li>

### STEP 5: Perform BMI Calculation

<li>In the result component:

<li>Extract height and weight from the route (URL or passed state).</li>

<li>Apply the BMI formula:</li>

![image](https://github.com/user-attachments/assets/ec785506-c96b-489e-8783-fb1a5d36101a)
​
 
<li>Convert height from cm to m if needed.</li></li>

### STEP 6: Display Result

<li>Show calculated BMI.</li>

<li>Show category based on BMI range:

<li>Underweight, Normal, Overweight, Obese, etc.</li></li>

### STEP 7: Navigation Options

<li>Provide a button to go back to the BMI form to calculate again.</li>

### STEP 8: Enhancements

<li>Add styling using CSS or Tailwind.</li>

## PROGRAM

## App.js

```js
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
```

## App.css

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: linear-gradient(to right, #4facfe, #00f2fe);
  height: 100vh;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.bmi-box {
  background: white;
  padding: 30px;
  width: 350px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.bmi-box h1 {
  margin-bottom: 20px;
  color: #333;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
}

button {
  width: 100%;
  padding: 10px;
  background: #4facfe;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #00c6fb;
}

.result {
  margin-top: 20px;
}

.result h2 {
  color: #222;
}

.result h3 {
  margin-top: 10px;
  color: green;
}

.error {
  color: red;
  margin-top: 10px;
}

.reset-btn {
  margin-top: 15px;
  background: #ff6b6b;
}

.reset-btn:hover {
  background: #ff4d4d;
}
```

## OUTPUT

![alt text](image.png)


## RESULT
The BMI Calculator successfully takes user input for height and weight, performs the BMI calculation in real-time using React state and event handling, and displays the BMI value along with the corresponding health category.
