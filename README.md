# superorch

> A supercollider IDE for laptop orchestras

[![Build Status](https://travis-ci.org/lorenzorivosecchi/superorch.svg?branch=master)](https://travis-ci.org/lorenzorivosecchi/superorch)
[![codecov](https://codecov.io/gh/lorenzorivosecchi/superorch/branch/master/graph/badge.svg)](https://codecov.io/gh/lorenzorivosecchi/superorch)

This application provides a simple system to connect supercollider musicians over a local network.

## Requirements

In order to produce any sound the app requires a copy of supercollider to be installed on the user machine. If you don't have it already, go to the official [download page](https://supercollider.github.io/download) and install a version of the software for your operating system.

Make sure to place the application folder in the default location for your operating system, otherwise superorch won't be able to find it automatically.

## Development

Clone the repository:

```sh
git clone git@github.com:lorenzorivosecchi/superorch.git
```

Move inside the directory

```sh
cd superorch
```

Install the dependencies:

```sh
yarn install
```

To run the development build:

```sh
yarn dev
```

If the install script notified you that it could not find sclang or scsynth
then create a file called `.supercollider.yaml` and paste the following text.

```yaml
sclang: /your/path/of/choice/sclang
scsynth: /your/path/of/choice/scsynth
```

Make sure to replace `/your/path/of/choice` with an actual path for the indicated binaries.

## Production

To create a production build:

```sh
yarn build && yarn build:electron
yarn package
```

If build fails for windows or linux targets you have to run electron-builder on a virtual machine. In the section below i explain how to do it with docker.

If you want to distribute your app executable on github you have to first get you github account token end then expose it as an environment variable.
You can find it by going to Settings > Personal access tokens and then copy and paste the token or generate one if you don't have any.

```
export GH_TOKEN=123456789
```
Then you just need to run this command to publish the app on github.
```sh
yarn deploy -c.snap.publish=github
```

### Build for Linux and Windows on a Mac

Firstly you will need to install [docker](https://hub.docker.com/?overlay=onboarding) on your machine.
When docker is installed you can open a terminal and paste this comand:

```sh
docker run --rm -ti \
 --env-file <(env | grep -iE 'DEBUG|NODE_|ELECTRON_|YARN_|NPM_|CI|CIRCLE|TRAVIS_TAG|TRAVIS|TRAVIS_REPO_|TRAVIS_BUILD_|TRAVIS_BRANCH|TRAVIS_PULL_REQUEST_|APPVEYOR_|CSC_|GH_|GITHUB_|BT_|AWS_|STRIP|BUILD_') \
 --env ELECTRON_CACHE="/root/.cache/electron" \
 --env ELECTRON_BUILDER_CACHE="/root/.cache/electron-builder" \
 -v ${PWD}:/project \
 -v ${PWD##*/}-node-modules:/project/node_modules \
 -v ~/.cache/electron:/root/.cache/electron \
 -v ~/.cache/electron-builder:/root/.cache/electron-builder \
 electronuserland/builder:wine
```

If the command was successful you terminal prompt should display a text like this `root@b67354f23c46:/project#`.

If that's the case you can go ahead and install the project dependencies.

```sh
yarn install
```

If there's an error saying that the node version isn't compatible with one of the required modules you should change node version through nvm. Follow their [guidelines](https://github.com/nvm-sh/nvm#install--update-script) to install the software and then run this command with your desired node version in the arguments (for me it was v11.10.1).
```sh
nvm install <desired_node_version>
```

At last you can run `node -v` to verify that the current version of node is in fact the one you tried to install,
if that's the case you can go ahead and run `yarn install` again.


Finally, to build and package the app you should run these commands:

```sh
yarn build && yarn build:electron
yarn package --win --linux
```

## To Do

- Increase test coverage
- Add optional password authentication
- Add direct messaging between users
- Prevent override of supercollider code across users

## Contributing

1. Fork it (<https://github.com/lorenzorivosecchi/superorch.git>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
