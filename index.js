const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// inquirer import
const inquirer = require('inquirer');

const fs = require('fs');
const { error } = require('console');

const html = './dist/html.html'
inquirer
    .prompt([
        // list of questions
        {
            name: 'manager',
            type: 'input',
            message: 'Enter manager name',
        },
        {
            
        }
    ])
    .then(answers => {
        fs.writeFileSync(html, '');
    })
    .catch(error => {
        if(error.isTtyError) {
        } else {

        }
    });
    