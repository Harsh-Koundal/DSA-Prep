// Multiply Strings 

/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

#include <iostream>
#include <vector>
using namespace std;

string multiply(string num1, string num2) {
    if (num1 == "0" || num2 == "0") return "0";

    int n1 = num1.size();
    int n2 = num2.size();

    vector<int> result(n1 + n2, 0);

    // Multiply from right to left
    for (int i = n1 - 1; i >= 0; i--) {
        for (int j = n2 - 1; j >= 0; j--) {
            int mul = (num1[i] - '0') * (num2[j] - '0');
            int sum = mul + result[i + j + 1];

            result[i + j + 1] = sum % 10;
            result[i + j] += sum / 10;
        }
    }

    // Convert result to string
    string ans = "";
    int i = 0;

    // Skip leading zeros
    while (i < result.size() && result[i] == 0)
        i++;

    for (; i < result.size(); i++)
        ans.push_back(result[i] + '0');

    return ans;
}

int main() {
    string num1 = "2456436436", num2 = "343643645645";
    cout << multiply(num1, num2);
    return 0;
}