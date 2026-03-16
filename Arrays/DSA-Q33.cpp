#include<iostream>
using namespace std;

int starpattern1(int n){
    for(int i=0;i<n;i++){
        for(int j=1;j<=i+1;j++){
            cout << j;
        }
        for(int j=1;j<2*n - (i*2);j++){
            cout << " ";
        }
        for(int j=i+1;j>=1;j--){
            cout << j;
        }
        cout << endl;
    }
}

int main(){
    int n = 5;
    starpattern1(n);
}

// Output 

/*

1         1
12       21
123     321
1234   4321
12345 54321 

*/