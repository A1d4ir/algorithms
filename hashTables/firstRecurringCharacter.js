// Google question
// Given an array = [2,3,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

function firstRecurringCharacter(characters) {
  const checkedCharacters = new Set();

  for(let i = 0; i < characters.length; i++) {
    if(checkedCharacters.has(characters[i])) {
      return characters[i];
    }
    checkedCharacters.add(characters[i]);
  }

  return undefined;

} // O(n)

function firstRecurringCharacter2(input) {
  let map = {};
  for(let i = 0; i < input.length; i++) {
    if(map[input[i]]) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }
  return undefined;
}  // O(n)

console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacter2([2,1,1,2,3,5,1,2,4]));