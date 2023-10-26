// ❓ DESCRIPTION:
//  You probably know that some characters written on a piece of paper, after turning this sheet 180 degrees,
//  can be read, although sometimes in a different way. So, uppercase letters "H", "I", "N", "O", "S", "X", "Z"
//  after rotation are not changed, the letter "M" becomes a "W", and Vice versa, the letter "W" becomes a "M".
//
//     We will call a word "shifter" if it consists only of letters "H", "I", "N", "O", "S", "X", "Z", "M" and
//     "W". After turning the sheet, this word can also be read, although in a different way. So, the word "WOW
//     "turns into the word "MOM". On the other hand, the word "HOME" is not a shifter.
//
//     Find the number of unique shifter words in the input string (without duplicates). All shifters to
//     be counted, even if they are paired (like "MOM" and "WOW"). String contains only uppercase letters.

// ✅ SOLUTION:
function shifter(s){
    if(s === '') return 0;
    let counter = 0;
    const arrayWords = s.split(' ');
    const arrayWordsNoRepeat = [...new Set(arrayWords)]
    const arrayWordsNoRepeatFilter = arrayWordsNoRepeat.filter(word => word !== "HOME")
    for(let itemWord of arrayWordsNoRepeatFilter) {
        let counterLetter = 0;
        for(let itemLetter of itemWord) {
            if(itemLetter ===  "H" ||
                itemLetter === "I" ||
                itemLetter === "N" ||
                itemLetter === "O" ||
                itemLetter === "S" ||
                itemLetter === "X" ||
                itemLetter === "Z" ||
                itemLetter === "M" ||
                itemLetter === "W") {
                counterLetter++;
            }
        }
        if(counterLetter===itemWord.length) counter++;
    }
    return counter;
}
console.log(shifter("WHO IS WHO MOM HOME"))