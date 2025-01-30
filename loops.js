const arr = [1,2,3,4]

//print indices
for(const num in arr){
    console.log(num);  
}

//print values
for(const num of arr){
    console.log(num);
    
}

//print values
for(let i = 0; i < arr.length; i++){
  console.log("number ",arr[i])
}

//print values
arr.forEach((num)=> console.log(num))