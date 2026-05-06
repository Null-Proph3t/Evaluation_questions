// #include<stdio.h>
// #include<string.h>



// struct Students{
//     char name[50];
//     int roll;
//     float marks;

// };

// int main(){

//     struct Students s1;

//     s1.roll = 101;
//     s1.marks = 99.8;

//     strcpy(s1.name , "Rahul");

//     printf("%d", s1.roll);
//     return 0;


// }

// #include <stdio.h>
// #include <string.h>

// struct Student {
//     char name[50];
//     int roll;
//     float marks;
// };

// int main() {

//     struct Student s1;

//     strcpy(s1.name, "Aman");
//     s1.roll = 1;
//     s1.marks = 89.5;

//     printf("Name: %s\n", s1.name);
//     printf("Roll: %d\n", s1.roll);
//     printf("Marks: %.2f\n", s1.marks);

//     return 0;
// }






// #include<stdio.h>
// #include<string.h>

// struct Test{

//     int x;
//     float y;

// };

// int main(){

// struct Test t1;

// t1.x = 5;
// t1.y = 2.5;

// printf("%d %.1f", t1.x,t1.y);
// return 0;
// }



// #include<stdio.h>
// #include<string.h>

// struct A{
//     int x;

// };

// int main(){
//     struct A a[2];

//     a[0].x = 101;
//     a[1].x = 202;

//     printf("%d",a[1].x);
// }



// #include<stdio.h>
// #include<string.h>


// struct Patient {

//     char Name[50];
//     int age;
//     char Gender[10];
//     char BloodGroup[5];
//     int PatientID;

// };



// void input(struct Patient p[], int n){
//     for (int i = 0; i < n; i++){
//         scanf("%s",p[i].Name);
//         scanf("%d",&p[i].age);
//         scanf("%s", p[i].Gender);
//         scanf("%s",p[i].BloodGroup);
//         scanf("%d", &p[i].PatientID);
    
//     }

// };




// void display(struct Patient p[], int n){
//     for (int i = 0; i < n; i++){
//         printf("ID: %d, Name: %s, Age: %d, Gender: %s, Blood Group: %s\n",
//         p[i].Name,
//         p[i].age,
//         p[i].Gender,
//         p[i].BloodGroup,
//         p[i].PatientID);
//     }
// }

// int main(){
//     int n;

//     scanf("%d", &n);

//     struct Patient p[];
//     input(p,n);
//     display(p,n);

//     return 0;

// }




























// #include<stdio.h> // Header file needed for printing and taking inputs


// typedef struct students {  // creates a structure
//     char name[20];
//     float C;
//     float DM;
//     float FAA;
//     float percent;

// } allstudents; // Renames the declared struct using typedef



// void percentage(allstudents a[],int n) { // a[] -> all students, n -> total count

//     float sum;
//     float percentage;

//     for (int i = 0; i<n; i++){

//         sum = 0;

//         sum += a[i].C;
//         sum += a[i].DM;
//         sum += a[i].FAA;

//         percentage = sum/3;

//         a[i].percent = percentage;

//     }

//     for(int i=0; i < n-1; i++){
//         for(int j = 0; j < n-i-1; j++){
//             if (a[j].percent < a[j+1].percent) {
//             allstudents temp = a[j];
//             a[j] = a[j+1];
//             a[j+1] = temp;

//         }
//     }

// }

//     printf("\nStudents Ranked By Percentage: \n");
    
//     for(int i = 0; i<n; i++){
//         printf("%s = %.2f\n", a[i].name, a[i].percent);

//     }

// }


// int main(){

//     int n;

//     printf("Enter the Number of Students: ");
//     scanf("%d",&n);

//     allstudents a[n];

//     for (int i = 0; i<n; i++){

        
//         printf("\nEnter Name: ");
//         scanf("%s", a[i].name);

//         printf("Enter Marks in C: ");
//         scanf("%f", &a[i].C);

//         printf("Enter Marks in DM: ");
//         scanf("%f", &a[i].DM);

//         printf("Enter Marks in FAA: ");
//         scanf("%f", &a[i].FAA);
//     }

//     percentage(a,n);
//     return 0;

    
// }














// #include<stdio.h>
// #include<string.h>

// typedef struct cricketers{

//     char name[20];
//     int odi;
//     int runs;

// } allcricketers;

// void details(allcricketers a[], int n){

//     char name2[20];

//     printf("\nEnter Player Name To Search: ");
//     scanf("%s",name2);

//     int found = 0;

//     for(int i = 0; i < n; i++){
//         if(strcmp(a[i].name , name2) == 0){
//             printf("\n Player Found\n");

//             printf("Name of Player : %s\n", a[i].name);
//             printf("ODI Played : %d\n", a[i].odi);
//             printf("Runs :%d\n", a[i].runs);

//             found = 1;
//             break;

//         }
//     }

//     if (found == 0){
//         printf("Player Not Found");

//     }
// }



// int main(){

//     int n;

//     printf("Enter the number of cricketers: ");
//     scanf("%d",&n);

//     allcricketers a[n];

//     allcricketers *p = a;

//     for (int i = 0; i < n; i++){
//         printf("\nEnter Name, ODI matches, Runs: \n");

//         scanf("%s %d %d", 
//             (p+i) -> name,
//             &(p+i)->odi,
//             &(p+i)->runs);
//     }

//     details(a,n);

//     return 0;
// }











// #include <stdio.h>
// int upperSum(int (*a)[10], int r, int c) {
//     int sum = 0;
//     for(int i = 0; i < r; i++) {
//         for(int j = 0; j < c; j++) {
//             if(i <= j) { 
//                 sum += a[i][j];
//             }
//         }
//     }
//     return sum;
// }

// int lowerSum(int (*a)[10], int r, int c) {
//     int sum = 0;
//     for(int i = 0; i < r; i++) {
//         for(int j = 0; j < c; j++) {
//             if(i >= j) { 
//                 sum += a[i][j];
//             }
//         }
//     }
//     return sum;
// }

// int main() {
//     int a[10][10], r, c;
//     printf("Enter rows and columns: ");
//     scanf("%d%d", &r, &c);
//     printf("Enter matrix elements:\n");
//     for(int i = 0; i < r; i++) {
//         for(int j = 0; j < c; j++) {
//             scanf("%d", &a[i][j]);
//         }
//     }
//     printf("\nUpper Triangle Sum = %d", upperSum(a, r, c));
//     printf("\nLower Triangle Sum = %d", lowerSum(a, r, c));
//     return 0;
// }


















// #include <stdio.h>
// void printSeries(int *num, int terms)
// {
//     int i;
//     int oddCount = 1;
//     int evenCount = 1;
//     for(i = 1; i <= terms; i++)
//     {
//         printf("%d ", *num);
//         if(*num % 2 == 0) 
//         {
//             *num = *num + evenCount;
//             evenCount++;
//         }
//         else 
//         {
//             *num = (*num * 3) + oddCount;
//             oddCount++;
//         }
//     }
// }

// int main()
// {
//     int n, terms;
//     printf("Enter starting number: ");
//     scanf("%d", &n);
//     printf("Enter number of elements: ");
//     scanf("%d", &terms);
//     printf("Series:\n");
//     printSeries(&n, terms);
//     return 0;
// }