// Letter Combinations of a Phone Number

/*

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

*/

/*

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

*/
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

void backtrack(string &digits, int index, string &current,
               vector<string> &result,
               unordered_map<char, string> &map);

vector<string> letterCombinations(string digits)
{
    if (digits.empty())
        return {};

    unordered_map<char, string> map = {
        {'2', "abc"},
        {'3', "def"},
        {'4', "ghi"},
        {'5', "jkl"},
        {'6', "mno"},
        {'7', "pqrs"},
        {'8', "tuv"},
        {'9', "wxyz"}
    };

    vector<string> result;
    string current = "";

    backtrack(digits, 0, current, result, map);

    return result;
}

void backtrack(string &digits, int index, string &current,
               vector<string> &result,
               unordered_map<char, string> &map)
{
    if (index == digits.size()) {
        result.push_back(current);
        return;
    }

    string letters = map[digits[index]];

    for (char ch : letters) {
        current.push_back(ch);
        backtrack(digits, index + 1, current, result, map);
        current.pop_back();
    }
}

int main()
{
    string digits = "23";

    for (string s : letterCombinations(digits))
        cout << s << " ";

    return 0;
}