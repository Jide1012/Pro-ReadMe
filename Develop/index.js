// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')
const { type } = require('os')

var inquirer = require('inquirer');
const { title } = require('process');
inquirer
    .prompt([
        /* Pass your questions in here */
        {
        
                name: "name",
                message: "What is the name of your project",
                type: "input",
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    }
                    else {
                        console.log('Please include the name');
                        return false;
                    }
                }
    
            },{
                name: "email",
            message: "What is your e-mail address?",
            type: "input",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please include an email');
                    return false;

            
                }
            }

        },{
            name: "github",
            message: "What is your Github username?",
            type: "input",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log('Please include your username');
                    return false;
                }
            }

        },

        {
            name: "ProjectName",
            message: "What is the name of your project",
            type: "input",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log('Please include the name');
                    return false;
                }
            }

        }, {

            name: "Description",
            message: "Give a short description of your project",
            type: "input",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log('Include Description');
                    return false;

                }
            }


        }, {

            name: "Installation",
            message: "What instructions should the users follow to install your application",
            type: "input",
            validate: installationInput => {
                if (installationInput) {
                    return true

                }
                else {
                    console.log('Please')

                }

            }

        }, {
            name: "Usage",
            message: "How to use this application?",
            type: "input",
            validate: usageInput => {
                if (usageInput) {
                    return true
                }
                else {
                    console.log('Please include sample of code');
                }
            }
        }, {


            name: "License",
            message: "Which of the follwoing license you used for this project",
            type: "list",
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD']

        }, {

            name: "Contributing",
            message: "How can someone contribute to this project?",
            type: "input",

            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                }

                else {
                    console.log('Please include how they would contribute')
                    return false;
                }
            }



        }


    ])

    promptUserInfo()
        .then(promptProjectInfo)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
