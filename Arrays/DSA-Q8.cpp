// Expressive Words

/*
Sometimes people repeat letters to represent extra feeling. For example:

"hello" -> "heeellooo"
"hi" -> "hiiii"

In these strings like "heeellooo", we have groups of adjacent letters that are all the same: "h", "eee", "ll", "ooo".

You are given a string s and an array of query strings words. A query word is stretchy if it can be made to be equal to s by any number of applications of the following extension operation: choose a group consisting of characters c, and add some number of characters c to the group so that the size of the group is three or more.

For example, starting with "hello", we could do an extension on the group "o" to get "hellooo", but we cannot get "helloo" since the group "oo" has a size less than three. Also, we could do another extension like "ll" -> "lllll" to get "helllllooo". If s = "helllllooo", then the query word "hello" would be stretchy because of these two extension operations: query = "hello" -> "hellooo" -> "helllllooo" = s.

Return the number of query strings that are stretchy.

*/

#include<iostream>
#include<vector>
using namespace std;

int isStretchy(string s, string word) {
    int i = 0, j = 0;

    while (i < s.length() && j < word.length()) {

        // Characters must match
        if (s[i] != word[j]) return false;

        // Count group in s
        int iStart = i;
        while (i < s.length() && s[i] == s[iStart]) i++;
        int lenS = i - iStart;

        // Count group in word
        int jStart = j;
        while (j < word.length() && word[j] == word[jStart]) j++;
        int lenW = j - jStart;

        // Rules
        if (lenS < 3) {
            if (lenS != lenW) return false;
        } else {
            if (lenW > lenS) return false;
        }
    }

    // Both strings must be fully used
    return i == s.length() && j == word.length();
}

int expressiveWords(string s, vector<string>& words) {
    int count = 0;
    for (string word : words) {
        if (isStretchy(s, word)) count++;
    }
    return count;
}


int main(){
    string s = "heeellooo";
    vector<string> words = {"hello","hi","helo"};

    cout << expressiveWords(s,words);
    return 0;
}