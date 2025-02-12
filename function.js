function addNumbers(x,y){
    return x + y
}

let sum = addNumbers(3,6)
console.log(sum)

function person({name, age}){
    console.log(`My name is ${name} and I am ${age}`);
}

//a function that calls another function
function callPerson(){
    person({name: 'John', age: 30})
}