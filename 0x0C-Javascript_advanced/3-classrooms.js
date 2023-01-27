/*
func named createClassRoom:
    It takes into argument numbersOfStudents (number)
    Inside, it contains a func studentSeat, that takes into argument seat (number) and returns a fun that returns the seat number
    After the def of studentSeat, create and populate a variable students (array)
    Using a loop from 0 to numbersOfStudents, pass the number of iteration + 1 to studentSeat and add its return value to the students array
    Returns the students array
Create a closure classRoom, calling createClassRoom with 10 students
Executing the following code:
    console.log(classRoom[0]());
    console.log(classRoom[3]());
    console.log(classRoom[9]());
*/
function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return () => (seat);}
    let students = [];
    for (let seat = 0; seat < numbersOfStudents; seat++) {
        students.push(studentSeat(seat + 1));
    }
    return students;
}

let classRoom = createClassRoom(10);
