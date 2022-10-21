const palindromes = function (string) {
    let re = /[\W_]/g
    let lowerString = string.toLowerCase().replace(re, "")
    let reverseString = lowerString.split("").reverse().join("")
    return reverseString === lowerString
};

// Do not edit below this line
module.exports = palindromes;
