// Best Time to Buy and Sell Stock

/*

You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

*/

/*

Input: prices = [10,1,5,6,7,1]

Output: 6

*/

#include<iostream>
#include<vector>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minPrice =prices[0];
        int maxProfit = 0;

        for(int i=0;i<prices.size();i++){
            int profit = prices[i] - minPrice;
            minPrice = min(prices[i],minPrice);
            maxProfit = max(profit , maxProfit);
        }
        return maxProfit;
    }
};
