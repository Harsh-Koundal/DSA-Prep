// Count Binary Substring

/*

Given a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

Substrings that occur multiple times are counted the number of times they occur.

*/

#include<iostream>
#include<string>
using namespace std;

int countBinarySubstrings(string s){
    int prevCount = 0;
    int currCount = 1;
    int result = 0;

    for(int i=1;i<s.length();i++){
        if(s[i] == s[i-1]){
            currCount++;
        }else { 
             result += min(prevCount,currCount);
             prevCount = currCount;
             currCount = 1;
        }
    }

    result += min(prevCount,currCount);

    return result;
}


int main(){
    string s = "00110011";

    cout << countBinarySubstrings(s);
    return 0;
}