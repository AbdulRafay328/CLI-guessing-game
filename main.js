#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess a number in between 1-10 ",
    },
]);
if (answers.userguessednumber === randomnumber) {
    console.log("congrats! you guessed same number ");
}
else {
    console.log("you quessed wrong number");
}
