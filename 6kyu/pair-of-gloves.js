// ❓ DESCRIPTION:
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute,
// assuming that only gloves of the same color can form pairs.

// ✅ SOLUTION:
function numberOfPairs(gloves) {
  const arrRepeat = [];
  let counter = 0;
  for (let glove of gloves) {
    if(arrRepeat.indexOf(glove)>=0) continue;
    const filterGloves = gloves.filter(item => item===glove)
    counter += Math.floor(filterGloves.length / 2)
    arrRepeat.push(glove)
  }
  return counter;
}

console.log(numberOfPairs(['gray','black','purple','purple','gray','black']))