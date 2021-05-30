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
            name: 'managerId',
            type: 'input',
            message: 'Enter manager ID',
        },
        {
            name: 'managerEmail',
            type: 'input',
            message: 'Enter manager email',
        },
        {
            name: 'managerOfficeNumber',
            type: 'input',
            message: 'Enter manager office number',
        },
        {
            name: 'addMember',
            type: 'list',
            message: 'Add a member',
            choices: ['Engineer', 'Intern']
        },
    ]);
   
   
    function addMember()
    {
        inquirer
            .prompt([
        // list of questions
        {
            name: 'intern',
            type: 'input',
            message: 'Enter intern name',
        },
        {
            name: 'internId',
            type: 'input',
            message: 'Enter intern ID',
        },
        {
            name: 'internEmail',
            type: 'input',
            message: 'Enter intern email',
        },
        {
            name: 'internSchool',
            type: 'input',
            message: 'Enter intern school',
        },
       
        
    ])
    }
    function addMember()
    {
        inquirer
            .prompt([
        // list of questions
        {
            name: 'engineer',
            type: 'input',
            message: 'Enter engineer name',
        },
        {
            name: 'engineerId',
            type: 'input',
            message: 'Enter engineer ID',
        },
        {
            name: 'engineerEmail',
            type: 'input',
            message: 'Enter engineer email',
        },
        {
            name: 'engineerGithub',
            type: 'input',
            message: 'Enter engineer Github',
        },
       
        
    ])
    }