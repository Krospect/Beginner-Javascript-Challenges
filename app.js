//Problem 1: Sum of two numbers
function addition(a,b){
    return a+b;
}

console.log(addition(7,3));

//Problem 2: Convert hours into seconds
function hoursIntoSeconds(hour){
    return hour*3600;
}

console.log(hoursIntoSeconds(24));

//Problem 3: Calculate perimeter of a rectangle
function calcPerimeter(num1,num2){
    return num1*2 + num2*2;
}

console.log(calcPerimeter(2,9));

//Problem 4: Calculate area of a triangle
function calcTriangleArea(base,height){
    return .5*base*height
}

console.log(calcTriangleArea(20,20));

//Problem 5: Extend a String
function appendFrontend(str){
    return str + "Frontend"
}

console.log(appendFrontend('Orange'));

//Problem 6: Check if a sum of two numbers is greater than a 100
function sumGreaterThan100(num1,num2){
    return (num1+num2>100)
}

console.log(sumGreaterThan100(50,60));

//Problem 7: Less than or Equal to Zero?
function lessThanOrEqualToZero(num){
    return num<=0
}

console.log(lessThanOrEqualToZero(-2));

//Problem 8: Opposite Boolean
function oppositeBoolean(bool){
    return !bool
}

console.log(oppositeBoolean(false));

//Problem 9: Check if a number is not zero
function isNotZero(num){
    return num!==0
}

console.log(isNotZero(null));

//Prbolem 10: Calculate remainder of two numbers
function calcRemainder(num1, num2){
    return num1 % num2
}

console.log(calcRemainder(9,8));

//Problem 11: Check if a number is odd
function isOdd(num){
    return num % 2!==0
}

console.log(isOdd(3));

//Problem 12: If a number is even, return 1 otherwise return -1
function booleanInteger(num){
    return num % 2 === 0 ? 1: -1;
}

console.log(booleanInteger(5));

//Problem 13: Check if a user is logged in and subscribed
function isLoggedInAndSubscribed(str1, str2){
    return str1 === "LOGGED_IN" && str2 === "SUBSCRIBED"
}

console.log(isLoggedInAndSubscribed('LOGGED_OUT','SUBSCRIBED'));

//Problem 14: Check if a user is logged in or subscribed
function isLoggedInAndSubscribed(str1, str2){
    return str1 === "LOGGED_IN" || str2 === "SUBSCRIBED"
}

console.log(isLoggedInAndSubscribed('LOGGED_OUT','UNSUBSCRIBED'));