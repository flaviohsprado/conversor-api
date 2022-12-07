const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, './'),
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: [
    'test/**/*.ts',
    '!test/**/*.d.ts',
    '!test/**/*.spec.ts',
  ],
  moduleFileExtensions: ['ts', 'js', 'json'],
};
