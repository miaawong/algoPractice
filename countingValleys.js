// count how many valleys Gary walked through his hike
// n = number of steps
// s = single string, of n characters that describe his path

function countingValleys(n, s) {
    let valleys = 0;
    let level = 0;
    let arr = s.split("");
    arr.forEach(direction => {
        // if it is U, level++
        if (direction === "U") {
            level++;
            // if it is up, and level is equal to zero, (which means that they have resurfaced from a valley), valley++
            if (level === 0) {
                valleys++;
            }
            // or else, meaning that they are going down
        } else {
            level -= 1;
        }
    });
    return console.log(valleys);
}

countingValleys(8, "UDDDUDUU");
