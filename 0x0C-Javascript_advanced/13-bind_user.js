/*
object user with the attributes:
    hobby: Calligraphy
    favoriteSport: Hockey
    astrologicalSign: Aries
    firstName: Buillaume
    lastName: Ialva
    location: Telaviv
    occupation: Engineer
Create a fun named logWelcomeUser:
    It takes one arg welcomeString (String)
    It logs to the console <welcomeString>, <firstName>. Your occupation is: <occupation>
Create a variable named bindLogWelcomeUser. It binds the logWelcomeUser fun to the user object.
Call the function with the string Welcome
Requirements:
Calling bindLogWelcomeUser('Hello'); should return Hello, Buillaume. Your occupation is: Engineer
*/
const user = {
    hobby: "Calligraphy",
    favoriteSport: "Hockey",
    astrologicalSign: "Aries",
    firstName: "Buillaume",
    lastName: "Ialva",
    location: "Telaviv",
    occupation: "Enginee"
}
function logWelcomeUser(welcomeString){
    console.log(`${welcomeString}, ${user.firstName}. Your occupation is: ${user.occupation}`);
}

const bindLogWelcomeUser = logWelcomeUser.bind(user);
bindLogWelcomeUser('Welcome');
bindLogWelcomeUser('Hello');
