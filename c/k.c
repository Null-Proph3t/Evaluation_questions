// REVERSE A NUMBER:

// #include<stdio.h>
// int main(){


//  int n;
//  scanf("%d",&n);

//  int arr[10];
//  int size = 0;

//  while(n>0){
//     int digit = n%10;
//     arr[size++] = digit;
//     n /= 10;

//  }

//  for(int i = 0; i < size; i++){
//     printf("%d",arr[i]);

//  }


//     return 0;
// }




// PALINDROME CHECK:

// #include<stdio.h>
// int main(){
//     int n;
//     scanf("%d",&n);
//     int m = n;

//     int arr[100];
//     int size = 0;


//     while(n>0){
//         int digit = n%10;
//         arr[size++] = digit;
//         n /= 10;

//     }
// int isPalindrome = 1;
//     for (int i = 0; i < size/2; i++){
//         if (arr[i] != arr[size - 1 - i]){
//             isPalindrome = 0;
//             break;
//         }

//     }
// if( isPalindrome){
//     printf("Palindrome");
// }
// else{
//     printf("not Palindrome");
// }

//     return 0;
// }

  


// SUM OF DIGITS :

// #include<stdio.h>
// int main(){
//     int n;
//     scanf("%d",&n);
//     int arr[20];
//     int size = 0;


//     while(n > 0){
//         int digit = n%10;
//         arr[size++] = digit;
//         n /= 10;




//     }
//     int sum = 0;
//     for (int i = 0; i < size; i ++){
//         sum += arr[i];
        
//     }
//     printf("%d",sum);
//     return 0;
// }




// FACTORIAL :

// #include<stdio.h>


// long long fact(int n){
//     if (n < 2 ){
//         return 1;


//     }
//     if (n < 0){
//         printf("Invalid Input");
//         return 0;
//     }
//     return n*fact(n-1);
// }
// int main(){
//     int m;
//     scanf("%d",&m);
//     long long result = fact(m);

//     printf("%d", result);

// }





// PRIME CHECK

// #include<stdio.h>

// int isPrime(int n){
//     if (n <= 1) return 0;

//     for (int i = 2; i*i <= n; i++ ){
//         if(n%i==0){
//             return 0;
//         }
//     }
// }

// int main(){
//     int n;
//     scanf("%d", &n);

// if (isPrime(n)) printf("Prime");
// else printf("Not Prime");
// return 0;

// }





// ------------------------------------------------------------------------------------------------------------------------------------


// MIN MAX

// #include<stdio.h>
// int main(){

//     int arr[10];
//     int n;
//     scanf("%d",&n);

    
//     for (int i = 0; i < n; i++){
//         scanf("%d",&arr[i]);
//     }
//     int max =arr[0], min = arr[0];
//     for(int i = 0; i < n; i++){
// if(arr[i] > max) max = arr[i];
// if(arr[i] < min) min = arr[i];
//     }

//     printf("%d %d",max,min);
//     return 0;
// }






// LINEAR SEARCH

// #include<stdio.h>
// int main(){

//     int n;
//     scanf("%d",&n);
//     int arr[100];

//     for(int i = 0; i < n; i++){
//         scanf("%d", &arr[i]);

// }

//     int k;
//     scanf("%d",&k);

//     for(int i = 0; i < n; i++){
//         if (arr[i] == k) printf("%d",i);
//     }

// return 0;
// }





// REVERSE ARRAY

// #include<stdio.h>
// int main(){
//     int n;
//     scanf("%d",&n);

//     int arr[100];

  
//     for (int i = 0; i < n; i++){
//         scanf("%d",&arr[i]);
//     }

//     int start = 0;
//     int end = n - 1;

//     while (start < end) {
//         int temp = arr[start];
//         arr[start] = arr[end];
//     arr[end ] = temp;

//     start++ ;
//     end--;


    
// }
// for (int i = 0; i < n; i++) {
//    printf("%d ", arr[i]);
// }

// }






// EVEN ODD


#include<stdio.h>
int main(){

    int n;
    scanf("%d",&n);
}












