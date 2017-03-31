'use strict';
const Base = require('yeoman-generator');
/* eslint no-undef: "error" */
/* eslint-env node */
module.exports = class extends Base {
  initializing() {
    this.pkg = require('../../package.json');
  }

  writing() {
    const name = this.options.name || 'myComponent';
    const titleCase = string => string.charAt(0).toUpperCase() + string.slice(1);
    const lowerCase = string => string.charAt(0).toLowerCase() + string.slice(1);
    const path = this.options.dir ? `app/${this.options.dir}` : `app`;
    const props = {
      componentName: lowerCase(name),
      className: titleCase(name),
      modules: 'webpack',
      framework: 'angular4',
      name
    };
    let fullname = 'src/' + path + '/' + name;
    this.fs.copyTpl(
      this.templatePath('_src/_app/component.pug'),
      this.destinationPath(fullname + '.pug'),
      props
    );
    this.fs.copyTpl(
      this.templatePath('_src/_app/component.scss'),
      this.destinationPath(fullname + '.scss'),
      props
    );
    this.fs.copyTpl(
      this.templatePath('_src/_app/component.ts'),
      this.destinationPath(fullname + '.ts'),
      props
    );
    this.fs.copyTpl(
      this.templatePath('_src/_app/component.spec.ts'),
      this.destinationPath(fullname + '.spec.ts'),
      props)
    ;
  }
};
