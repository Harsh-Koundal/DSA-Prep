#include<iostream>
#include<vector>
using namespace std;

int maxWater(vector<int>& arr){
    int maxHeight = 0;
    for(int i =0;i<arr.size();i++)
    maxHeight = max(maxHeight,arr[i]);

    int res = 0;
    for(int i=0;i<arr.size();i++){
        
    }
}

int main(){
    vector<int> arr = {3,0,1,0,4,0,2};
    cout << maxWater(arr);
    return 0;
}