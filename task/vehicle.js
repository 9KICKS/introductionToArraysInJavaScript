// let array1 = [];
// array1.push("car");
// array1.push(2000);
// array1.push(["Toyota", "Nissan"]);
// console.table(array1);

// let array2 = [];
// array2.push("Truck");
// array2.push(500);
// array2.push(["Ford"]);
// console.table(array2);

// let array3 = [];
// array3.push("Bike");
// array3.push(6500);
// array3.push(["Honda"])
// console.table(array3);

let arrayCar = [["Car", 2000], ["Truck", 500], ["Bike", 6500], ["Scooter", 1500]];
console.log(arrayCar[0][0]);
arrayCar[0].push(["Toyota", "Nissan"]);
arrayCar[1].push(["Ford"]);
arrayCar[2].push(["Honda"]);
arrayCar[3].push(["Null"]);
console.table(arrayCar);
