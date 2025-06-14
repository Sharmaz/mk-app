/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {"\\.[jt]sx?$": "babel-jest"},
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).[j]s?(x)']
};

module.exports = config;
