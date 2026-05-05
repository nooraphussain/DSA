function bubbleSort(arr){
    let n = arr.length;
    let swapped;

    for(let i=0; i<n-1; i++){
        swapped = false;

        for(let j=0; j<n-i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true;
            }
        }

        if(!swapped) break;
    }
    return arr;
}

let array = [43,79,12,34,5,77,17,49]
console.log(bubbleSort(array))
