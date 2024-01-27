"use client";

import {
  useState,
  useEffect,
  useCallback,
  FormEvent,
  ChangeEvent,
} from "react";
import { levels } from "@/app/levels";
import { Howl } from "howler";

const sound = new Howl({
  src: ["/celebrate.wav"],
});

const calculateAnswer = (num1: number, num2: number, operator: string) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
  return 0;
};

const MultiplicationGame = ({ levelNum }: { levelNum: number }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+"); // ["+", "-", "x", "/"]
  const [answer, setAnswer] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const level = levels[levelNum];

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
        sound.play();
        generateProblem();
      } else {
        setFeedback("Try again!");
      }
      setUserInput("");
    },
    [answer, generateProblem, userInput]
  );

  return (
    <div>
      <p className="text-xl text-right">
        {num1}
        <br />
        {operator} {num2}
      </p>
      <form onSubmit={handleSubmit} className="text-black">
        <input
          type="text"
          value={userInput}
          onChange={handleInput}
          dir="rtl"
          className="override"
          // biome-ignore lint/a11y/noAutofocus: <explanation>
          autoFocus={true}
        />
      </form>
      <p>{feedback}</p>
    </div>
  );
};

export default MultiplicationGame;
