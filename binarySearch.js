function binarySearch(arr, target){
    let left = 0;
    let right = arr.length-1;

    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid] === target) return mid;
        
        if(arr[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch([1,3,5,7,1,9,11,15], 9)); //5


function recursiveBinarySearch(arr, target, left = 0, right = arr.length -1){
    if(left>right) return -1;

    const mid = Math.floor((left+right)/2);

    if(arr[mid] === target) return mid;
    if(arr[mid] > target){
        return recursiveBinarySearch(arr, target, left, mid -1)
    }else{
        return recursiveBinarySearch(arr, target, mid+1, right)
    }
}


const arr = [2, 5, 8, 12, 16, 23, 38];

console.log(recursiveBinarySearch(arr, 16)); // 4
console.log(recursiveBinarySearch(arr, 10)); // -1