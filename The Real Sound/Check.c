#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>

int main(){

    int *ptra;
    int *ptrb;
ptra=(int*)malloc(5*sizeof(int));
for (int i = 0; i < 5; i++)
{
    scanf("%d",ptra);
}

ptrb = (int *)malloc(8* sizeof(int));
ptrb=ptra;
for (int i = 0; i < 8; i++)
{
    printf("%d ",*(ptrb+i));

}

return 0;
}