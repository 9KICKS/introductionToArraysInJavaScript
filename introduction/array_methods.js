let arr = [10, 30, 40, 50, 60, 90, 70];
let multipliedArr = [];
arr.forEach((value) => multipliedArr.push(value * 2));
console.log(arr);
console.log(multipliedArr);

let arr2 = [10, 30, 40, 50, 60, 90, 70];
let newArr = arr2.filter((value) => value > 30);
console.log(newArr);

let arr3 = [10, 30, 40, 50, 60, 90, 70];
let newArr2 = arr3.reduce((prev, curr) => prev + curr);
console.log(newArr2);

let arr4 = [10, 30, 40, 50, 60, 90, 70];
let newArr3 = arr4.filter(x => x > 40).reduce((prev, curr) => prev + curr);
console.log(newArr3);