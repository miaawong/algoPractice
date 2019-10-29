// longest word
const longestWord = str => {
    // first try not good
    // let words = sent.split(" ");
    // let max = 0;
    // let longestArr = [];
    // words.map(word => {
    //     if (max < word.length) {
    //         longestArr.push(word);
    //         max += word.length;
    //     }
    // });
    // console.log(longestArr);
    // better with spread
    let strArr = str.split(" ");
    let longest = [];
    let max = 0;
    strArr.map(word => {
        if (word.length === max) {
            longest = [...longest, word];
        }
        if (word.length > max) {
            max = word.length;
            longest = [word];
        }
    });
    // return longest;
};
const longestWord2 = () => {
    // with sort
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    // sort by length
    const sorted = wordArr.sort((a, b) => b.length - a.length);
    const longestWordArr = sorted.filter(
        word => word.length === sorted[0].length
    );
    if (longestWordArr.length === 1) {
        //return the word
        return longestWordArr[0];
    } else {
        return longestWordArr;
    }
};

// array chunking
// while loop solution
const chunkArray = (arr, len) => {
    // init a chunked array
    const chunkedArr = [];
    // set index
    let i = 0;

    // loop while index is less than the array length
    while (i < arr.length) {
        // slice out from the index to the index + the chunk length
        // and push onto the chunked array
        chunkedArr.push(arr.slice(i, i + len));
        // increment by chunk length
        i += len;
    }
    return chunkedArr;
};
// while loop solution
const chunkArray2 = (arr, len) => {
    // init a chunked array
    const chunkedArr = [];
    arr.forEach(val => {
        // get last element
        const newChunk = chunkedArr[chunkedArr.length - 1];
        console.log(chunkedArr.length);
        // last = chunk
        // check if last and if last length is = to the chunk length
        if (!newChunk || newChunk.length === len) {
            //console.log(chunkedArr.push([val]));
            chunkedArr.push([val]);
        } else {
            newChunk.push(val);
        }
        //console.log(chunkedArr);
    });
    return chunkedArr;
};

// my solution
const flattenArr = arrays => {
    let newArr = [];
    arrays.forEach(array => {
        array.forEach(item => {
            newArr.push(item);
        });
    });
    return newArr;
};

// with reduce
// const flattenArr2 = arrays => {
//     return arrays.reduce((a, b) => {
//         //  console.log(a, b);
//         // adds to the existing array
//         return a.concat(b);
//     });
// };

// apply method
const flattenArr3 = arrays => {
    // apply takes a single array and passes all the array elements
    return [].concat.apply([], arrays);
};
// spread op
const flattenArr4 = arrays => {
    // concat method is used to merge two or more arrays
    return [].concat(...arrays);
};

// anagram
// return true if anagram
// 'elbow' === 'below'
const isAnagram = (str, str2) => {
    return formatStr(str) === formatStr(str2);
};

//helper function
const formatStr = str => {
    let regex = /[A-Z]/g;
    str.match(regex);
    return str
        .replace(/[^\w]/g, "")
        .toLowerCase()
        .split("")
        .sort()
        .join("");
};

// letter changes
const letterChanges = str => {
    let newStr = str.replace(/[a-z]/gi, char => {
        if (char === "z" || char === "Z") {
            return "a";
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });
    newStr = newStr.replace(/a|e|i|o|u/gi, vowel => {
        return vowel.toUpperCase;
    });
    return newStr;
};
console.log(letterChanges("mia"));
