// Palindrome String

/*
Given a string s, the task is to check if it is palindrome or not.
*/

#include <iostream>
#include <vector>
#include<algorithm>
using namespace std;

int isPalindrome(string s){
   return s == string(s.rbegin(),s.rend()) ? 1 : 0;
}

int main(){
    string s = "abba";
    cout << (isPalindrome(s)?"true":"false");
    return 0;
}
