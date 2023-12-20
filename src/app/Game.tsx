"use client";

import { useState, useEffect } from "react";
import { Howl, Howler } from "howler";

var sound = new Howl({
  src: ["/celebrate.wav"],
});

const MultiplicationGame = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");

  const generateProblem = () => {
    setNum1(Math.floor(Math.random() * 90) + 10); // 1-2 digit number
    // setNum2(Math.floor(Math.random() * 90) + 10); // 1-2 digit number
    setNum2(Math.floor(Math.random() * 9) + 1); // 1 digit number
  };

  useEffect(() => {
    generateProblem();
  }, []);

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (parseInt(userInput) === num1 * num2) {
      setFeedback("Correct!");
      sound.play();
      generateProblem();
    } else {
      setFeedback("Try again!");
    }
    setUserInput("");
  };

  return (
    <div>
      <p>
        Multiply these numbers: {num1} x {num2}
      </p>
      <form onSubmit={handleSubmit} className="text-black">
        <input type="text" value={userInput} onChange={handleInput} />
        <button type="submit">Submit</button>
      </form>
      <p>{feedback}</p>
    </div>
  );
};

export default MultiplicationGame;
