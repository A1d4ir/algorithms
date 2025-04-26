// Google question
// Given an array = [2,5,1,2,3,5,1,2,4];
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

function firstRecurringCharacter(input) {
  if(!input || input.length === 0) return undefined;

  const visitedValues = new Set();

  for(let i = 0; i <= input.length; i++) {
    if(visitedValues.has(input[i])) {
      return input[i];
    } else {
      visitedValues.add(input[i]);
    }
  }

  return undefined;
}

console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]));
console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacter([2,3,4,5]));
console.log(firstRecurringCharacter());
console.log(firstRecurringCharacter([]));