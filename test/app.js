/* global describe:true, it:true */ // beforeEach:true,

var path = require('path')
var assert = require('yeoman-assert')
var helpers = require('yeoman-generator').test

describe('generator-particle:app', function () {
  it('creates files', function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withArguments(['my-component'])
      .withPrompts({moduleType: 'component', moduleDescription: 'testing'})
      .on('end', function () {
        assert.file([
          '.gitignore',
          '.stylelintrc',
          '.travis.yml',
          'CHANGELOG.md',
          'index.css',
          'LICENSE.md',
          'package.json',
          'README.md',
          'lib/my-component.css',
          'test/config.json',
          'test/index.html',
          'test/test.css'
        ])

        done()
      })
  })

  it('generates a valid component', function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withArguments(['my-component'])
      .withPrompts({moduleType: 'component', moduleDescription: 'testing'})
      .on('end', function () {
        assert.file('lib/my-component.css')
        assert.noFile('lib/utilities.css')
        assert.fileContent([
          ['lib/my-component.css', '/** @define MyComponent */'],
          ['lib/my-component.css', '.MyComponent {']
        ])
        assert.jsonFileContent('package.json', {
          name: 'particlecss-components-my-component',
          description: 'A particle component for testing',
          homepage: 'https://github.com/particlecss/particle/packages/components-my-component#readme',
          bugs: 'https://github.com/particlecss/particle/labels/bug',
          repository: {
            type: 'git',
            url: 'git://github.com/particlecss/particle.git'
          }
        })
        done()
      })
  })

  it('also generates valid multirepo component', function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withArguments(['my-component'])
      .withPrompts({moduleType: 'component', moduleDescription: 'testing', monorepo: false})
      .on('end', function () {
        assert.jsonFileContent('package.json', {
          name: 'particlecss-components-my-component',
          homepage: 'https://github.com/particlecss/components-my-component#readme',
          repository: {
            type: 'git',
            url: 'git://github.com/particlecss/components-my-component.git'
          }
        })
        done()
      })
  })

  it('generates valid utilities', function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withArguments(['my-utilities'])
      .withPrompts({moduleType: 'utility', moduleDescription: 'testing'})
      .on('end', function () {
        assert.file('lib/my-utilities.css')
        assert.noFile('lib/component.css')
        assert.fileContent([
          ['lib/my-utilities.css', '/** @define utilities */'],
          ['lib/my-utilities.css', '.u-myUtilities {']
        ])
        assert.jsonFileContent('package.json', {
          name: 'particlecss-utils-my-utilities',
          description: 'testing utilities for PARTICLE CSS'
        })
        done()
      })
  })
})
