#include<iostream>
#include<string.h>
#include<cmath>
#include<time.h>
#include<iomanip>
#include <climits>

using namespace std;

    int main(){
    int age;
    cout<<"Enter the age of your father";
    cin>>age;
    age>18 || age <20 ? cout<<"An Old" :cout<<"Not an old";

return 0;
}