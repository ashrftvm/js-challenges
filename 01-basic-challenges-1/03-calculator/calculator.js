function calculator(num1, num2, operator) {
  let res;
  switch (operator) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "/":
      res = num1 / num2;
      break;
    case "*":
      res = num1 * num2;
      break;
    default:
      throw new Error("Operator error");
  }
  return res;
}

module.exports = calculator;
