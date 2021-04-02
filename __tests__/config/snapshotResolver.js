module.exports = {
  // resolves from test to snapshot path
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath.replace('__tests__', '__tests__/__snapshots__') +
    snapshotExtension,

  // resolves from snapshot to test path
  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath
      .replace('__tests__/__snapshots__', '__tests__')
      .slice(0, -snapshotExtension.length),

  // Resolved from snapshots in each test folder
  // resolveSnapshotPath: (testPath, snapshotExtension) =>
  //   testPath + snapshotExtension,
  // resolveTestPath: (snapshotFilePath, snapshotExtension) =>
  //   snapshotFilePath.slice(0, -snapshotExtension.length),

  // Example test path, used for preflight consistency check of the implementation above
  testPathForConsistencyCheck: 'some/__tests__/example.test.js',
}
