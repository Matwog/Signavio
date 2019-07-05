# Signavio

# SIGNAVIO – COMMAND LINE SCRIPT

This is a simple command line script written in Node,js which logs the user into Signavio Process Manager. The credentials are passed as command line arguments.

![Optional Text](../master/Signavio.png)


# APPLICATION DEPENDENCIES:

Here’s a complete list of the packages we’ll use specifically for developing on the command line:

    • chalk     -   This colorizes the output.
    • Clear     -   This clears the terminal screen.
    • Figlet    -   This creates ASCII art from text.
    • Inquirer  -   This creates interactive command-line user interface.
    • Puppeteer -   Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.


# GETTING STARTED:

Create a new directory for the project.
mkdir signavio
cd signavio

Create a new package.json file:
npm init

Now install the dependencies:
npm install chalk clear figlet inquirer  --save

To use Puppeteer in your project, run:
npm i puppeteer
 or "yarn add puppeteer"

Note: When you install Puppeteer, it downloads a recent version of Chromium (~170MB Mac, ~282MB Linux, ~280MB Win) that is guaranteed to work with the API. To skip the download, see Environment variables.

Once the dependencies are installed your package.json file should look like this.
```json

{
  "name": "signavio", 
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "clear": "^0.1.0",
    "clui": "^0.3.6",
    "configstore": "^4.0.0",
    "figlet": "^1.2.1",
    "inquirer": "^6.3.1",
    "lodash": "^4.17.11",
    "minimist": "^1.2.0",
    "opn": "^6.0.0",
    "touch": "^3.1.0"
    }
  },
  "devDependencies": {
    "puppeteer": "^1.14.0"
  }
}

```

Copy the index.js and signavio.js file

So now you must have the project directory containing node_modules folder, index.js, package.json,package-lock.json.


# WORKING: 

To run the script, open the command prompt and make sure you are inside the project directory.

node index.js

The command-line interface opens with the Signavio text and simultaneously chromium browser opens. Credentials are then prompted. Once valid credentials are entered the script log you into the Signavio Process Manager.







