// Reverse Integers

/*

Given a signed 32-bit integer x, return x with its digits reversed.
if reversing x causes the vallue to go outside the signed 32-bit integer range [-2,2,1], then return 0.

*/

#include<iostream>
#include<climits>
using namespace std;

int reverse(int x){
    int result = 0;

    while(x != 0){
        int pop = x%10;
        x/=10;

        if(result > INT_MAX/10 || (result == INT_MAX/10 && pop > 7))
        return 0;

        if(result < INT_MIN/10 || (result == INT_MIN/10 && pop < -8))
        return 0;

        result = result * 10 + pop;
    }
    return result;
}

int main(){
    int x = 123;
    cout << reverse(x);
    return 0;
}