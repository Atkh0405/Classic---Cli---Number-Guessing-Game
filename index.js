#! /usr/bin/env node
import inquirer from "inquirer";
// // 1) Coputer will generate a random number
// // 2) User input for guesing number
// // 3) Computer user input with computer generated number and show result - done
const randommNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6",
    }
]);
if (answers.userGuessedNumber === randommNumber) {
    console.log("Congratulations!You guessed right number");
}
else {
    console.log("You gussed wrong number");
}
