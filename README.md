## Setting up dependencies

First, make sure `nodejs` and `npm` are installed. Then, run `npm install` from inside the repo to install dependencies.

You'll also need to make sure `grunt` is installed as a global so it can be run from the command line.
```bash
sudo npm install -g grunt-cli
```

## Running Locally

To host the demo site locally (for testing, for example), run
```bash
./node_modules/.bin/http-server
```

The server should now be running at [localhost:8080](http://localhost:8080)