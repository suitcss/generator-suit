var chalk = require('chalk')
var toCamelCase = require('lodash.camelcase')
var yeoman = require('yeoman-generator')
var yosay = require('yosay')

function toPascalCase (name) {
  var a = toCamelCase(name).split('')
  a.splice(0, 1, a[0].toUpperCase())
  return a.join('')
}

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments)
    this.argument('moduleName', {type: String, required: true})
  },

  prompting: function () {
    var done = this.async()

    this.log(yosay(
      'Welcome to the wicked ' + chalk.red('generator-particle') + ' generator!'
    ))

    var prompts = [
      {
        type: 'list',
        name: 'moduleType',
        message: 'What can I generate for you?',
        choices: [
          {
            name: 'component',
            value: 'component',
            default: true
          },
          {
            name: 'utility',
            value: 'utility'
          }
        ]
      },
      {
        type: 'input',
        message: 'A particle component/utility for... (complete)',
        name: 'moduleDescription',
        default: ''
      },
      {
        type: 'input',
        message: 'Your github username',
        name: 'moduleAuthorGithubUsername',
        default: 'particlecss'
      },
      {
        type: 'confirm',
        name: 'monorepo',
        message: 'Is this module part of a monorepo on github',
        default: true
      },
      {
        type: 'input',
        message: 'Ok, tnter name of the monorepo',
        name: 'moduleMonorepoName',
        default: 'particle',
        when: function (answers) {
          return answers.monorepo
        }
      },
      {
        type: 'input',
        message: 'Your full name',
        name: 'moduleAuthorName',
        default: ''
      }
    ]

    this.prompt(prompts, function (props) {
      // Common props
      this.props = {
        moduleAuthorGithubUsername: props.moduleAuthorGithubUsername,
        moduleAuthorName: props.moduleAuthorName,
        moduleName: this.moduleName,
        moduleFileName: this.moduleName + '.css',
        moduleType: props.moduleType,
        moduleYear: new Date().getFullYear()
      }

      // Utilities
      if (props.moduleType === 'utility') {
        this.props.moduleCssName = 'u-' + toCamelCase(this.moduleName)
        this.props.modulePackageName = 'particlecss-utils-' + this.moduleName
        this.props.moduleDescription = props.moduleDescription ? props.moduleDescription + ' utilities for PARTICLE CSS' : ''
        this.props.moduleRepoName = (props.monorepo === true) ? props.moduleMonorepoName : this.props.modulePackageName
        return done()
      }

      // Components
      this.props.moduleCssName = toPascalCase(this.moduleName)
      this.props.modulePackageName = 'particlecss-components-' + this.moduleName
      this.props.moduleDescription = props.moduleDescription ? 'A particle component for ' + props.moduleDescription : ''
      this.props.moduleRepoName = (props.monorepo === true) ? props.moduleMonorepoName : this.props.modulePackageName
      done()
    }.bind(this))
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath(),
      this.props
    )

    this.fs.move(
      this.destinationPath('packagejson'),
      this.destinationPath('package.json')
    )

    this.fs.move(
      this.destinationPath('gitignore'),
      this.destinationPath('.gitignore')
    )

    this.fs.move(
      this.destinationPath('travis.yml'),
      this.destinationPath('.travis.yml')
    )

    this.fs.move(
      this.destinationPath('stylelintrc'),
      this.destinationPath('.stylelintrc')
    )

    if (this.props.moduleType === 'utility') {
      this.fs.move(
        this.destinationPath('lib/utilities.css'),
        this.destinationPath('lib/' + this.props.moduleFileName)
      )
      this.fs.delete(this.destinationPath('lib/component.css'))
    } else {
      this.fs.move(
        this.destinationPath('lib/component.css'),
        this.destinationPath('lib/' + this.props.moduleFileName)
      )
      this.fs.delete(this.destinationPath('lib/utilities.css'))
    }
  },

  install: function () {
    this.installDependencies({
      bower: false
    })
  }
})
