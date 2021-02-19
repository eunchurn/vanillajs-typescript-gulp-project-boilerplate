import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      diagnostics: true,
    },
    NODE_ENV: "test",
  },
  setupFilesAfterEnv: ["jest-canvas-mock", `${__dirname}/src/setupTests.ts`],
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  modulePathIgnorePatterns: ["dist", "build"],
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1",
    "contexts(.*)$": "<rootDir>/src/contexts/$1",
    "\\.(css|less)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.tsx$": "ts-jest",
  },
  globalSetup: "./jest/global-setup.ts",
  verbose: true,
};

export default config;
// export default {
//   globals: {
//     "ts-jest": {
//       tsconfig: "tsconfig.json",
//     },
//   },
//   rootDir: ".",
//   roots: ["<rootDir>/src/"],
//   moduleFileExtensions: ["ts", "tsx", "js", "json"],
//   modulePathIgnorePatterns: ["dist", "build"],
//   testRegex: "\\.spec|\\.test\\.ts$|\\.test\\.tsx",
//   transform: {
//     "^.+\\.ts$": "ts-jest",
//     "^.+\\.tsx$": "ts-jest",
//   },
//   moduleNameMapper: {
//     "src/(.*)": "<rootDir>/src/$1",
//   },
//   globalSetup: "./jest/global-setup.ts",
//   setupFilesAfterEnv: ["jest-canvas-mock"],
// };
