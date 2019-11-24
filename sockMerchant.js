// john works at a clothing store and has a large pile of socks that he must pair by color for sale.
// given an array of integers representing the color of each sock,
// determine how many pairs of socks with matching colors there are

// array.sort, sorts the elements of an array in place and returns the sorted array.

const sortAndCount = (n, arr) => {
    // sort the list to be in numerical order
    let sorted = arr.sort();
    let pairs = 0;

    for (let i = 0; i < n - 1; i++) {
        // if the first item in the array is equal to the second item, then pairs++, and next index.
        if (sorted[i] === sorted[i + 1]) {
            pairs++;
            i++;
        }
    }
    return console.log(pairs);
};

sortAndCount(7, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
