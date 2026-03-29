export default {
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/*.js", "!src/.internal/**"],
  modulePathIgnorePatterns: ["<rootDir>/src/.internal/"],
};
