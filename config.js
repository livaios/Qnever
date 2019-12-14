const _ = require("lodash");

// module variables
const config = require('./config.json');
const defaultConfig = config.development;
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);

const path = require('path')

module.exports = {
  config: path.resolve('./config', 'config.json'),
  'models-path': path.resolve('./models'),
}

// as a best practice
// all global variables should be referenced via global. syntax
// and their names should always begin with g
global.gConfig = finalConfig;

// log global.gConfig
console.log(`global.gConfig: ${JSON.stringify(global.gConfig, undefined, global.gConfig.json_indentation)}`);
