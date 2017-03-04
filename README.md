# generator-particle [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> PARTICLE package generator

A [Yeoman](http://yeoman.io/) generator for
[particle](https://github.com/particlecss/particle) packages.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-particle using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-particle
```

Make a new directory, and `cd` into it:

```
mkdir particle-my-component && cd $_
```

Now scaffold out a PARTICLE package using the `yo` command (and optionally passing
a name for your module):

```bash
yo particle my-component
```

## Generator

Generates the boilerplate you need for a simple PARTICLE component.

Example:

```
yo particle my-component
```

Produces:

```
.
├── .gitignore
├── .stylelintrc
├── .travis.yml
├── CHANGELOG.md
├── index.css
├── LICENSE.md
├── package.json
├── README.md
├── lib/my-component.css
├── test/config.json
├── test/index.html
└── test/test.css
```

## License

MIT


[npm-image]: https://badge.fury.io/js/generator-particle.svg
[npm-url]: https://npmjs.org/package/generator-particle
<!-- [travis-image]: https://travis-ci.org/particlecss/generator-particle.svg?branch=master -->
[travis-url]: https://travis-ci.org/particlecss/generator-particle
[daviddm-image]: https://david-dm.org/particlecss/generator-particle.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/particlecss/generator-particle
