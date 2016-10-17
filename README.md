# ProgressBar-RactiveJS

The packages used in the project:
1. RactiveJs
2. Webpack
3. Babel
4. Webpack-dev-server - Static web server
5. NPM build tool
6. less - For CSS processing
7. mocha - For unit testing

Install node.js to run npm.

To build the application:
Run 'npm install' in root directory which contains all dependencies in package.json.
To build the application run 'npm start' in project root directory.

To run the application:
If you dont want to run 'npm install', please get the compiled code inside 'dist' folder
and open 'index.html' under root folder in browser to run the application.

To run the unit test cases:
1. Run 'npm install webpack-dev-server --save-dev' in project root  directory
2. Run 'npm test'
[you will get error like: "ERROR in Entry module not found: Error: Cannot resolve module 'babel' in C:\DevelopmentProjects\ProgressBar-RactiveJS-master\ProgressBar-RactiveJS-master"],
this is because you might not installed all the project dependencies.
Inspite of the error, webpack-dev-server will start at http://localhost:8080 by default.
3. Access the unit testing results using http://localhost:8080/tests/test-runner.html
