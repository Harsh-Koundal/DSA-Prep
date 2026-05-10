#include<iostream>
#include<vector>
#include<unordered_set>
#include<unordered_map>
#include<algorithm>
#include<climits>
using namespace std;

// int findMax(vector<int>& nums){
//     if(nums.size()==0) return -1;
//     int maxEl = nums[0];
//     for(int i=1;i<nums.size();i++){
//         maxEl = max(nums[i],maxEl);
//     }
//     return maxEl;
// }

// int secondMax(vector<int>& nums){
//     if(nums.size()<2) return -1;
//     int maxEl = INT_MIN;
//     int secondMax = INT_MIN;
//     for(int i=0;i<nums.size();i++){
//         if(maxEl < nums[i]){
//             secondMax = maxEl;
//             maxEl = nums[i];
//         }
//         else if(nums[i] > secondMax && nums[i] != maxEl)
//         secondMax = nums[i];
//     }
//     return secondMax;
// }

// bool isArraySorted(vector<int>& nums){
//     for(int i=0;i<nums.size()-1;i++){
//         if(nums[i+1]<nums[i])
//         return false;
//     }
//     return true;
// }

// vector<int> removeDuplicate(vector<int>& nums){
//     if(nums.empty()) return {};
//     sort(nums.begin(),nums.end());
//     int i = 0;
//     for(int j=1;j<nums.size();j++){
//         if(nums[i]!=nums[j]){
//             i++;
//             nums[i] = nums[j];
//         }
//     }
//     nums.resize(i+1);
//     return nums;
// }

// vector<int> moveAllZeroToLast(vector<int>& nums){
//     int i=0;
//     for(int j=0;j<nums.size();j++){
//         if(nums[j] != 0){
//             swap(nums[i],nums[j]);
//             i++;
//         }
//     }
//     return nums;
// }

// int findMissing(vector<int>& nums){
//     int n = nums.size()+1;
//     int sum = n*(n+1)/2;
//     int actualSum = 0;
//     for(int i=0;i<n-1;i++){
//         actualSum += nums[i];
//     }
//     return sum-actualSum;
// }

// vector<int> twoSum(vector<int>&nums , int target){
//     unordered_map<int,int> mp;
//     for(int i=0;i<nums.size();i++){
//         int diff = target - nums[i];
//         if(mp.find(diff) != mp.end()){
//             return {mp[diff],i};
//         }
//         mp[nums[i]] = i;
//     }
//     return {};
// }

// int maximumSubArray(vector<int>& nums){
//     int maxSub = 0;
//     int currentSub = 0;
//     for(int i=0;i<nums.size();i++){
//         currentSub = max(nums[i],currentSub+nums[i]);
//         maxSub = max(currentSub,maxSub);
//     }
//     return maxSub;
// }

// vector<int> maxSub(vector<int>& nums){
//     int maxS = nums[0];
//     int current = nums[0];
//     int start = 0;
//     int bestStart = 0, bestEnd = 0;
//     vector<int> maxSubArr;
//     for(int i=1;i<nums.size();i++){
//         if(nums[i] > nums[i]+current){
//             current = nums[i];
//             start = i;
//         }else{
//             current += nums[i];
//         }
//         if(current > maxS){
//             maxS = current;
//             bestStart = start;
//             bestEnd = i;
//         }
//     }
//     for(int i=bestStart;i<=bestEnd;i++){
//         maxSubArr.push_back(nums[i]);
//     }
//     return maxSubArr;
// }

// int longestSubarrayWithSumK(vector<int>& nums,int k){
//     unordered_map<int,int> mp;
//     int sum = 0,maxLen = 0;
//     for(int i=0;i<nums.size();i++){
//         sum += nums[i];
//         if(sum == k) maxLen = i+1;
//         if(mp.find(sum-k) != mp.end()){
//             maxLen = max(maxLen,i-mp[sum-k]);
//         }
//         if(mp.find(sum) == mp.end()){
//             mp[sum] = i;
//         }
//     }
//     return maxLen;
// }

int main(){
    vector<int> nums = {1,2,3,1,1,1,1};
    int k = 3;

    nums.erase(nums.begin()+1);
    for(auto x : nums)
    cout << x << " ";

    return 0;
}