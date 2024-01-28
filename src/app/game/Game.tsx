"use client";

import {
  useState,
  useEffect,
  useCallback,
  FormEvent,
  ChangeEvent,
} from "react";
import { levels } from "@/app/levels";
import { celebrate } from "@/lib/celebrate";
import Link from "next/link";

const calculateAnswer = (num1: number, num2: number, operator: string) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
  return 0;
};

const MultiplicationGame = ({ levelId }: { levelId: string }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+"); // ["+", "-", "*", "/"]
  const [answer, setAnswer] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const level = levels[levelId];

  const generateProblem = useCallback(() => {
    const num1 = level.generator.num1();
    const num2 = level.generator.num2();
    const operator = level.generator.operator();
    setNum1(num1);
    setNum2(num2);
    setOperator(operator);
    setAnswer(calculateAnswer(num1, num2, operator));
  }, [level.generator]);

  useEffect(() => {
    generateProblem();
  }, [generateProblem]);

  const handleInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const userAnswer = parseInt(userInput.split("").reverse().join(""));
      console.log(answer, userAnswer);
      if (answer === userAnswer) {
        setFeedback("Correct!");
        celebrate();
        generateProblem();
      } else {
        setFeedback("Try again!");
      }
      setUserInput("");
    },
    [answer, generateProblem, userInput]
  );

  return (
    <>
      <div className="font-mono flex flex-col">
        <div className="text-xl text-right flex flex-row justify-end">
          <div className="mr-4">
            <br />
            {`${operator} `}
          </div>
          <div>
            {num1}
            <br />
            {num2}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="text-black">
          <input
            type="text"
            value={userInput}
            onChange={handleInput}
            dir="rtl"
            className="override text-xl outline-none"
            // biome-ignore lint/a11y/noAutofocus: <explanation>
            autoFocus={true}
          />
        </form>
        <p className="mt-2 text-xl">{feedback}</p>
        <p className="w-60 mt-6">{level.hint}</p>
      </div>
    </>
  );
};

export default MultiplicationGame;
