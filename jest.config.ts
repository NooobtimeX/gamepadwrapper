import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom", // Use the installed jsdom environment
  setupFiles: ["<rootDir>/jest.setup.ts"], // If using jest.setup.ts
  roots: ["<rootDir>/src"], // Point to the src folder for tests
  testMatch: ["**/*.test.ts"], // Match test files
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

export default config;
