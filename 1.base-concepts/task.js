"use strict"

function solveEquation(a, b, c) {
  let arr = [];

  const discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    arr.push(root);
  } else {
    arr = [];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  const monthlyPercent = percent / 100 / 12;

  const loanBody = amount - contribution;

  const payment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)))

  const remainingDebt = (payment * countMonths).toFixed(2);

  return Number(remainingDebt);

}