import { ACTIONS } from "./page";


export default function DigitButton({ dispatch, digit, type }) {
  return (
    <button
      className={`${
        type === "function"
          ? "bg-[#4E505F]"
          : type === "operand"
          ? "bg-[#4B5EFC]"
          : "bg-[#2E2F38] "
      } w-[72px] h-[72px] text-lg text-white  rounded-lg hover:bg-blue-600 focus:outline-none`}
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
