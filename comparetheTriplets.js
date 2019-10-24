function compareTriplets(a, b) {
    // let aPoint = 0;
    // let bPoint = 0;
    // for (let aI = 0; aI < a.length; aI++) {
    //     for (let bI = aI; bI < b.length; bI++) {
    //         if (a[aI] > b[bI]) {
    //             aPoint += 1;
    //         } else if (b[bI] > a[bI]) {
    //             bPoint += 1;
    //         } else if ((a[aI] = b[bI])) {
    //             aPoint += 0;
    //             bPoint += 0;
    //             break;
    //         }
    //     }
    //     return [aPoint, bPoint];
    // }
    let score = [0, 0];
    for (let i = 0; i < a.length; i++) {
        a[i] > b[i] ? score[0]++ : b[i] > a[i] ? score[1]++ : "";
    }
    console.log(score);
}

compareTriplets([5, 6, 7], [3, 6, 10]);
