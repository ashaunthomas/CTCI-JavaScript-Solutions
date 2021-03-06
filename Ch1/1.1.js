/**
 * Determine if a string has all unique characters.
 * @author Ashaun Thomas
 */

let testCases = [
    'abcd',
    'abbc',
    '1234',
    ' s k o l'
];

/**
 * Checks to see if a string is unique by using
 * the built-in Set object. This implementation takes advantage
 * of the fact that the Set object doesn't allow duplicates by
 * comparing the size of the array as a set. All duplicates would
 * be removed in the set, causing it's size to be smaller than the
 * length of an array representing the string.
 * @param string String of characters to analyze
 */

const ASCII_CHARACTERS = 256;
const UNICODE_CHARACTERS = 1114112;

/**
 * By ECMAScript standards (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-set-objects),
 * all browser implementations of "Set" objects must be "sublinear". This could be O(log n),
 * O(sqrt(n)), or any other Big O in which the limit of the ratio created by f(x)/g(x), where 
 * f(x) = sublinear function
 * g(x) = n 
 * is 0. 
 * 
 * This means worst-case, Set creation is still better than linear time algorithms.
 * 
 * The split function however is O(N), thus this algotithm is O(N)
 * @param string 
 */
function isUnique(string) {
    if (isInvalidASCII(string) || isInvalidUnicode(string)) {
        return false;
    }
    let inputStringArr = string.toLowerCase().split('');
    let inputSet = new Set(inputStringArr);
    if (inputStringArr.length > inputSet.size) {
        return false;
    }
    else {
        return true;
    }
}

/**
 * Tests if string is invalid ASCII string using
 * the Pigeonhole Principle
 * @param str 
 */
function isInvalidASCII(str) {
    if (/^[\x00-\x7F]*$/.test(str) && str.length > ASCII_CHARACTERS) {
        return true;
    }
    return false;
}

/**
 * Tests if the string is invalid Unicode string using
 * the Pigeonhole Principle
 * @param str
 */
function isInvalidUnicode(str) {
    if (str.length > UNICODE_CHARACTERS) {
        return true;
    }
    return false;
}


/**
 * Runs test cases
 */
function main() {
    for (let i = 0; i < testCases.length; i++) {
        console.log(`${testCases[i]} is unique?  ${isUnique(testCases[i])}`);
    }
}

main();