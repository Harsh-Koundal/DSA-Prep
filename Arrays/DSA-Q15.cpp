// Add Binary

/*

Given two binary strings A and B.
Return their sum as a binary string.
Example a = "11" , b = "1" 
Output  "100"

*/

#include<iostream>
#include<string>
#include<algorithm>
using namespace std;

string addBinary(string a, string b){
    int i = a.length() - 1;
    int j = b.length() - 1;
    int carry = 0;
    string result = "";
    
    while(i >= 0 || j >= 0 || carry){
        int sum = carry;
        
        if(i >= 0){
            sum += a[i] - '0';
            i--;
        }
        
        if(j >= 0){
            sum += b[j] - '0';
            j--;
        }
        
        result += (sum % 2) + '0';
        carry = sum / 2;
    }
    
    reverse(result.begin(), result.end());
    return result;
}

int main(){
    string a = "11";
    string b = "1";

    cout << addBinary(a,b);
    return 0;
}
