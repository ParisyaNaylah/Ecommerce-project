module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",  // Menentukan jsdom untuk pengujian React
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"  // Memastikan toBeInTheDocument tersedia
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Jika menggunakan Babel untuk transformasi
  },
  moduleFileExtensions: ["js", "jsx"],
};
