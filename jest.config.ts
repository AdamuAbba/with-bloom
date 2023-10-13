const config = {
	testEnvironment: "jsdom",
	roots: ["<rootDir>/src"],
	testMatch: [
		"**/__tests__/**/*.+(ts|tsx|js)",
		"**/?(*.)+(spec|test).+(ts|tsx|js)",
	],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
	setupFilesAfterEnv: [
		"@testing-library/jest-dom",
		"<rootDir>/jest/jest-setup.ts",
	],
};

export default config;
