# PARTICLE <%= moduleCssName %>

[![Build Status](https://secure.travis-ci.org/<%= moduleAuthorGithubUsername %>/<%= moduleRepoName %>.svg?branch=master)](http://travis-ci.org/<%= moduleAuthorGithubUsername %>/<%= moduleRepoName %>)

<%= moduleDescription %>

Read more about [PARTICLE's design principles](https://github.com/particlecss/particle/).

## Installation

* [npm](https://npmjs.org/): `npm install <%= modulePackageName %>`
* Download: [releases](https://github.com/<%= moduleAuthorGithubUsername %>/<%= moduleRepoName %>/releases/latest)

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

To generate the testing build.

```
npm run build-test
```

Basic visual tests are in `test/index.html`.

To pre-process:

```
npm run preprocess
```

To pre-process the tests:

```
npm run preprocess-test
```

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
