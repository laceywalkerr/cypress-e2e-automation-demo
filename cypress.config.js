const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
  viewportWidth: 1280,
  viewportHeight: 800,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  // Retry configuration applied in run mode to simulate CI behavior
  // Keeps local debugging clean while increasing pipeline resilience
  retries: {
    runMode: 2,
    openMode: 0,
  },
  video: false,
  setupNodeEvents(on, config) {},
  },
});
