'use strict';

const config = require('config').get('server');
const skeleton = require('swagger-service-skeleton');

const instanceGenerator = () => skeleton({
  ioc: {
    autoRegister: { pattern: './services/*.js', 
                    rootDirectory: __dirname },
  },
  codegen: {
    temporaryDirectory: './dist/codegen',
    templateSettings: {
      implementationPath: '../../../src/controllers',
    },
  },
  service: {
    swagger: './src/contracts/swagger.yaml',
    listenPort: config.listenPort,
  },
});

module.exports = instanceGenerator;
