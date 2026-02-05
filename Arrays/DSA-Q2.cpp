// Longest Substring Without Repeating Characters

/*
Given a string s, find the length of the longest substring without duplicate characters.
*/

#include<iostream>
#include<vector>
#include<unordered_map>
using namespace std;

int lengthOfLongestSubstring(string s){
    unordered_map<char,int> lastSeen;
    int left =0;
    int maxLen = 0;

    for(int right=0;right<s.length();right++){
        if(lastSeen.count(s[right])){
            left = max(left,lastSeen[s[right]] +1);
        }

        lastSeen[s[right]] = right;
        maxLen = max(maxLen,right-left+1);
    }
    return maxLen;
}

int main(){
    string s = "abcabcbb";

    cout << lengthOfLongestSubstring(s);

    return 0;
}