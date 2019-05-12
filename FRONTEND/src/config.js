const common = {
  name: 'SmartTravel',
  connectionTimeout: 60000,

  throttleInterval: 300,
};

const development = {
  appHost: 'https://dev.smart-travel.com',
};

const test = {
  appHostTest: 'https://test.smart-travel.com',
};

const production = {
  appHost: 'https://smart-travel.com',
};

function getConfigSet() {
  switch (process.env.NODE_ENV) {
    case 'development': return { ...development, ...test };
    case 'production': return { ...production, ...test };
    default: return development;
  }
}

const config = { ...common, ...getConfigSet() };

export function configPath(isTest) {
  config.isTest = isTest;
  config.apiPath = `${isTest ? config.appHostTest : config.appHost}/api/`;
}

export default config;
