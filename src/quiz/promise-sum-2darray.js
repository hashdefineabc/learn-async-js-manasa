const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const promise0 = new Promise((resolve, reject) => {
    let sum = 0;
    array2D[0].forEach(num=>sum+=num);
    resolve(sum);
});
const promise1 = new Promise((resolve, reject) => {
    let sum = 0;
    array2D[1].forEach(num=>sum+=num);
    resolve(sum);
});
const promise2 = new Promise((resolve, reject) => {
    let sum = 0;
    array2D[2].forEach(num=>sum+=num);
    resolve(sum);
});

Promise.all([promise0, promise1, promise2]).then((response) => {
    sum = 0;
    response.forEach(num=>sum+=num);
    console.log(response);
}).catch(error=>console.log(`Error:${error}`));