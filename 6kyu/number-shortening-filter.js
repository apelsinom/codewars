// ❓ DESCRIPTION:
// Here is a new kata that Codewars asked me to do related to interviewing
// and working in a production setting.
//     You might be familar with and have used Angular.js. Among other things,
//     it lets you create your own filters that work as functions. You can then
//     put these in a page to perform specific data changes, such as shortening
//     a number to display a more concise notation.
//     In this kata, we will create a function which returns another function
//     (or process, in Ruby) that shortens very long numbers. Given an initial
//     array of values replace the Xth power of a given base. If the input of
//     the returned function is not a numerical string, it should return the
//     input itself as a string.
//     Here's an example, which is worth a thousand words:
// filter1 = shortenNumber(['','k','m'],1000);
// filter1('234324') == '234k';
// filter1('98234324') == '98m';
// filter1([1,2,3]) == '1,2,3';
// filter2 = shortenNumber(['B','KB','MB','GB'],1024);
// filter2('32') == '32B';
// filter2('2100') == '2KB';
// filter2('pippi') == 'pippi';
// If you like to test yourself on kata related to actual work and interviews, consider trying this kata where you will build a breadcrumb generator

// ✅ SOLUTION:
function shortenNumber(suffixes, base) {
    if(isNaN(suffixes)) {
        return suffixes;
    } else if(Array.isArray(suffixes)) {
        return suffixes.join(',')
    } else if(base===1000) {
        if(suffixes.length>6) {
            return (Math.trunc(parseInt(suffixes)/(base**2))).toString() + 'm';
        } if(suffixes.length>3) {
            return (Math.trunc(parseInt(suffixes)/base)).toString() + 'k';
        } else if (suffixes.length<3) {
            return suffixes;
        }
    } else if(base===1024) {
        if (suffixes.length>6) {
            return (Math.trunc(parseInt(suffixes)/(base**2))).toString() + 'MB';
        } else if (suffixes.length>3) {
            return  (Math.trunc(parseInt(suffixes)/base)).toString() + 'KB';
        } else if (suffixes.length<4) {
            return suffixes + 'B';
        }
    }
}


console.log(shortenNumber('32424234223', 1000));
