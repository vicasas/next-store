module.exports = {
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  snapshotResolver: '<rootDir>/__tests__/config/snapshotResolver.js',
  moduleNameMapper: {
    // '\\.(css|less|sass|scss)$': '<rootDir>/__tests__/__mocks__/styleMock.js', // For css
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // For module css
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__tests__/__mocks__/fileMock.js',
  },
}
