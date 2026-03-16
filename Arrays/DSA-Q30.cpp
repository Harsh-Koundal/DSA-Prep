#include<iostream>
using namespace std;

int starpattern(int n){
    for(int i=0;i<=n;i++){
        for(int j=0;j<i;j++){
            cout << " ";
        }
        for(int j=n;j>2*i-1;j--){
            cout << "*";
        }
        for(int j=0;j<i;j++){
            cout << " ";
        }
        cout << endl;
    }
}

int main(){
    int n = 10;
    starpattern(n);
}

// Output 

/*

***********
 ********* 
  *******  
   *****   
    ***    
     *     

*/