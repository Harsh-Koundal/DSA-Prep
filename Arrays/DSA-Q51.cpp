// Check if Strings Can be Made Equal With Operations I

/*

You are given two strings s1 and s2, both of length 4, consisting of lowercase English letters.

You can apply the following operation on any of the two strings any number of times:

Choose any two indices i and j such that j - i = 2, then swap the two characters at those indices in the string.
Return true if you can make the strings s1 and s2 equal, and false otherwise

*/

#include <iostream>
#include <vector>
using namespace std;

bool canBeEqual(string s1, string s2)
{
    swap(s1[0], s1[2]);
    if (s1 == s2)
        return true;
    swap(s1[1], s1[3]);
    if (s1 == s2)
        return true;
    swap(s1[0], s1[2]);
    if (s1 == s2)
        return true;
    swap(s1[1], s1[3]);
    if (s1 == s2)
        return true;
    swap(s1[0], s1[2]);
    if (s1 == s2)
        return true;

    return false;
}

int main(){
    string s1 = "abcd";
    string s2 = "cdab";
    cout << (canBeEqual(s1,s2)?"True":"False");
    return 0;
}