module.exports = {
  transform: {
    '^.+\\.jsx?$': '<rootDir>/src/testing/jest-preprocess.js'
  },
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/src/testing/jest.setup.js',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js'
  },
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    '__PATH_PREFIX__': ''
  },
  testURL: 'http://localhost',
  setupFiles: ['<rootDir>/src/testing/loadershim.js']
};
