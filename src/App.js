import "./App.css";
import { useState } from "react";
import { numbers } from "./data";

function App() {
  const [digits, setDigits] = useState([0]);

  const handleCalculations = (e) => {
    let val = e.target.value;

    if (digits.length === 1 && digits[0] === 0 && val === "0") return;

    if (val === "AC") {
      setDigits([0]);
      return;
    }

    if (val === "back") {
      if (digits.length > 1) {
        let newDigits = [...digits];
        newDigits.pop();
        setDigits(newDigits);
      } else {
        setDigits([0]);
      }
      return;
    }

    if (val === ".") {
      if (digits.includes(".")) {
        return;
      } else {
        setDigits([...digits, "."]);
      }
      return;
    }

    if (val === "=") {
      const result = eval(digits.join(""));
      if (result > 1) {
        setDigits([result.toFixed(0)]);
      } else {
        setDigits([result.toFixed(4)]);
      }

      return;
    }

    // Check for consecutive operators * help from forums
    if (/[-+*/%^]{2,}/.test(digits.join("")) && /[-+*/%^]/.test(val)) {
      const operators = /[-+*/%^]/g;
      let lastOperator;
      let match;
      while ((match = operators.exec(digits.join(""))) !== null) {
        if (match[0] !== "-" && match.index > 0) {
          lastOperator = match[0];
        }
      }
      if (lastOperator) {
        let newDigits = digits.slice(0, -2);
        newDigits.push(lastOperator, val);
        setDigits(newDigits);
        return;
      }
    }

    if (digits.length === 1 && digits[0] === 0) {
      setDigits([val]);
    } else {
      setDigits([...digits, val]);
    }
  };

  console.log(digits);

  return (
    <div className="calculator">
      <div className="container">
        <div id="display">
          <span>{digits}</span>
        </div>
        <div className="buttons">
          {numbers.map((el, i) => (
            <button
              id={el.id}
              key={i}
              value={el.value}
              className={el.class}
              onClick={(e) => handleCalculations(e)}
            >
              {el.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
