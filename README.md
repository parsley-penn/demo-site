## Setting up dependencies

First, make sure `nodejs` and `npm` are installed. Then, run
```bash
npm install
```
from inside the repo to install dependencies.

You'll also need to make sure `grunt` is installed as a global so it can be run from the command line.
```bash
sudo npm install -g grunt-cli
```

## Building
We use grunt to perform two tasks, which may be run together (by simplying running `grunt`) or separately:
* `grunt less` - Compiles the less files into css
* `grunt babel` - Compiles ES6 JavaScript and JSX to browser-compatible JavaScript

## Serving Locally

To host the demo site locally (for testing, for example), run
```bash
./node_modules/.bin/http-server
```

The server should now be running at [localhost:8080](http://localhost:8080)