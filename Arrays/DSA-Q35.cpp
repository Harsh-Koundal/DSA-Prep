#include<iostream>
#include<vector>
#include<unordered_map>
#include<algorithm>
using namespace std;

int bestProfit(vector<int>& arr){
    int minPrice = arr[0];
    int maxProfit = 0;

    for(int i=0;i<arr.size();i++){
        int profit = arr[i] - minPrice;
        
        maxProfit = max(maxProfit,profit);
        minPrice = min(minPrice,arr[i]);
    }
    return maxProfit;
}

int main(){
    vector<int> arr = {7,10,1,3,6,9,2};
    cout << bestProfit(arr);
    return 0;
}