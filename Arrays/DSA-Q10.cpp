// Longest Balanced Subarray I

/*

You are given an integer array nums

A subarray is called balanced if the number of distinct even numberes in the subarray is equal to the number of distinct odd numbers.

Return the length of the longest balanced subarray.

*/

#include<iostream>
#include<vector>
#include<unordered_set>
using namespace std;

int longestBalanced(vector<int>& nums){
    int maxLen = 0;

    for(int i=0;i<nums.size();i++){
        unordered_set<int> evenSet;
        unordered_set<int> oddSet;

        for(int j=i;j<nums.size();j++){

            if(nums[j]%2==0) evenSet.insert(nums[j]);
            else oddSet.insert(nums[j]);

            if(evenSet.size() == oddSet.size())
            maxLen = max(maxLen,j-i+1);
        }
    }
    return maxLen;
}

int main(){
    vector<int> nums = {2,5,4,3};

    cout << longestBalanced(nums);
    return 0;
}
