/*
Create a function named welcome
we  need  two arguments: firstName (string) and lastName (string)
this contains a variable named fullName, that will contains the firstName followed by a space and then the lastName
Within the welcome func, write a func named displayFullName:
this should display an alert with the message Welcome + the variable fullName + and exclamation mark.
Call the func displayFullName at the end of the function welcome
*/

function welcome(firstName, lastName) {
    let fullName = firstName + " " + lastName
    function displayFullName(){
        alert( 'welcome' + " " + fullName + "!")
    }
    displayFullName()
}
