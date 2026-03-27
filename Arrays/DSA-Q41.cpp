#include<iostream>
#include<vector>
using namespace std;

int maxProduct(vector<int>& nums){
    int maxEnding = nums[0];
    int minEnding = nums[0];
    int res = nums[0];

    for(int i=1;i<nums.size();i++){
        if(nums[i]<0)
        swap(maxEnding,minEnding);

        maxEnding = max(nums[i], maxEnding * nums[i]);
        minEnding = min(nums[i],minEnding * nums[i]);

        res = max(res,maxEnding);
    }

    return res;
}

int main(){
    vector<int> nums = {2,3,-2,4};
    cout << maxProduct(nums);
    return 0;
}