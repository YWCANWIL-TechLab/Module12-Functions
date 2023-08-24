import { Professor } from "./Professor";
import { Student } from "./Student";
// * FUNCTION CALL AND APPLY EXERCISES

/**
 * Given a Professor object, call Professor's teach method() on 
 * another object. Do it on the return line
 * 
 * @param {Professor} prof 
 * @param {Object} obj 
 * @returns {String}
 */
function profToObject(prof, obj) {
    return prof.teach.apply(obj);
}


/**
 * Given a professor object and a student object, call the professor's 
 * teach() method on the student. Then call the student's learn() method
 * on the professor.
 * 
 * Please print these to the console instead of returning, since there are
 * multiple actions happening.
 * 
 * @param {Student} student 
 * @param {Professor} professor 
 */
function studentToProf(student, professor) {
    // TODO
    professor.teach.apply(student);
    student.learn.apply(student);
}

