function partition(arr, low, high){
    let pivot = arr[high];
    let i = low - 1;
    
    for(let j=low; j<high; j++){
        if(arr[j] < pivot){
            i++
            [arr[j], arr[high]] = [arr[high], arr[j]]
        }
    }
    [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
    return i+1;
}

function quickSort(arr, low=0, high=arr.length-1){
    let pivotPoint = partition(arr, low, high);
    return quickSort(arr, low, pivotPoint-1)
    return quickSort(arr, pivotPoint+1, high)
}

console.log(quickSort([4,3,2,1]))