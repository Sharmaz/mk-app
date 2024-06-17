export default {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testMatch: ['**/*.test.{js,ts}'],
  transformIgnorePatterns: [
    '[/\\\\\\\\]node_modules[/\\\\\\\\].+\\\\.(js|ts)$'
  ],
  transform: {},
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  collectCoverageFrom: [
    '**/src/**/*.js'
  ],
}
