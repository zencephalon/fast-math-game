export const levels = [
  {
    level: 0,
    description: "Thinking Right to Left",
    hint: "Input numbers from right to left. As U will see, it will make for easier carrying and mental arithmetic.",
    generator: {
      // 1-5 digit number
      num1: () => Math.floor(Math.random() * 100000),
      num2: () => 0,
      operator: () => "+",
    },
  },
  {
    level: 1,
    description: "Addition by 1",
    hint: "Easy",
    generator: {
      // 1-5 digit number
      num1: () => Math.floor(Math.random() * 100000),
      num2: () => 1,
      operator: () => "+",
    },
  },
  {
    level: 2,
    description: "Addition by 2",
    hint: "Easy",
    generator: {
      // 1-5 digit number
      num1: () => Math.floor(Math.random() * 100000),
      num2: () => 2,
      operator: () => "+",
    },
  },
  {
    level: 3,
    description: "Addition by 3",
    hint: "Easy",
    generator: {
      // 1-5 digit number
      num1: () => Math.floor(Math.random() * 100000),
      num2: () => 3,
      operator: () => "+",
    },
  },
];

// setNum1(Math.floor(Math.random() * 9) + 1); // 1-2 digit number
// setNum2(Math.floor(Math.random() * 90) + 10); // 1-2 digit number
// setNum2(Math.floor(Math.random() * 9) + 1); // 1 digit number
