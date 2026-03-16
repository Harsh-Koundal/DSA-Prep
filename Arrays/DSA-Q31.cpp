#include<iostream>
using namespace std;

int starpattern1(int n){
    for(int i=0;i<5;i++){
        for(int j=0;j<5-i-1;j++){
            cout << " ";
        }
        for(int j=0;j<2*i+1;j++){
            cout << "*";
        }
        for(int j=0;j<5-i-1;j++){
            cout << " ";
        }
        cout << endl;
    }
}

int starpattern2(int n){
    for(int i=0;i<=n;i++){
        for(int j=0;j<i;j++){
            cout << " ";
        }
        for(int j=0;j<2*n-(2*i+1);j++){
            cout << "*";
        }
        for(int j=0;j<i;j++){
            cout << " ";
        }
        cout << endl;
    }
}

int main(){
    int n = 5;
    starpattern1(n);
    starpattern2(n);
}

// Output 

/*

    *    
   ***   
  *****  
 ******* 
*********
*********
 ******* 
  *****  
   ***   
    *        

*/