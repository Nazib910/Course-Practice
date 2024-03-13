/*
 
Truthy :
1. true 
2. any number (+ve,-ve) will be truthy except zero/0 
3. any string is truthy except empty string 
4. '0'
5. empty object is also a truthy also the object
6. empty array is also a truthy also the array 

Falsy:
1.false
2. 0
3.empty string
4.undefined 
5. null
 
*/



const x = false;

 if (x) {
    console.log('value of x is truthy');
 } else {
    console.log('value of x is falsy');
 }