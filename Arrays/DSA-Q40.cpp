#include<iostream>
#include<vector>
#include<unordered_map>
using namespace std;

int findDuplicate(vector<int>& nums){
    unordered_map<int,int> freq;
    for(int i=0;i<nums.size();i++){
        freq[nums[i]]++;
        if(freq[nums[i]] > 1){
            return nums[i];
        }
    }
    return -1;
}

int main(){
    vector<int> nums = {1,3,4,2,2};
    cout << findDuplicate(nums);
    return 0;
}