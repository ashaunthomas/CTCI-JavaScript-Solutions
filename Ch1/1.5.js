/**
 * Given two strings, write a function to check if they are
 * one or zero edits away, given the following possible edits:
 * 1. Insert a character
 * 2. Remove a character
 * 3. Replace a character
 * TODO: Finish functions to test 3 edits
 * @author Ashaun Thomas
 */

 testCases = [
     ["pale", "ple"]
 ];

 function isEditAway(inputs) {
    // best case of identical strings, thus true
    if (inputs[0] === inputs[1]) {
        return true;
    }
    // best case of no possible single edit solution due to
    // out of bounds length difference, thus false
    if (Math.abs(((inputs[0].length - inputs[1].length)) > 1)) {
        return false;
    }
    let map1 = hashify(inputs[0]);
    let map2 = hashify(inputs[1]);

    return map2;
 }


/**
 * TODO: Finish this
 * Checks for edit 1 possibility: character insertion
 * @param  string1 String to check for character insertion
 * @param  string2 String to check for character insertion
 */
function editOneCheck(map1, map2) {
    let smallest = (map1.size < map2.size) ? map1 : map2;
    let largest = (smallest === map1) ? map2 : map1;
    // Needs to pop matching pairs from largest
}

/**
 * Turns a string into a JS-native hashmap implementation.
 * @param string String to be hashified 
 */
function hashify(string) {
    let map = new Map();
    for (let i = 0; i < string.length; i++) {
        let key = string.charAt(i);
        let value = map.has(key) ? map.get(key) + 1 : 1;
        map.set(key,value);
    }
    return map;
}

/**
 * Runs test cases
 */
 function main() {
    for( let i = 0; i < testCases.length; i++) {
        console.log(isEditAway(testCases[i]));
    }
 }

 main();