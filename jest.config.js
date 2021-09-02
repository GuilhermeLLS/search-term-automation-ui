export const testEnvironment = "jsdom";
export const testPathIgnorePatterns = ["/node_modules/"];
export const testMatch = ["**/__tests__/**/*.test.[jt]s?(x)"];
export const collectCoverage = false;
export const collectCoverageFrom = [
  "src/**/*.{ts,tsx}",
  "!src/**/__tests__/*.{ts,tsx}",
  "!src/**/*.stories.tsx",
];
export const setupFilesAfterEnv = ["<rootDir>/src/setupTests.ts"];
export const modulePaths = ["<rootDir>/src/", "<rootDir>/.jest"];
export const resetMocks = true;
