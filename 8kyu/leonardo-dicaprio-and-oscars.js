// ❓ DESCRIPTION:
// if oscar was (integer) 88, you have to return "Leo finally won
// the oscar! Leo is happy".
//     if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86 (and below 88) you should return "When
// will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"

// ✅ SOLUTION:
function leo(oscar){
   if(oscar===88) return  "Leo finally won the oscar! Leo is happy";
   if(oscar===86) return "Not even for Wolf of wallstreet?!";
   if(oscar<88) return "When will you give Leo an Oscar?";
   if(oscar>88) return "Leo got one already!";
}

console.log(leo(89))
console.log(leo(88))
console.log(leo(87))
console.log(leo(86))