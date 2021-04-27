module.exports = {
  globals: {
    "VERSION": "dummy4test"
  },
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest"
  },
  moduleFileExtensions: ['vue', 'js', 'json'],

  "moduleDirectories": [
    "node_modules",
    "src"
  ],
}
