module.exports = {
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__tests__/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__tests__/__mocks__/fileMock.js',
  },
}
