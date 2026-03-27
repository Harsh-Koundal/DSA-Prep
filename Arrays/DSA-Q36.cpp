#include<iostream>
#include<vector>
#include<unordered_map>
using namespace std;

vector<int> productArray(vector<int>& arr){
    int n = arr.size();
    vector<int> res(n,1);

    int prefix = 1;
    for(int i=0;i<n;i++){
        res[i] = prefix;
        prefix *= arr[i];
    }

    int suffix = 1;
    for(int i=n-1;i>=0;i--){
        res[i] *= suffix;
        suffix *= arr[i];
    }

    return res;
}

int main(){
    vector<int> arr = {10,3,5,6,2};
    for(int x : productArray(arr))
    cout << x << " ";

    return 0;
}