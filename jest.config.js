module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!**/*.test.{js,jsx}",
    "!**/node_modules/**",
    "!src/components/_tests_/**"
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text', 'text-summary'],
  testMatch: ["**/__tests__/**/*.test.js", "**/_tests_/**/*.test.js"]
};
