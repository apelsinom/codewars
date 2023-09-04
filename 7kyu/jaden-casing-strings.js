// ❓ DESCRIPTION:
// Jaden Smith, the son of Will Smith, is the star of films
// such as The Karate Kid (2010) and After Earth (2013).
// Jaden is also known for some of his philosophy that he
// delivers via Twitter. When writing on Twitter, he is known
// for almost always capitalizing every word. For simplicity,
// you'll have to capitalize each word, check out how contractions
// are expected to be in the example below.
// Your task is to convert strings to how they would be written by
// Jaden Smith. The strings are actual quotes from Jaden Smith, but
// they are not capitalized in the same way he originally typed them.

// ✅ SOLUTION:
function toJadenCase (string) {
    const arrString = string.split(' ');
    let arrStringLower = [];
    for (let word of arrString) {
        arrStringLower.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    return arrStringLower.join(' ');
}
console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))