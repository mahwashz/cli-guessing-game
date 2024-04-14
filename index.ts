#!/usr/bin/env node



import inquirer from "inquirer";

//1) computer will generate a random number

// 2)User input for guessing number

// 3)Compare user input with computer generated number and show result


//const randomNumber = 13;

//const randomNumber =Math.random();
//const randomNumber = Math.floor(Math.random());
//const randomNumber = Math.floor(Math.random()*10);
//const randomNumber = Math.floor(Math.random()*6+1);
const randomNumber = Math.floor(Math.random()*10+1);



console.log(randomNumber);






const answers = await inquirer.prompt([{
name : "userGuessedNumber",
type: "number",
message: "Please guess a number between 1-10:" ,
}
]);
console.log(answers)
if (answers.userGuessedNumber=== randomNumber) {
   console.log("Congratulations! you guessed right number.");
} else {console.log("Sorry! you guessed wrong number.");

}
