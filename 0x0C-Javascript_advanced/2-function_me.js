/*
func named welcomeMessage:
    It accepts one argument fullName (string)
    It should be a closure for an alert displaying Welcome <fullName>
After this func def, create three variables:
    guillaume contains a call welcomeMessage with Guillaume as argument
    alex contains a call welcomeMessage with Alex as argument
    fred contains a call welcomeMessage with Fred as argument
*/
function welcomeMessage(fullName){
    return () => (alert('Welcome' + " " + `${fullName}`))
}

let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");
