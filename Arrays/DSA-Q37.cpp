#include<iostream>
#include<vector>
using namespace std;

int maximumSubarraySum(vector<int>& arr){
    int res = arr[0];
    int maxEnding = 0;

    for(int i=1;i<arr.size();i++){
        
        maxEnding = max(arr[i], maxEnding+arr[i]);
        res = max(res,maxEnding);
    }
    return res;
}

int main(){
    vector<int> arr = {2,3,-8,7,-1,2,3};
    cout << maximumSubarraySum(arr);
    return 0;
}