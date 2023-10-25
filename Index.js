
// Problem 1: Write a function to calculate the area of a triangle.

function triangle(height, base){
    var totalTriangle = (height * base ) / 2;
    return totalTriangle
}
var height = 10;
var base = 5;

// console.log(triangle(height, base));

// Problem 2: Write a function to convert degrees to radians.

function convertRadians(degrees){
    // let radians = degrees * (Math. PI/180); 
    return degrees * (Math. PI/180)
}
let degrees = 100; 
    // console.log(convertRadians(degrees).toFixed(3))

// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.

function calculateFactorial(number){
    if(number === 0 || number === 1){
        return 1
    } else{
        return number * calculateFactorial(number-1)
    }
}
    // console.log(calculateFactorial(6)) 


// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.

function isPalindrome(stri){
    let returnTrueFals = stri.split('').reverse().join('');
    return stri === returnTrueFals 
}
    // console.log(isPalindrome("Jabed"))
    // console.log(isPalindrome("helleh"))


// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.

function mergeArrays(margeOne, margeTwo){
    return margeOne.concat(margeTwo)
}

let margeOne = ["Jabed"];
let margeTwo = ["Khan"];
    // console.log(mergeArrays(margeOne, margeTwo))


// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.

function isLeapYear(year){
    if (year % 400 === 0 || (year % 4 === 0)) {
        return "This is a leap year"
    } else{
        return "Not leap year"
    }
}

let leapYear = isLeapYear(2021);
    // console.log(leapYear)


// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.

function remove(removeArray) {
    return removeArray.filter((el,index) => removeArray.indexOf(el) === index);
   }
   const numText = ["apple","mango","apple","jackfruit", "mango",2,6,7,7,2]

    //console.log(remove(numText));

// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

function convertToCelsius(fahrenheit){
    let celsius  = (fahrenheit - 32) * 5/9 ;
    return celsius.toFixed(3)
}

let fahrenheitValue = 100;
    // console.log(convertToCelsius(fahrenheitValue))

// Problem 9: Write a function to find the maximum of five numbers.

function findMax(numbers){
    return Math.max(...numbers)
}
let number = [2, 5, 9, 1, 7];
    // console.log(findMax(number))


// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

function evenOdd(pera) {
    let words = pera.length;
    return words%2 === 0 ? 'even' : 'odd'
 }

 let input1 = "Javascript";
 let input2 = "Hello";
    console.log(evenOdd(input1))


// 1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

/* 
Answer: When we need tow show two diffrent value as per conditions then we can use if else.
On the other hand, if we want to show various type of values then we can use switch. Because switch is working constantly, but we can break the work. If the expression is not meet then we can use default. 
*/ 

// 2. What is JavaScript, and what is its primary purpose in web development?

/*
JavaScript is a scripting or programming language that allows us to implement complex features and function on web pages. Using JavaScript we can make web pages functional, interactive, and userfriendly.
*/

// 3. Explain the difference between var, let, and const when declaring variables in JavaScript.

/* 
If we use var the we can easily reassigned a value in our code and it increasingly difficult to debug. Let solves this by only having the variable available within the block of code within which it is defined. Let is not hoisted and you must assign it a value upon its declaration, it's easy to debug. Const is similar to let.
*/

// 4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.

/*
JavaScript has two type of scope which are global and local scope. In JavaScript scope refers to the current context of code, which determines the accessibility of variables to JavaScript. A global variable is accessible from anywhere in the code. and Local scope contains things defined inside code blocks.
*/


// 5. What is the difference between "null" and "undefined" in JavaScript?

/* 
When we declared a variable but value hasn't been assinged this is undifined. And null means an empty value or a blank value. The typeof() operator returns undefined for an undefined variable. The typeof() operator returns the type as an object for a variable whose value is assigned as null.
*/