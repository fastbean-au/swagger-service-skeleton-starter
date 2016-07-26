'use strict';

const skeleton = require('swagger-service-skeleton');

const instanceGenerator = () => skeleton({
  ioc: {
    autoRegister: { pattern: './services/*.js', 
                    rootDirectory: __dirname },
  },
  codegen: {
    templateSettings: {
      implementationPath: '../../../src/controllers',
    },
    temporaryDirectory: './dist/codegen',
  },
  service: {
    swagger: './src/contracts/prosemino-api.yaml',
    listenPort: 10010,
  },
});

module.exports = instanceGenerator;
