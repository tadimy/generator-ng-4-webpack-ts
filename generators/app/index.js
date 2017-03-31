'use strict';

const Base = require('yeoman-generator');
const MainGenerator = require('./generator');
/* eslint no-undef: "error" */
/* eslint-env node */
module.exports = class extends Base {
  constructor(args, options, config) {
    super(args, options, config);
    this.generator = new MainGenerator(this);
  }

  initializing() {
    this.pkg = require('../../package.json');
  }

  prompting() {
    this.generator.sayHello();
  }

  writing() {
    this.generator.writing();
  }

  promptUser() {
    this.generator.promptUser();
  }

  install() {
    this.generator.install();
  }

  promptStylePreprocessor() {
    this.generator.promptStylePreprocessor();
  }
};
