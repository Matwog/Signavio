const puppeteer = require('puppeteer');
const inquirer   = require('inquirer');

//storing signavio login url
const BASE_URL = 'https://editor.signavio.com/p/login';

const signavio = {
	browser: null,
	page: null,

	initialize: async () => {

		signavio.browser = await puppeteer.launch({
			headless: false
		});

		signavio.page = await signavio.browser.newPage();

	},

//Prompting user the login credentials
	askSignavioCredentials: async () => {
	var re = /\S+@\S+\.\S+/;
    const questions = [
      {
        name: 'username',
        type: 'input',
        message: 'Enter your Signavio username or e-mail address:',
        validate: function( value ) {
        //Validating the e-mail address
          if (re.test(value)) {
            return true;
          } else {
            return 'Please enter the correct username or e-mail address.';
          }
        }
      },
      {
        name: 'password',
        type: 'password',
        message: 'Enter your password:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your password.';
          }
        }
      }
    ];
    	return inquirer.prompt(questions);
  	},

	login: async (username, password) => {

		await signavio.page.goto(BASE_URL, { waitUntil: 'networkidle2'});

	
	//Logging in with the credentials

		await signavio.page.type('input[name="name"]', username, {delay: 50});
		await signavio.page.type('input[name="password"]', password, {delay: 50});

	//Clicking the login button
		loginButton = await signavio.page.$x('//*[@id="submit"]');
		await loginButton[0].click();

		debugger;

	}
}

module.exports = signavio;

