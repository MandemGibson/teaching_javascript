let nameArr = ["John", "Mane", "James", "Benard"];
let numArr = [1, 2, 3, 4, 5];

//map method
let res = nameArr.map((name, index) => index + name);
console.log(res);

//filter method
let namesWithA = nameArr.filter((name) => name.includes("a"));
console.log(namesWithA);

//reduce method
let sum = numArr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
