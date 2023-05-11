"use client";

import { useReducer } from "react";


import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import DigitButton from "./DigitButton";

import OperationButton from "./OperationButton";


import "./styles.css";


export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }
      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
  }
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
  }

  return computation.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});
function formatOperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

function CalculatorApp() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <DashboardLayout>
      <div className="bg=white">
        <div className="calculator-grid">
          <div className="output">
            <div className="previous-operand">
              {formatOperand(previousOperand)} {operation}
            </div>
            <div className="current-operand">
              {formatOperand(currentOperand)}
            </div>
          </div>
          <button
            className="bg-[#4E505F]  w-[72px] h-[72px] text-lg text-white  rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={() => dispatch({ type: ACTIONS.CLEAR })}
          >
            C
          </button>
          <button
            className="bg-[#4E505F]  w-[72px] h-[72px] text-lg text-white  rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={() => dispatch({ type: ACTIONS.CLEAR })}
          >
            +/-
          </button>
          <button
            className="bg-[#4E505F]  w-[72px] h-[72px] text-lg text-white  rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={() => dispatch({ type: ACTIONS.CLEAR })}
          >
            %
          </button>
          <OperationButton operation="÷" type="operand" dispatch={dispatch} />
          <DigitButton digit="7" type="digit" dispatch={dispatch} />
          <DigitButton digit="8" type="digit" dispatch={dispatch} />
          <DigitButton digit="9" type="digit" dispatch={dispatch} />
          <OperationButton operation="*" type="operand" dispatch={dispatch} />
          <DigitButton digit="4" type="digit" dispatch={dispatch} />
          <DigitButton digit="5" type="digit" dispatch={dispatch} />
          <DigitButton digit="6" type="digit" dispatch={dispatch} />
          <OperationButton operation="-" type="operand" dispatch={dispatch} />
          <DigitButton digit="1" type="digit" dispatch={dispatch} />
          <DigitButton digit="2" type="digit" dispatch={dispatch} />
          <DigitButton digit="3" type="digit" dispatch={dispatch} />
          <OperationButton operation="+" type="operand" dispatch={dispatch} />
          <DigitButton digit="." dispatch={dispatch} />
          <DigitButton digit="0" dispatch={dispatch} />
          <button
            className="bg-[#2E2F38] w-[72px] h-[72px] text-lg text-white  rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
          >
            DEL
          </button>
          <button
            className="bg-[#4B5EFC]  w-[72px] h-[72px] text-lg text-white  rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
          >
            =
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default CalculatorApp;
