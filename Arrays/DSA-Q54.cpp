// Best Day to Buy and Sell the Stocks 

#include<iostream>
#include<vector>
using namespace std;

vector<int> bestDayToBuySellStocks(vector<int>& arr){
    int minPrice = arr[0];
    int minDay = 0;
    int maxProfit = 0;
    int buyDay = 0;
    int sellDay = 0;

    for(int i=0;i<arr.size();i++){
        if(arr[i]<minPrice){
            minPrice = arr[i];
            minDay = i;
        }
    int profit = arr[i] - minPrice;

    if(profit > maxProfit){
        maxProfit = profit;
        buyDay = minDay;
        sellDay = i;
    }
    }
    return {
        maxProfit,
        buyDay,
        sellDay,
    };
}


int main(){
    vector<int> arr = {8,3,2,5,1,5,9};
    for(int x : bestDayToBuySellStocks(arr))
    cout << x << " ";

    return 0;
}