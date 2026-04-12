// Valid Anagram

/*

Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

*/


/*

Example 1:

Input: s = "racecar", t = "carrace"

Output: true

*/

#include<iostream>
#include<vector>
using namespace std;

class Solution {
public:
    bool isAnagram(string s, string t) {
        if(s.length() != t.length()) return false;
       vector<int> freq(26,0);

       for(int i=0;i<s.length();i++){
        freq[s[i]-'a']++;
        freq[t[i]-'a']--;
       }

       for(int count : freq){
        if(count!=0) return false;
       }

       return true;
    }
};
