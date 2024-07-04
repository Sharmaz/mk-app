// eslint-disable-next-line
import commonConfig from './jest.config.js';

export default {
  ...commonConfig,
  testMatch: ['**/*.unit.test.{js,ts}'],
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageDirectory: 'coverage/unit'
}
