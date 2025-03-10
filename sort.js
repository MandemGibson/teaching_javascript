function bubbleSort(arr) {
  let count = 0;

  console.time("Bubble Sort Runtime");

  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
      count++;
    }
    if (!swapped) break;
  }

  console.timeEnd("Bubble Sort Runtime");
  console.log("Sorted Array:", arr);
  console.log("Total comparisons/swaps attempted:", count);
}


function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  console.log(arr);
  console.time("Selection Sort Runtime");
  console.timeEnd("Selection Sort Runtime");
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  console.log(arr);
  console.time("Insertion Sort Runtime");
  console.timeEnd("Insertion Sort Runtime");
}

selectionSort([5, 3, 8, 4, 2, 0, 12, 1]);
bubbleSort([5, 3, 8, 4, 2, 0, 12, 1]);
insertionSort([5, 3, 8, 4, 2, 0, 12, 1]);
