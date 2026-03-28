// Longest Substring Without Repeating Characters 

/*
Given a string s, find the length of the longest substring without duplicate characters.
*/

#include <iostream>
#include <vector>
#include<unordered_map>
using namespace std;

int longestSubstring(string s){
    unordered_map<char,int> lastSeen;
    int j = 0;
    int maxLen = 0;
    for(int i=0;i<s.length();i++){
        if(lastSeen.count(s[i])){
            j = max(j,lastSeen[s[i]]);
        }

        lastSeen[s[i]] = i;
        maxLen = max(maxLen,i-j+1);
    }
    return maxLen;
}

int main(){
    string s = "abcabcbb";
    cout << longestSubstring(s);
    return 0;
}
