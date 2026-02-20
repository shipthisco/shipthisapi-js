export default {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(?!d\\.ts$)ts$',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts'],
  testTimeout: 30000,
};
