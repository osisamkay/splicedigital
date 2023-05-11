"use client";
import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState("");

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handleNumberClick(number) {
    setInput(input + number);
  }

  function handleSignChange() {
    setInput((prevInput) => {
      if (prevInput.startsWith("-")) {
        return prevInput.slice(1);
      } else {
        return "-" + prevInput;
      }
    });
  }

  function handlePercentClick() {
    setInput((prevInput) => {
      return (parseFloat(prevInput) / 100).toString();
    });
  }

  function handleOperatorClick(operator) {
    if (input !== "") {
      if (operator === "+/-") {
        handleSignChange();
        return;
      }
      if (operator === "%") {
        handlePercentClick();
        return;
      }
      if (operator === "=") {
        if (operator === "=" && input !== "") {
          switch (operator) {
            case "+":
              setResult(result + parseFloat(input));
              break;
            case "-":
              setResult(result - parseFloat(input));
              break;
            case "*":
              setResult(result * parseFloat(input));
              break;
            case "/":
              setResult(result / parseFloat(input));
              break;
            default:
              break;
          }
        }
        setInput(result.toString());
        setResult(0);
        setOperator("");
        return;
      }
      if (operator === "Del") {
        setInput(input.slice(0, -1));
        return;
      }
      setOperator(operator);
      setResult(parseFloat(input));
      setInput("");
    }
  }

  function handleClearClick() {
    setResult(0);
    setInput("");
    setOperator("");
  }
  const calcdata = [
    { input: "C", type: "function" },
    { input: "+/-", type: "function", onClick: handleSignChange },
    { input: "%", type: "function", onClick: handlePercentClick },
    { input: "/", type: "operand" },
    { input: "7", type: "digit" },
    { input: "8", type: "digit" },
    { input: "9", type: "digit" },
    { input: "*", type: "operand" },
    { input: "4", type: "digit" },
    { input: "5", type: "digit" },
    { input: "6", type: "digit" },
    { input: "-", type: "operand" },
    { input: "1", type: "digit" },
    { input: "2", type: "digit" },
    { input: "3", type: "digit" },
    { input: "+", type: "operand" },
    { input: ".", type: "digit" },
    { input: "0", type: "digit" },
    { input: "Del", type: "digit" },
    { input: "=", type: "operand" },
  ];

  return (
    <div className="p-4 max-w-[357px] bg-gray-100 rounded-lg">
      <div className="">
        <input
          type="text"
          className="w-full p-2 text-lg bg-white border  border-gray-300 rounded-lg"
          value={input}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          className="w-full  p-2 text-lg bg-white border border-gray-300 rounded-lg"
          value={result}
          readOnly
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {calcdata.map((item, index) => (
          <button
            className={`${
              item.type === "function"
                ? "bg-[#4E505F]"
                : item.type === "operand"
                ? "bg-[#4B5EFC]"
                : "bg-[#2E2F38] "
            } w-[72px] h-[72px] text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none`}
            onClick={() => {
              item.type === "digit" && handleNumberClick(item.input);
              item.type === "operand" && handleOperatorClick(item.input);
              item.input === "C" && handleClearClick();
            }}
          >
            {item.input}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
