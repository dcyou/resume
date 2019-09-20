module.exports = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1",
    "^vue$": "vue/dist/vue.common.js"
    // "\\.(css|less)$": "<rootDir>/test/__mocks__/styleMock.js"
  },
  moduleFileExtensions: ["js", "vue", "json", "yml"],
  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "vue-jest",
    ".*\\.yml$": "<rootDir>/test/__loaders__/jest-raw-loader.js"
  },
  collectCoverage: false,
  collectCoverageFrom: [
    "<rootDir>/components/**/*.vue",
    "<rootDir>/pages/**/*.vue"
  ],
  coverageReporters: ["text-lcov"],
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"]
}
