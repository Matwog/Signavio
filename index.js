#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const sg = require('./signavio');

//Display Signavio in ASCII art from text
clear();
console.log(
  chalk.yellow(
    figlet.textSync('Signavio', { horizontalLayout: 'full' })
   )
);


(async () => {
	await sg.initialize();

	const credentials = await sg.askSignavioCredentials();

	await sg.login(credentials.username,credentials.password); //passing Command line arguements

	debugger;

})()