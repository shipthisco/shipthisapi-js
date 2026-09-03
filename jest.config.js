export default {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  // NodeNext source imports carry .js extensions; map them back to .ts.
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(?!d\\.ts$)ts$',
  // tests/*.spec.js|.d.ts are committed build artifacts, not suites.
  // build.spec.ts / main.spec.ts hit the live Shipthis API and need real
  // credentials, so they are excluded from the offline suite.
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '\\.d\\.ts$',
    '/tests/.*\\.spec\\.js$',
    '/tests/build\\.spec\\.ts$',
    '/tests/main\\.spec\\.ts$',
  ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts'],
  testTimeout: 30000,
};
