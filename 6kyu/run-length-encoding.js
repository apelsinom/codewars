// ❓ DESCRIPTION:
// Your task is to write such a run-length encoding. For a given string, return a list (or array)
//  of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct 
// the original string by replicating the character sx ix times and concatening all those strings. 
// Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.

// ✅ SOLUTION:
function runLengthEncoding(str) {
  if (str === '') {
    return [];
  }
  
  const result = [];
  let currentChar = str[0];
  let currentCount = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      currentCount++;
    } else {
      result.push([currentCount, currentChar]);

      currentCount = 1;
      currentChar = str[i];
    }
  }
  result.push([currentCount, currentChar]);

  return result;
}