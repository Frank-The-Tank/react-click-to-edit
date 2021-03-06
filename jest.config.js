module.exports = {
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js"
  },
  setupTestFrameworkScriptFile: "<rootDir>/src/setupTests.js",
  // https://jestjs.io/docs/en/configuration.html#snapshotserializers-array-string
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
