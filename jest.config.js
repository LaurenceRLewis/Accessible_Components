module.exports = {
  testEnvironment: "jsdom",  // important for DOM-related tests
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};