function findFactorialRecursive(number) {
  if(number === 1) {
    return number;
  }
  if(number <= 0) {
    return number;
  }

  let answer = number * findFactorialRecursive(number - 1)
  return answer;
}

function findFactorialIterative(number) {
  let answer = number;
  let currentFactorial = number;
  while(currentFactorial >= 2) {
    answer = answer * (currentFactorial - 1);
    currentFactorial--;
  }

  return answer;
}

console.log('findFactorialRecursive: ', findFactorialRecursive(5));
console.log('findFactorialIterative: ', findFactorialIterative(5));


function solutionFindFactorialIterative(number) {
  let answer = 1;

  if(number === 2) {
    answer = 2
  }

  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }

  return answer;
}

function solutionFindFactorialRecursive(number) {
  if(number === 2) {
    return 2;
  }

  return number * solutionFindFactorialRecursive(number - 1);
}

console.log('solutionFindFactorialIterative: ', solutionFindFactorialIterative(5));
console.log('solutionFindFactorialRecursive: ', solutionFindFactorialRecursive(5));