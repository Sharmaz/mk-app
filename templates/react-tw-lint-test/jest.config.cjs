/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {"\\.[jt]sx?$": "babel-jest"},
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).[j]s?(x)'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__tests__/__mocks__/fileMock.ts',
    '\\.(css|less)$': '<rootDir>/src/__tests__/__mocks__/styleMock.ts',
  },
};

module.exports = config;
