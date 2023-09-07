// ❓ DESCRIPTION:
// Fix the code so that i declared in the if statement is a
// separate variable than i declared in the first line of the
// function. Be certain not to use the var keyword anywhere in your code.

// This exercise is designed to illustrate the difference
// between how var and let keywords assign scope to the declared
// variable. When programming a function similar to the one used
// in this exercise, it is often better to use different variable
// names to avoid confusion.

// ✅ SOLUTION:
function abbreviateLastnames(string, lastnames=1) {
    const arrString = string.split(' ');
    const arrAbbreviate = [];
    for(let i=0; i<arrString.length; i++) {
        if(i===0 || i>=(arrString.length-lastnames)) {
            arrAbbreviate.push(arrString[i]);
        } else if(arrString[i]==='de' ||
            arrString[i]==='do' ||
            arrString[i]==='da' ||
            arrString[i]==='dos' ||
            arrString[i]==='das' ||
            arrString[i]==='el') {
            arrAbbreviate.push(arrString[i]);
        } else {
            arrAbbreviate.push((arrString[i])[0] + '.');
        }
    }
    return arrAbbreviate.join(' ');
}

console.log(abbreviateLastnames('Darlan Mendonça de Oliveira Almeida', 2))