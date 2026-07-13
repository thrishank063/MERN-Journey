#include<iostream>
using namespace std;

int main(){
  int a, b;
  cin >> a >> b;
  int c = a * b;
  string result = (c % 2 == 0) ? "Even" : "Odd";
  cout << result <<endl;
}