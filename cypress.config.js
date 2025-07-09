const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx}',
    supportFile: 'cypress/support/e2e.js',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    video: true,
    screenshotOnRunFailure: true,
    viewportWidth: 1280,
    viewportHeight: 800,
  },
  env: {
    TEST_USER_EMAIL: 'user@cleancity.com',
    TEST_USER_PASSWORD: 'password123',
    TEST_ADMIN_EMAIL: 'admin@cleancity.com',
    TEST_ADMIN_PASSWORD: 'admin123'
  }
});
