const one_digit = () => Math.floor(Math.random() * 9) + 1;
const two_digit = () => Math.floor(Math.random() * 90) + 10;

interface Level {
  description: string;
  hint: string;
  generator: {
    num1: () => number;
    num2: () => number;
    operator: () => "+" | "*";
  };
}

export const levels: Record<string, Level> = {
  rtl: {
    description: "Thinking Right to Left",
    hint: "Input numbers from right to left. As U will see, it will make for easier carrying and mental arithmetic.",
    generator: {
      num1: () => Math.floor(Math.random() * 1000),
      num2: () => 0,
      operator: () => "+",
    },
  },
  "1d_add": {
    description: "1 Digit Addition",
    hint: "Caching these simple additions helps us build up to large multiplications.",
    generator: {
      num1: one_digit,
      num2: one_digit,
      operator: () => "+",
    },
  },
  "2d_add_1d": {
    description: "2 Digit Plus 1 Digit Addition",
    hint: "Practicing carries.",
    generator: {
      num1: two_digit,
      num2: one_digit,
      operator: () => "+",
    },
  },
};

for (let i = 2; i <= 9; i++) {
  levels[`1d_mul_${i}`] = {
    description: `1 Digit Multiplication by ${i}`,
    hint: "Caching these simple multiplications helps us build up to large multiplications.",
    generator: {
      num1: one_digit,
      num2: () => i,
      operator: () => "*",
    },
  };
}

levels["1d_mul_1d"] = {
  description: "1 Digit Multiplication",
  hint: "Caching these simple multiplications helps us build up to large multiplications.",
  generator: {
    num1: one_digit,
    num2: one_digit,
    operator: () => "*",
  },
};
levels["2d_mul_1d"] = {
  description: "2 Digit by 1 Digit Multiplication",
  hint: "Practice putting it all together in a short problem",
  generator: {
    num1: two_digit,
    num2: one_digit,
    operator: () => "*",
  },
};
levels["2d_mul_2d"] = {
  description: "2 Digit by 2 Digit Multiplication",
  hint: "Practice putting it all together in a medium problem",
  generator: {
    num1: two_digit,
    num2: two_digit,
    operator: () => "*",
  },
};

// setNum1(Math.floor(Math.random() * 9) + 1); // 1-2 digit number
// setNum2(Math.floor(Math.random() * 90) + 10); // 1-2 digit number
// setNum2(Math.floor(Math.random() * 9) + 1); // 1 digit number
