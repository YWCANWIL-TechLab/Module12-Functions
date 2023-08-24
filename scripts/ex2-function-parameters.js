import { Student } from "./Student.js";
// * FUNCTION PARAMETER EXERCISES


/**
 * Create a Function Constructor for a Dog object.
 * This dog MUST have a default value for its name.
 * If no name is assigned to the Dog, its name should be sprinkles.
 * 
 */
function Dog(breed="Poodle", notAPug=true) {
    this.breed = breed;
    this.notAPug = notAPug;
}
const dog1 = new Dog();


/**
 * Given three random arguments for a name, an age, and whether they are 
 * US citizens, create another Person object using those args.
 * 
 * Save the object in a variable.
 * Change all three of the values of the arguments.
 * Then return the Object variable.
 * 
 * ? Did the values of the Object change?
 */
function returnAnObject(name, age, isUSCitizen) {
    // TODO
    const person = {
        myName: name,
        myAge: age,
        citizenship: isUSCitizen
    };
    person.citizenship = false;
    person.myAge = 99;
    person.myName = "Bartholomew";
    return person;
}



/**
 * Given an object, create a variable and assign that object to it.
 * Using the object in the variable you created, change a property of that object.
 * Then return the ORIGINAL object.
 * 
 * ? What happens to the properties of the original object?
 * ? Why?
 * 
 * 
 * @param {Student} student 
 */
function copyAndChange(student) {
    const myStudent = student;
    myStudent.firstName = "bertyboi";
    myStudent.age = 5;
    return student;
}


// TODO Create an Object using a class Constuctor, not a Function Constructor
// ! You only need the constructor, no methods needed
class PoorUglyBartholomew {
    constructor(first, last, age, ugly) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.ugly = ugly;
    }

    speak() {
        return "I'm having a really bad day";
    }
    
}

