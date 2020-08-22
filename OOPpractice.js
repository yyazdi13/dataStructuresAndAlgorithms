const inquirer = require('inquirer');
const axios = require('axios');

class homework {
    constructor(){
        this.username = null;
        this.color = null;
        this.location = null;
        this.pic = null;
    }

    promptUser(){
        return inquirer.prompt([
            {
                message: 'What is your username?',
                name: 'githubUsername'
            }
        ]).then(answers => {
            this.username = answers.githubUsername;
            console.log(this.username);
            this.callAPI();
        })
    };

    callAPI(){
        return axios.get(`https://api.github.com/users/${this.username}`).then(res => {
            console.log(res.data);
            this.createhtml();
        })
    }

    createhtml(){
        console.log('hi');
    }
}

var newHomework = new homework;
newHomework.promptUser();