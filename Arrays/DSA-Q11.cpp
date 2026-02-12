//  Longest Balanced Substring I

/*

Your are given a string s consisting of lowercase English letters.

A substring of s is called balanced if all distinct characters in the substring appear the same number of times.

Return the length of the longest balanced substring of s.

*/

#include<iostream>
#include<unordered_map>
using namespace std;

int longestBalanced(string s){
    int n = s.length();
    int maxLen=0;

    for(int i=0;i<n;i++){
        unordered_map<char,int> freq;
        int maxFreq=0;

        for(int j=i;j<n;j++){
            freq[s[j]]++;
            maxFreq = max(maxFreq,freq[s[j]]);

            int length = j-i+1;
            int distinct = freq.size();

            if(maxFreq* distinct == length){
                maxLen = max(maxLen,length);
            }
        }
    }
    return maxLen;
}

int main(){
    string s = "abbac";
    cout << longestBalanced(s);

    return 0;
}

