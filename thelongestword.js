// Practice Problem

// Complete the longestWord function so it takes an array of subsequences and finds the longest subsequence in the array.

// For example, longestWord(['able', 'ale', 'apple']) would return 'apple'.

var stringSequence = "abppplee";
const subsequences = ['able', 'ale', 'apple'];
function longestWord(array) {
    let longestWord = '';
    for (var element of array) {
        // if element is larger then update longestWord
        if (element.length > longestWord.length) {
            longestWord = element
        }
    }
    // return the longest word
    return longestWord;
};
console.log(stringSequence);
console.log(subsequences);
console.log(longestWord(subsequences));