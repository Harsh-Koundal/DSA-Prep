// Set Metrix Zeroes 

/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.
*/
#include<iostream>
#include<vector>
using namespace std;

void setZeroes(vector<vector<int>>& matrix){
    int m = matrix.size();
    int n = matrix[0].size();

    bool firstRowZero = false;
    bool firstColZero = false;

    // Step 1: Check first row
    for(int j = 0; j < n; j++){
        if(matrix[0][j] == 0){
            firstRowZero = true;
            break;
        }
    }

    // Step 2: Check first column
    for(int i = 0; i < m; i++){
        if(matrix[i][0] == 0){
            firstColZero = true;
            break;
        }
    }

    // Step 3: Mark rows and columns
    for(int i = 1; i < m; i++){
        for(int j = 1; j < n; j++){
            if(matrix[i][j] == 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Step 4: Update inner matrix
    for(int i = 1; i < m; i++){
        for(int j = 1; j < n; j++){
            if(matrix[i][0] == 0 || matrix[0][j] == 0){
                matrix[i][j] = 0;
            }
        }
    }

    // Step 5: Update first row
    if(firstRowZero){
        for(int j = 0; j < n; j++){
            matrix[0][j] = 0;
        }
    }

    // Step 6: Update first column
    if(firstColZero){
        for(int i = 0; i < m; i++){
            matrix[i][0] = 0;
        }
    }
}

int main(){
    vector<vector<int>> matrix = {{1,1,1},{1,0,1},{1,1,1}};

    setZeroes(matrix);

    for(auto row : matrix){
        for(int x : row){
            cout << x << " ";
        }
        cout << endl;
    }

    return 0;
}