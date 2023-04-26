export class Professor {
    constructor(first, last, age, id, [students]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.studentId = id;
        this.students = students
    }

    teach() {
        return "Good work!";
    }
}