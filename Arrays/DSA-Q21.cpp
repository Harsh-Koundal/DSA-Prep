// Find Second Largest in Array 

#include<iostream>
#include<vector>
#include<climits>
using namespace std;

int secondLargest(vector<int>& arr){
    int mx = INT_MIN;
    int smx = INT_MIN;
    for(int i=0;i<arr.size();i++){
        if(mx < arr[i]) mx = arr[i];
    }
    for(int i=0;i<arr.size();i++){
        if(smx < arr[i] && arr[i] != mx) smx = arr[i];
    }
    return smx;
}

int main(){
    vector<int> arr = {10,20,30,2,4,60};
    cout << secondLargest(arr);
    return 0;
}