#include<bits/stdc++.h>

#define ll long long
#define lli ll int
#define vi vector<int>
#define vs vector<string>
#define vss vector<vs>
#define vc vector<char>
#define vb vector<bool>
#define vii vector<vi>
#define pii pair<int,int>
#define vpii vector<pii>
#define vip vector<pii>
#define ff first
#define ss second
#define rep(i,a,b) for(int i=a;i<b;i++)
const int N = 1e6+3;
const int MOD = 1e9 + 7;

/*
    ***    Saad a Peaceful soul ⭐⭐⭐⭐⭐⭐⭐ 😁 Zindagi me maza Aana Chahye Bs  ***  
*/

using namespace std;

//Driver Code 
int main(){

	int t;
	cin >> t;
	while(t--){
	    map<int,int> mp;
	    int n;
	    cin >> n;
	    vector<int> V(n);
	    for(int i = 0; i < n; i++){
	        cin >> V[i];
	        mp[V[i]]++;
	    }
	    int mx = INT_MIN;
	    for(auto j : mp){
	        mx = max(j.second,mx);
	    }
        int ans = 0;
        ll val = 1;

        while(val < mx)// 3
        {
            ++ans;
            val*=2ll;
        }
        cout<<ans<<endl;
	}
}