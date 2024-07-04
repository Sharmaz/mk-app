export default {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  transformIgnorePatterns: [
    '[/\\\\\\\\]node_modules[/\\\\\\\\].+\\\\.(js|ts)$'
  ],
  transform: {},
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
}
