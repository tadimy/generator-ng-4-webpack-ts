'use strict';
const yosay = require('yosay');
const chalk = require('chalk');
/**
 *
 * @type {MainGenerator}
 */
module.exports = class MainGenerator {
  /** @namespace {string} props.repoHost */
  constructor(gen) {
    this.wrapper = gen;
  }

  sayHello() {
    this.wrapper.log(
      yosay('Welcome to the ' + chalk.red('Angular 4 Webpack Generator')));
  }

  writing() {
    let _app = {
      app: this.wrapper.appName,
      homepage: this.wrapper.homepage,
      projectDescription: this.wrapper.projectDescription
    };
    let _user = {
      username: this.wrapper.username,
      userEmail: this.wrapper.userEmail,
      userNameSpace: this.wrapper.userNameSpace,
      authorUrl: this.wrapper.authorUrl
    };
    let _repoHostUrl = {
      repoHostUrl: this.wrapper.repoHostUrl
    };

    // Editor config
    this.wrapper.fs.copyTpl(
      this.wrapper.templatePath('_editorconfig'),
      this.wrapper.destinationPath('editorconfig'
      ), {
        app: _app.app,
        userNameSpace: _user.userNameSpace
      });

    // Package.json
    this.wrapper.fs.copyTpl(
      this.wrapper.templatePath('_package.json'),
      this.wrapper.destinationPath('package.json'),
      {
        app: _app.app,
        username: _user.username,
        userEmail: _user.userEmail,
        authorUrl: _user.authorUrl,
        repoHostUrl: _repoHostUrl.repoHostUrl,
        projectDescription: _app.projectDescription,
        homepage: _app.homepage
      }
    );
    // Copy webpack default config
    this.wrapper.fs.copyTpl(
      this.wrapper.templatePath('_webpack.config.js'),
      this.wrapper.destinationPath('webpack.config.js')
    );

    // Copy webpack configurations
    this.wrapper.fs.copyTpl(
      this.wrapper.templatePath('_config'),
      this.wrapper.destinationPath('./config'),
      {
        app: _app.app,
        projectDescription: _app.projectDescription
      }
    )
  }

  promptUser() {
    let prompts = [
      {
        type: 'input',
        name: 'appName',
        message: 'What is the name of you app?',
        default: 'holyshit-ng4'
      },
      {
        type: 'input',
        name: 'homepage',
        message: 'What is your project\'s homepage?',
        default: 'github.com'
      },
      {
        type: 'input',
        name: 'authorUrl',
        message: 'What is you profile homepage?',
        default: 'github.com'
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'What iss detail about you project?',
        default: 'awesome angular 4'
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your username?',
        default: this.wrapper.user.git.name()
      },
      {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email?',
        default: this.wrapper.user.git.email()
      },
      {
        type: 'input',
        name: 'userNameSpace',
        message: 'What is your GitLab NameSpace?',
        default: 'namespace',
        when: answersHash => {
          return answersHash.repoHost === 'gitlab';
        }
      },
      {
        type: 'list',
        name: 'repoHost',
        message: 'Which Git repository hosting service are you using?',
        choices: ['github', 'bitbucket', 'gitlab'],
        default: 0
      },
      {
        type: 'input',
        name: 'repoHostUrl',
        message: 'What is your GitLab URL/GitLab Server IP/GitLab Server FQDN?',
        default: 'gitlab.com',
        when: answersHash => {
          return answersHash.repoHost === 'gitlab';
        }
      }
    ];
    let done = this.wrapper.async();

    this.wrapper.prompt(prompts).then(props => {
      this.wrapper.appName = props.appName;
      this.wrapper.username = props.username;
      this.wrapper.userEmail = props.userEmail;
      this.wrapper.homepage = props.homepage;
      this.wrapper.authorUrl = props.authorUrl;
      this.wrapper.projectDescription = props.projectDescription;
      if (props.repoHost === 'github') {
        this.wrapper.repoHostUrl = 'github.com';
        this.wrapper.userNameSpace = props.username;
      } else if (props.repoHost === 'bitbucket') {
        this.wrapper.repoHostUrl = 'bitbucket.org';
        this.wrapper.userNameSpace = props.username;
      } else {
        this.wrapper.repoHostUrl = props.repoHostUrl;
        this.wrapper.userNameSpace = props.userNameSpace;
      }
      this.wrapper.config.set('appName', this.wrapper.appName);
      this.wrapper.config.set('username', this.wrapper.username);
      this.wrapper.config.set('userEmail', this.wrapper.userEmail);
      this.wrapper.config.set('repoHostUrl', this.wrapper.repoHostUrl);
      this.wrapper.config.set('userNameSpace', this.wrapper.userNameSpace);
      this.wrapper.config.set('homepage', this.wrapper.homepage);
      this.wrapper.config.set('authorUrl', this.wrapper.authorUrl);
      this.wrapper.config.set('description', this.wrapper.projectDescription);
      done();
    });
  }

  /**
   * Choose stylesheet preprocessor
   * @returns {boolean} always true
   */
  promptStylePreprocessor() {
    const done = this.wrapper.async();
    let prompts = [{
      type: 'list',
      name: 'stylePreprocessor',
      message: 'Which CSS pre-processor do you want to use?',
      choices: [
        'none',
        'less',
        'sass'
      ],
      when: () => {
        return this.wrapper.stack !== 'server';
      },
      default: 0
    }];

    this.wrapper.prompt(prompts).then(props => {
      this.wrapper.stylePreprocessor = props.stylePreprocessor;
      this.wrapper.config.set(
        'stylePreprocessor',
        this.wrapper.stylePreprocessor
      );
      done();
    });
    this.wrapper.config.save();
    return true;
  }

  install() {
    // this.wrapper.installDependencies({
    //   skipInstall: this.wrapper.options['skip-install'],
    //   yarn: false,
    //   npm: false,
    //   bower: false
    // });
  }
};
