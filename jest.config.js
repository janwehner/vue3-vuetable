module.exports = {
  globals: {
    "VERSION": "dummy4test"
  },
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\js$": "babel-jest"
  },
  moduleFileExtensions: ['vue', 'js', 'json'],

  "moduleDirectories": [
    "node_modules",
    "src"
  ],
  testEnvironment: 'jsdom',

  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
}
