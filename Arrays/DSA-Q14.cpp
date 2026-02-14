// Divide an Array into Subarrays With Minimum Cost I

/*

You are given an array of integers nums of length n.

The cost of an array is the value of its first element. For example, the cost of [1,2,3] is 1 while the cost of [3,4,1] is 3.

You need to divide nums into 3 disjoint contiguous subarrays.

Return the minimum possible sum of the cost of these subarrays.

*/

#include<iostream>
#include<vector>
#include<climits>
using namespace std;

//           O(n^2)

/*int minimumCost(vector<int>& nums){
     int totalCost = INT_MAX;
     int n = nums.size();
     int currentCost = 0;
    
     for(int i=1;i<n;i++){
        for(int j=i+1;j<n;j++){
            currentCost = nums[0] + nums[i] + nums[j];
            totalCost = min(totalCost,currentCost);
        }
     }
     return totalCost;
}*/

//            O(n)

int minimumCost(vector<int>& nums){
    int first = nums[0];
    int smallest = INT_MAX;
    int secondSmallest = INT_MAX;

    for(int i=1;i<nums.size();i++){
        if(nums[i] < smallest){
            smallest = nums[i];
        }
        else if(nums[i] < secondSmallest){
            secondSmallest = nums[i];
        }
    }

    return nums[0] + smallest + secondSmallest;
}

int main(){
    vector<int> nums = {1,2,3,12};
    cout << minimumCost(nums);

    return 0;
}