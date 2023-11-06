// // ❓ DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// ✅ SOLUTION:
function findShort(s){
    const arrS = s.split(' ')
    const arrLengthS = []
    for (let word of arrS) {
        arrLengthS.push(word.length)
    }
    return Math.min(...arrLengthS)
}

console.log(findShort ("bitcoin take over the world maybe who knows perhaps"))