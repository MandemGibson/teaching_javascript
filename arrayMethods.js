let nameArr = ["John", "Mane","James", "Benard"]

//map method
let res = nameArr.map((name, index)=> index + name)
console.log(res);

//filter method
let namesWithA = nameArr.filter((name) => name.includes("a"))
console.log(namesWithA)
