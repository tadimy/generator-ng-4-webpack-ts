/* eslint-disable no-undef */
'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-ng-4-webpack-ts:component --name testComponent --dir tests', () => {
  beforeAll(() => {
    let rootPath = path.join(__dirname, '../../');
    this.filePath = path.join(rootPath, 'src/app/tests/testComponent.ts');
    return helpers.run(
      path.join(
        __dirname,
        '../../generators/component'
      ))
      .withPrompts({someAnswer: true})
      .withOptions(
      {
        name: 'testComponent',
        dir: 'tests'
      }
      );
  });
  it('creates files', () => {
    assert.file(
      [
        'src/app/tests/testComponent.ts'
      ]
    );
  });
});
