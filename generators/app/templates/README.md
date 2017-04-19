# SUIT <%= moduleCssName %>

[![Build Status](https://secure.travis-ci.org/<%= moduleAuthorGithubUsername %>/<%= modulePackageName %>.svg?branch=master)](http://travis-ci.org/<%= moduleAuthorGithubUsername %>/<%= modulePackageName %>)

<%= moduleDescription %>

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [npm](https://npmjs.org/): `npm install <%= modulePackageName %>`
* Download: [releases](https://github.com/<%= moduleAuthorGithubUsername %>/<%= modulePackageName %>/releases/latest)

## Available classes

* `<%= moduleCssName %>` - The core <% moduleType %> class

## Configurable variables

* ...

## Usage

```html
<div class="<%= moduleCssName %>">

</div>
```

## Testing

Install [Node](http://nodejs.org) (comes with npm).

```
npm install
```

To generate a build:

```
npm run build
```

Check for conformance errors with [postcss-bem-linter](https://github.com/postcss/postcss-bem-linter) and [stylelint](http://stylelint.io/)

```
npm test
```

To watch the files for making changes to test:

```
npm run watch
```

To generate the testing build.

```
npm run build-test
```

Basic visual tests are in `test/index.html`.

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
