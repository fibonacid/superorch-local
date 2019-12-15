# superorch

> A supercollider IDE for laptop orchestras

[![Build Status](https://travis-ci.org/lorenzorivosecchi/colliderchat-client.svg?branch=master)](https://travis-ci.org/lorenzorivosecchi/colliderchat-client)
[![codecov](https://codecov.io/gh/lorenzorivosecchi/colliderchat-client/branch/master/graph/badge.svg)](https://codecov.io/gh/lorenzorivosecchi/colliderchat-client)

This application provides a simple system to connect supercollider musicians over a local network.

## Development setup

First, install node modules:

```sh
yarn install
```

To run the development build:

```sh
yarn dev
```

To create a production build:

```sh
yarn build && yarn build:electron
yarn package
```

## Contributing

1. Fork it (<https://github.com/lorenzorivosecchi/superorch.git>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
