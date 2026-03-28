// Find Peak Element 

/*

given a 0-indexed integer array nums, find a peak element and return its index. if the array contains multiplle peaks, return the index to any of the peaks.

you must write an algorithm that runs in O(log n) time.

*/


#include<iostream>
#include<vector>
using namespace std;

int finndPeakElement(vector<int>& nums){
    int left = 0;
    int right = nums.size();

    while(left < right){
        int mid = left + (right-left)/2;

        if(nums[mid] < nums[mid+1])
        left = mid + 1;
        else right = mid;
    }
    return left;
}

int main(){
    vector<int> nums = {1,2,3,1};
    cout << finndPeakElement(nums);
    return 0;
}