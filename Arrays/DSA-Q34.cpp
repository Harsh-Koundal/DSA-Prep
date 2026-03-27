#include<iostream>
#include<vector>
#include<unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& arr,int target){
    unordered_map<int,int> mp;
    for(int i=0;i<arr.size();i++){
        int diff =  target - arr[i];

        if(mp.find(diff) != mp.end()){
            return {mp[diff],i};
        }
        mp[arr[i]] = i;
    }
    return {};
}

int main(){
    vector<int> arr = {0,-1,2,-3,1};
    int target = -2;
    for(int x : twoSum(arr,target))
    cout << x << " ";

    return 0;
}