#include <iostream>
#include <string>
#include <cmath>
#include <time.h>
#include <iomanip>
#include <climits>
#include <algorithm>

using namespace std;

int main()
{
    int arr[3][3] = {{40, 50, 55}, {10, 15, 20}, {30, 50, 60}};
    int res[3];
    int sum = 0;
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            sum += arr[i][j];
        }
        res[i] = sum;
        sum = 0;
    }
    for (int i = 0; i < 3; i++)
    {
        cout << "The Marks for the " << i << "th student are " << res[i]/3 << endl;
    }

    return 0;
}