#include<iostream>
#include<vector>
#include<unordered_map>
#include<stack>
#include<cmath>
using namespace std;

vector<int> twoSum(vector<int>& nums,int target){
    unordered_map<int,int> mp;
    for(int i=0;i<nums.size();i++){
        int diff = target - nums[i];

        if(mp.find(diff) != mp.end()){
            return {mp[diff],i};
        }
        mp[nums[i]] = i;
    }
    return {};
}

int bestProfit(vector<int>& nums){
    int minPrice = nums[0];
    int maxProfit = 0;

    for(int i=0;i<nums.size();i++){
        int profit = nums[i] - minPrice;
        
        maxProfit = max(maxProfit,profit);
        minPrice = min(minPrice,nums[i]);
    }
    return maxProfit;
}

vector<int> productArrayExceptSelf(vector<int>& nums){
    int n = nums.size();
    vector<int> res(n,1);

    int prefix = 1;
    for(int i=0;i<n;i++){
        res[i] = prefix;
        prefix *= nums[i]; 
    }

    int suffix = 1;
    for(int i=n-1;i>=0;i--){
        res[i] *= suffix;
        suffix *= nums[i];
    }

    return res;
}

int maximumSubArray(vector<int>& nums){
    int res = nums[0];
    int maxEnding = nums[0];

    for(int i=0;i<nums.size();i++){
        maxEnding = max(nums[i],nums[i]+maxEnding);

        res = max(res,maxEnding);
    }

   return res;
}

int maxWater(vector<int>& nums){
    int res = 0;
    int left = 0;
    int right = nums.size()-1;

    while(left<right){
        int water = min(nums[left],nums[right]) * (right-left);

        res = max(res,water);

        if(nums[left] < nums[right])
        left++;
        else 
        right--;
    }

    return res;
}

int trapWater(vector<int>& arr){
    int res = 0;

    for(int i=1;i<arr.size()-1;i++){
        int left = arr[i];
        for(int j = 0;j<i;j++){
            left = max(left,arr[j]);
        }

        int right = arr[i];
        for(int j = i+1;j<arr.size();j++)
        right = max(right,arr[j]);

        res += (min(left,right) - arr[i]);
    }
    return res;
}

int findMissing(vector<int>& nums){
    int n = nums.size()+1;
    int sum = n*(n+1)/2; // 5 * 6 /2 = 15
    int actualSum = 0;
    for(int i=0;i<nums.size();i++){
        actualSum += nums[i];
    }
    return sum - actualSum;
}

int binarySearch(vector<int>& nums, int target){
    int left = 0;
    int right = nums.size()-1;
    while(left<=right){
        int mid = left+floor((right-left)/2);

        if(nums[mid] == target)
        return mid;

        if(nums[mid] < target)
        left = mid + 1;
        else 
        right = mid - 1;
    }
    return -1; 
}

int main(){
    vector<int> nums = {1,2,4,6,9,12,34,65,87};
    int target = 9;
    for(int x : twoSum(nums,target))
    cout << x << " ";
    cout << endl;
    cout << bestProfit(nums) << endl;
    
    for(int x : productArrayExceptSelf(nums))
    cout << x << " ";

    cout <<endl;

    cout << maximumSubArray(nums) << endl;
 
    cout << maxWater(nums) << endl;

    cout << trapWater(nums) << endl;

    cout << findMissing(nums) << endl;

    cout << binarySearch(nums,target) << endl;
    return 0;
}