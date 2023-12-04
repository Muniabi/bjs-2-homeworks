function getArrayParams(...arr) {

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((accum, currentValue) => accum + currentValue, 0);
  let avg = Number((sum / arr.length).toFixed(2));

  return { min, max, avg }
}

function summElementsWorker(...arr) {
  return arr.reduce((accum, currentValue) => accum + currentValue, 0);
}

function differenceMaxMinWorker(...arr) {

  let max = Math.max(...arr);
  let min = Math.min(...arr);
  if (arr.length == 0) {
    return 0;
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {

  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0) {
    return 0;
  }

  for (let el of arr) {
    if (el % 2 === 0) {
      sumEvenElement += el;
    } else {
      sumOddElement += el;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {

  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  }

  for (let el of arr) {
    if (el % 2 === 0) {
      sumEvenElement += el;
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement;

}

function makeWork(arrOfArr, func) {

  let maxWorkerResult = -Infinity;
  for (let el of arrOfArr) {
    const maxFunctionResult = func(...el);

    if (maxFunctionResult > maxWorkerResult) {
      maxWorkerResult = maxFunctionResult;
    }
  }
  return maxWorkerResult;
}
