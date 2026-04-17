const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubArray(arr){
    let maxSum = arr[0];
    let currentSum = arr[0];
    for(let i=1;i<arr.length;i++){
        currentSum = Math.max(arr[i],currentSum+arr[i]);
        maxSum =Math.max(currentSum,maxSum);
        
    }
    return maxSum;
}
console.log(maxSubArray(arr));



const n = 7;
let ans = 7%2==0

console.log(ans?"even":"odd")
