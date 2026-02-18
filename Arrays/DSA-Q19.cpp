// Binary Number With Alternating Bits

/*

Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

Example :

Input: n = 5
Output: true
Explanation: The binary representation of 5 is: 101

*/

#include<iostream>
using namespace std;

bool hasAlternatingBits(int n){
    int prev  = n & 1;
    n = n >> 1;

    while(n > 0){
        int curr = n & 1;

        if(curr == prev) return false;

        prev = curr;
        
        n = n >> 1;
    }

    return true;

}

int main(){
    int n = 5;
    
    cout << (hasAlternatingBits(n)?"True":"False");
    return 0;
}