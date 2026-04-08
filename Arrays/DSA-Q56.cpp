#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

bool hasDuplicate(vector<int> &nums)
{
    unordered_set<int> seen;

    for (int num : nums)
    {
        if (seen.find(num) != seen.end())
        {
            return true;
        }
        seen.insert(num);
        
    }
    return false;
}

int main()
{
    vector<int> nums = {1, 2, 3, 3};
    cout << (hasDuplicate(nums) ? "true" : "false");

    return 0;
}