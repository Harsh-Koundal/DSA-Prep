// Check is Valid Parenthisis

#include<iostream>
#include<vector>
#include<unordered_map>
using namespace std;

bool isValid(string s){
    vector<char> stack;
    unordered_map<char,char> map = {
        {')','('},
        {'}','{'},
        {']','['},

    };

    for(char ch : s){
        if(ch == '(' || ch == '{' || ch == '['){
            stack.push_back(ch);
        }else{
            if(stack.empty() || stack.back() != map[ch]) return false;
            stack.pop_back();
        }
    }
    return stack.empty();
}

int main(){
    string s = "{}}";
    cout << (isValid(s) ?"true":"false");
    return 0;
}