/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {"\\.[jt]sx?$": "babel-jest"},
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)']
};

module.exports = config;
