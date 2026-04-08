#include<iostream>
#include<vector>
#include<unordered_map>
using namespace std;


vector<int> twoSum(vector<int>& nums,int target){
    unordered_map<int,int> map;
    for(int i=0;i<nums.size();i++){
        int diff = nums[i] - target;

        if(map.find(diff) != map.end()){
            return  {map[diff],i};
        }
        map[nums[diff],i] = i;
    }
    return {};
}

int  main(){
    vector<int> nums = {0, -1, 2, -3, 1};
    int target = -2;
    for(int x : twoSum(nums,target))
    cout << x << " ";

    return 0;
}