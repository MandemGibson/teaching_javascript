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

//forEach method
numArr.forEach((num) => console.log(num * 2))

//concat
let concatenatedRes = numArr.concat(nameArr)
console.log(concatenatedRes)

//split
for (user of nameArr){
    console.log(user.split())
}

//sort in descending order
const desc = numArr.sort((a, b) => b - a)
console.log(desc);

//sort in ascending order
const asc = numArr.sort((a, b) => a - b)
console.log(asc);

