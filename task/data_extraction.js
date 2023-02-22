// let array = [[200, 50, 300, 5], [10, 25, 7, 100], [25, 20, 70, 45], [500, 170, 11, 35]];
// function findValues(array, row, start, end) {
//     if (start < 0) {
//         console.log("Invalid");
//       }
//   let values = [];
//   for (let i = start; i <= end; i++) {
//     values.push(array[row][i]);
//   }
//   return values;
// }
// let result = findValues(array, 1, 0, 2);
// console.log(result);

let array = [[200, 50, 300, 5], [10, 25, 7, 100], [25, 20, 70, 45], [500, 170, 11, 35]];
console.table(array);
let row = 1;
let start = 0;
let end = 2;
let result = '';
for(let i = 0; i < array.length; i++) {
    if(row < 0 || row > 4 || start > array[i].length || start < 0 || end > array[i].length) {
        console.log("Index out of bound");
    }
    else {
        result = array[row].slice(start, end + 1);
    }
}
console.log(result);