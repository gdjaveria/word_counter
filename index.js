#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: chalk.bold.blue("write your sentence to count a word..! "),
    }]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(chalk.bold.yellow `Your sentence word count is ${words.length}`);
