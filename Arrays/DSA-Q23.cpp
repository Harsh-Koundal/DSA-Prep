// Duplicate Zero

/*

Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

*/

#include<iostream>
#include<vector>
using namespace std;

// vector<int> duplicateZeros(vector<int>& arr){
//     int n = arr.size();
//     vector<int> res;

//     for(int i=0;i<n;i++){
//         if(arr[i]==0) res.push_back(0);
//         res.push_back(arr[i]);
//     }
//     res.resize(n);
//     return res;
// }

void duplicateZeros(vector<int> & arr){
    int n = arr.size();
    int zeros = 0;

    for(int i=0;i<n;i++){
        if(arr[i] == 0)
        zeros++;
    }

    int i = n-1;
    int j = n+zeros - 1;

    while(i>=0){
        if(j<n)
        arr[j] = arr[i];

        if(arr[i]==0){
            j--;
            if(j<n)
            arr[j]=0;
        }
        i--;
        j--;
    }
}

int main(){
    vector<int> arr = {1,0,2,3,0,4,5,0};
    return 0;
}