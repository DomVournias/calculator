import { HiOutlineBackspace, HiMinus, HiPlus } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export const numbers = [
  { id: "percent", name: "%", value: "%", class: "symbol" },
  { id: "clear", name: "CE", value: "AC", class: "symbol" },
  { id: "clear", name: "C", value: "AC", class: "symbol" },
  {
    id: "back",
    name: <HiOutlineBackspace />,
    value: "back",
    class: "symbol",
  },
  { id: "seven", name: "7", value: 7, class: "number" },
  { id: "eight", name: "8", value: 8, class: "number" },
  { id: "nine", name: "9", value: 9, class: "number" },
  { id: "multiply", name: <IoMdClose />, value: "*", class: "symbol" },
  { id: "four", name: "4", value: 4, class: "number" },
  { id: "five", name: "5", value: 5, class: "number" },
  { id: "six", name: "6", value: 6, class: "number" },
  { id: "substract", name: <HiMinus />, value: "-", class: "symbol" },
  { id: "one", name: "1", value: 1, class: "number" },
  { id: "two", name: "2", value: 2, class: "number" },
  { id: "three", name: "3", value: 3, class: "number" },
  { id: "add", name: <HiPlus />, value: "+", class: "symbol" },
  { id: "decimal", name: ".", value: ".", class: "number" },
  { id: "zero", name: "0", value: 0, class: "number" },
  { id: "divide", name: "/", value: "/", class: "symbol" },
  { id: "equals", name: "=", value: "=", class: "symbol orange" },
];
