// Emma cannot jump on clouds if they are numbered 1
// print how many jumps needed to win the game

const jumpingClouds = arr => {
    //first solution, doesn't work for all test cases
    // let jumps = 0;
    // for (let i = 0; i <= arr.length; i++) {
    //     if (arr[i] === 1) {
    //         i++;
    //     } else {
    //         jumps++;
    //     }
    // }
    // return console.log(jumps);

    //second solution

    let jumps = 0;
    let i = 0;
    while (i < arr.length - 1) {
        console.log("i = " + i);
        if (arr[i + 2] === 0) {
            console.log("arr" + arr[i + 2]);
            i = i + 2;
        } else {
            i++;
        }
        console.log("jumps = " + jumps);
        jumps++;
    }
    return console.log(jumps);
};

jumpingClouds([0, 0, 0, 1, 0, 0]);
