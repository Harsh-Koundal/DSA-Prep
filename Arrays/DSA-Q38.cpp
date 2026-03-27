#include<iostream>
#include<vector>
using namespace std;

int maxWater(vector<int>& arr){
    int left =0;
    int right = arr.size()-1;
    int res=0;

    while(left<right){
        int water = min(arr[left],arr[right]) *  (right-left);

        res = max(res,water);

        if(arr[left] < arr[right])
        left++;
        else 
        right--;

    }
    return res;
}

int main(){
    vector<int> arr = {1,5,4,3};
    cout << maxWater(arr);
    return 0;
}