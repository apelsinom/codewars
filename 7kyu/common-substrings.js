// ❓ DESCRIPTION:
// Given 2 strings, your job is to find out if there is a substring that
// appears in both strings. You will return true if you find a substring
// that appears in both strings, or false if you do not. We only care about
// substrings that are longer than one letter long.
// *Example 1*
// SubstringTest("Something","Fun"); //Returns false
// *Example 2*
// SubstringTest("Something","Home"); //Returns true
// In the above example, example 2 returns true because both of the inputs
// contain the substring "me". (soMEthing and hoME)
// In example 1, the method will return false because something and fun
// contain no common substrings. (We do not count the 'n' as a substring
// in this Kata because it is only 1 character long)
//
// #Rules: Lowercase and uppercase letters are the same. So 'A' == 'a'.
//     We only count substrings that are > 1 in length.
// #Input: Two strings with both lower and upper cases. #Output:
// A boolean value determining if there is a common substring between
// the two inputs.

// ✅ SOLUTION:
function SubstringTest(str1, str2) {
    const str1Lower = str1.toLowerCase();
    const str2Lower = str2.toLowerCase();
    for (let i=0; i<=str2Lower.length; i++) {
        let str = str2Lower[i]+str2Lower[i+1];
        if (str1Lower.includes(str)) return true;
    }
    return false;
}

console.log(SubstringTest("Something","Home"))