const common = {
  name: 'SmartTravel',
  // This mode property will be saved to async storage and load at loading screen
  // at Production version =>
  // mode: normal (server pro), test (server test)
  // at Development version =>
  // mode: normal (server dev), test (server test), fakeData
  mode: 2,
  //------------------------
  connectionTimeout: 10000,
  throttleInterval: 300,
  debounceInterval: 500,

  // Enums
  MODE: {
    Normal: 0,
    Test: 1,
    FakeData: 2,
  },
};

const development = {
  appHost: 'http://10.133.202.71:7080',
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
  config.apiPath = `http://10.0.13.130/`;
}

export default config;
