function insertionSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[i] > arr[i + 1]){
                let temp = arr[i + 1]
                arr[i+1] = arr[i]
                arr[i] = temp
            }
        }
    }
    console.log(arr)
}

insertionSort([4,23,5,56,2,3])