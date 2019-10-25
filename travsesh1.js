// reverse a string
const reverseString = str => {
    // turn a string into array
    // separate the each character not word when using ('') vs (' ')
    // return str
    //     .split("")
    //     .reverse()
    //     .join("");
    //////////////////////////// 2nd option without reverse
    // let revString = "";
    // //  str.length - 1 because arrays starts from 0 not 1
    // for (let i = str.length - 1; i >= 0; i--) {
    //     revString = revString + str[i];
    // }
    // return revString;
    ///////////////////////////
    // let revString = "";
    // for (let i = 0; i <= str.length - 1; i++) {
    //     revString = str[i] + revString;
    // }
    // return revString;
    /////////////////////////// FOR OF
    // let revString = "";
    // for (let char of str) {
    //     revString = char + revString;
    // }
    // return revString;
    ////////////////////////// for each
    // let revString = "";
    // str.split("").forEach(char => {
    //     revString = char + revString;
    // });
    // return revString;
    //////////////////////// reduce
    // return str.split("").reduce((revString, char) => {
    //     return char + revString;
    // }, "");
};
// validate a palindrome

// const isPalindrome = str => {
//     const test = str
//         .split("")
//         .reverse()
//         .join("");
//     return test === str;
// };

// reverse an integer

const reverseInt = int => {
    const revInt = int
        .toString()
        .split("")
        .reverse()
        .join("");
    return parseInt(revInt) * Math.sign(int);
};

const capLetters = str => {
    // let strArr = str.toLowerCase().split(" ");
    // for (let i = 0; i < strArr.length; i++) {
    //     strArr[i] =
    //         strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    // }
    // return strArr.join(" ");
    ///////////////////////////// map
    // return str
    //     .toLowerCase()
    //     .split(" ")
    //     .map(word => {
    //         return word[0].toUpperCase() + word.substring(1);
    //     })
    //     .join(" ");
    /////////////////////////// for each
    // let strArr = str.toLowerCase().split(" ");
    // let newArr = [];
    // strArr.forEach(word => {
    //     newArr.push(word[0].toUpperCase() + word.substring(1));
    // });
    // return newArr.join(" ");
    // //////////////////////// regex
    // return str.replace(/\b[a-z]/gi, char => {
    //     return char.toUpperCase();
    // });
};

// max character
const maxCharacter = str => {
    let charMap = {};
    str.split("").forEach(char => {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });
    console.log(charMap);

    let max = 0;
    let maxLetter = "";
    for (letter in charMap) {
        //  debugger;
        if (charMap[letter] > max) {
            max = charMap[letter];
            maxLetter = letter;
        }
    }
    return maxLetter;
};

const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        console.log(
            i % 3 === 0 && i % 5 === 0
                ? "FizzBuzz"
                : i % 5 === 0
                ? "Buzz"
                : i % 3 === 0
                ? "Fizz"
                : i
        );
    }
};
console.log(fizzBuzz());
