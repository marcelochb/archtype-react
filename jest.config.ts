
export default {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/file.mock.ts',
    '\\.(css|less)$': '<rootDir>/test/__mocks__/style.mock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/test/setup.tests.ts'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}', 
    '!**/*.d.ts', 
    '!**/node_modules/**', 
    '!**/vendor/**'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec).+(ts|tsx|js)',
  ],
  rootDir: './',
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: [
    'filter',
    'index.ts',
    '.dto.ts',
    '.request.ts',
    '.response.ts',
    '.entity.repository.ts',
    '.entity.ts',
    '.event.ts',
    '.module.ts',
    '.service.ts',
  ], 
};