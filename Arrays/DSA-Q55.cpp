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