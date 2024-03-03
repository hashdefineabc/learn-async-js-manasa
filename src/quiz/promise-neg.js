const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];
const promise0 = new Promise((resolve, reject) => {
    array2D[0].forEach((value) => {
        if (value < 0)
            resolve(array2D[0]);
    })
    reject(false);
});
const promise1 = new Promise((resolve, reject) => {
    array2D[1].forEach((value) => {
        if (value < 0)
            resolve(array2D[1]);
    })
    reject(false);
});
const promise2 = new Promise((resolve, reject) => {
    array2D[0].forEach((value) => {
        if (value < 0)
            resolve(array2D[2]);
    })
    reject(false);
});
Promise.any([promise0, promise1, promise2]).then((result)=>{
    console.log(result);
}).catch(error=>console.log(`Error: ${error}`));