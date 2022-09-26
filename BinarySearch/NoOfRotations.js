//https://www.geeksforgeeks.org/find-rotation-count-rotated-sorted-array/


function noOfRotations(arr,start,end) {

    if(start > end) return 0;

    let mid = Math.floor(start + (end - start) / 2);
    

    if( arr[mid] < arr[mid - 1]) return mid;

    if(arr[mid + 1] < arr[mid]) return mid + 1;

    if(arr[mid] < arr[start]){
        return noOfRotations(arr,start,mid - 1)
    }else {
        return noOfRotations(arr,mid + 1,end)
    }

}

//Input: 
//const arr = [15, 18, 2, 3, 6, 12]
//Output: 2
//Explanation: Initial array must be {2, 3, 6, 12, 15, 18}. 
//We get the given array after rotating the initial array twice.

//Input: 
const arr = [7, 9, 11, 12, 18]
//Output: 4

console.log(noOfRotations(arr,0,arr.length - 1));