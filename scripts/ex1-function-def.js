// * FUNCTION DEFINITION EXERCISES

/**
 * Write a function that prints out your name, by using parameters.
 * This function should work for any person's name, so you must use 
 * the parameters to complete the function.
 * 
 * * We're creating this function with a function declaration
 * 
 * @param {String} firstName 
 * @param {String} lastName 
 * @param {String} [middleName=""] 
 * 
 */
function writeMyNameWithParameters(firstName, middleName = "", lastName) {
    // TODO Finish the function
    let str1 = firstName + " " + middleName + " " + lastName;
    let str2 = `${firstName} ${middleName} ${lastName}`;
}


/**
 * Recreate this function using a 
 * * function EXPRESSION
 * 
 * * Function expressions are anonymous functions assigned to variables
 * 
 */
const writeYourNameWithParameters2 = function(firstName, middleName, lastName) {
    return `${firstName} ${middleName} ${lastName}`;
}

const aPlusB = function(a, b) { return a + b; }
// TODO Call your function expression on this line or the line after
writeYourNameWithParameters2(firstName, middleName, lastName);

/**
 * Create a function Constructor that creates Person objects.
 * Please name the function Person.
 */
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

class Person {
    constructor(first, lastName, age) {
        this.firstName = first;
        this.lastName = lastName;
        this.age = age;
    }
}


/**
 * Create a function expression that is self invoking.
 * 
 * The function should print out numbers 1 through 100.
 * 
 * Remember: Function expressions are anonymous functions assigned to variables
 * 
 * 
 */
const countUp = (function() {
    let index = 1;
    while(index <= 100) {
        console.log(index);
        index++;
    }
})();  



/**
 * Create a function declaration that is self-invoking. 
 * 
 * The function should print out numbers 1 through 100.
 */
(function countTo100(){
    let index = 1;
    while(index <= 100) {
        console.log(index);
        index++;
    }
})()




/**
 * Given a random number of arguments, return the number of argumnets
 * 
 * @param  {...any} args 
 */
function howManyArgs(...args) {
    return arguments.length;
}








