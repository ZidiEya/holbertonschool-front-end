/*
Create a variable named globalVariable with value Welcome
Create a func outer that:
    alerts the content of the variable globalVariable
    creates a variable named course with value Holberton
    creates a func inner that:
        alerts the content of the variable globalVariable and course (concatenated)
        creates a variable named exclamation with value !
        creates a func inception that alerts the content of the variable globalVariable, course, and exclamation (concatenated)
        calls the func inception
    calls the func inner
Call the fun outer
 */

function globalVariable(){
    return 'Welcome'
}

function outer(){
    alert(globalVariable())

    let course = 'Holberton'
    function inner(){
        alert(globalVariable() + " " + `${course}`)
        let exclamation = "!"
        function inception() {
            alert(globalVariable() + " " + `${course}` + `${exclamation}`)
        }
        inception()
    }
    inner()
}
Footer
