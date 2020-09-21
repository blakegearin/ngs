# Node.js Test Project

## Getting Started

### Repl

* Start: `node`
* Editor
  * Start: `.editor`
  * Execute: `Ctrl + D`
* Last value: `_`
* Load: `.load <FILE_NAME>.js`
* Save: `.save <FILE_NAME>.js`
* Clear: `Ctrl + L`
* Help: `.help`
* Stop: `.exit` or `Ctrl + D`

### CLI

* Version: `node -v`
* Evaluate & print: `node -p "<CODE>"`
* Passing in values
  * Command line arguments: `VAL1='hello' VAL2='world node <FILE_NAME>.js`
  * Set environment variable:

    ```bash
    export VAL1=100
    node <FILE_NAME>.js
    ```

  * Example file:

    ```js
    console.log(`The current user is ${process.env.USER}`);
    console.log(`The first value is ${process.env.VAL1}`);
    console.log(`The second value is ${process.env.VAL2}`);
    ```

  * Arguments array: `node -p "process.argv" hello 42`

### NPM

* Version: `npm -v`
* Update: `npm install -g npm`
* Show dependency tree `npm ls`
* Packages
  * Individual
    * Install: `npm i <PACKAGE_NAME>`
    * Uninstall: `npm uninstall <PACKAGE_NAME>`
    * Show versions: `npm show <PACKAGE_NAME> versions`
  * All
    * Show version updates: `npm outdated`
    * Update: `npm update`
