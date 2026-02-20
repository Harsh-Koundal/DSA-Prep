// Count the Number of Elements which are grater then x

#include<iostream>
#include<vector>
using namespace std;

int graterElementThenX(vector<int>& arr, int x){
    int count = 0;

    for(int i=0;i<arr.size();i++){
        if(arr[i] > x) count ++;
    }
    return count;
}

int main(){
    vector<int> arr = {10,20,30,2,4,60};
    int x = 10;
    cout << graterElementThenX(arr,x);
    return 0;
}