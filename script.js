


// create a function called getCompterChoice that will randomly return either "rock", "paper", or "scissors"
function getCompterChoice() {
    // create a variable that is an array that has the choices as items
    let choices = ["rock", "paper", "scissors"];
    // create the random selector variable
    let randomItem = choices[Math.floor(Math.random() * choices.length)];
    // return random choice
    return randomItem;
}
// print random choice on to the console
console.log(getCompterChoice())
