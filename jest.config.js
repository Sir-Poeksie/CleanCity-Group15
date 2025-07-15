module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/_tests_/__mocks__/fileMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/src/_tests_/setupTests.js'],
  
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/__tests__/**',
    '!src/index.js',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  
  reporters: [
    'default',
    ['jest-html-reporter', {
      pageTitle: 'Jest Test Report',
      outputPath: 'jest-report/report.html',
      includeFailureMsg: true,
      includeSuiteFailure: true,
    }]
  ],
};
