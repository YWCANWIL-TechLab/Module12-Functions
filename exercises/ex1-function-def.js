// * FUNCTION DEFINITION EXERCISES

/**
 * * Question 1
 * 
 * Write a function that prints out your name, by using parameters.
 * This function should work for any person's name, so you must use 
 * the parameters to complete the function.
 * 
 * * We're creating this function with a function declaration (normal function)
 * 
 * @param {String} firstName 
 * @param {String} lastName 
 * @param {String} [middleName=""] 
 * 
 */
function writeMyNameWithParameters(firstName, middleName = "", lastName) {
    // TODO Finish the function
}


/**
 * * Question 2
 * 
 * Recreate the function above using a function expression. After you have 
 * created the function expression, call the function on the line beneath it.
 * 
 * 
 */


/**
 * * Question 3 
 * 
 * Create a function Constructor that creates Person objects.
 * Please name the function Person.
 * 
 * @param {String} firstName
 * @param {String} lastName
 * @param {Number} age
 */
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

/**
 * * Question 4
 * 
 * Create a function expression that is self invoking.
 * 
 * The function should print out numbers 1 through 100.
 * 
 * Remember: Function expressions are anonymous functions assigned to variables
 * 
 * 
 */



/**
 * * Question 5
 * 
 * Given a random number of arguments, return the number of arguments
 * 
 * @param  {...any} args 
 */
function howManyArgs(...args) {
    return arguments.length;
}
