'use strict';

const config = require('config');
const eslint = require('gulp-eslint');
const gulp = require('gulp');

module.exports = function runLinting() {
  return gulp.src(config.get('build.linting.paths'))
    .pipe(eslint({
      extends: 'airbnb',
      ecmaFeatures: {
        modules: false,
      },
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
      },
      rules: {
        'guard-for-in': 0,
        strict: [0, 'global'],
        'import/no-extraneous-dependencies': ['error', { devDependencies: ['tasks/*.js', 'tests/*.js'] }]
      },
      env: {
        es6: true,
        mocha: true,
      },
    }))
    .pipe(eslint.format(config.get('build.linting.formatter')))
    .pipe(eslint.failAfterError());
};
