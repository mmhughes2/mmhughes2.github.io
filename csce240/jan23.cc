// Copyright 2025 bhipp
#include<iostream>
using std::cout;
using std::endl;
using std::cin;  // cin is an istream object in iostream for
                 // obtaiining input from the standard input device

int main() {
  int age;
  cout << "Enter your age ";
  cin >> age;
  // 12 - 27 is gen z
  if ( 12 <= age && age <= 27 )
    cout << "You're Gen Z" << endl;
  else
    cout << "Not Gen Z" << endl;

  return 0;
}



/*
int main() {
  cout << "Hi" << endl;

  int x, y;
  cout << "Enter two integers ";
  cin >> x >> y;
                    // x is implicitly cast as a real number
  cout << x << " / 2 = " << x / 2.0 << endl;
  cout << x << " * " << y << " = " << x * y
       << "\n" << x << " / " << y << " = " << static_cast<double>(x) / y
       << "\n" << x << " % " << y << " = " << x % y
       << endl;

  char letter;
  int num;
  cout << "Enter a bingo call ";
  cin >> letter >> num;
  cout << "I got " << letter << " " << num << endl;

  return 0;
}
*/
