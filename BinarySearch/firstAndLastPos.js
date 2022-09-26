//leet code 34

var searchRange = function(nums, target) {
    return [getFirst(nums,target),getLast(nums,target)];
};

function getFirst(nums,target){
    let start = 0,end = nums.length, ans = -1;
    while(start <= end) {
        let mid = Math.floor(start + (end - start)/2);
        if(nums[mid] === target){
            ans = mid;
            end = mid - 1;
        }else if(nums[mid] > target){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return ans;
}

function getLast(nums,target){
    let start = 0,end = nums.length, ans = -1;
    while(start <= end) {
        let mid = Math.floor(start + (end - start)/2);
        if(nums[mid] === target){
            ans = mid;
            start = mid + 1;
        }else if(nums[mid] > target){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return ans;
}




//Input: 
const nums = [5,7,7,8,8,10], target = 6
//Output: [3,4]
//Input: nums = [5,7,7,8,8,10], target = 6
//Output: [-1,-1]

console.log(searchRange(nums,target))