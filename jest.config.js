module.exports = {
    roots: ['<rootDir>'],
    transform: {
        '\\.(js|jsx|ts|tsx)?$': 'babel-jest',
        ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css",
        ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
    },
    testMatch: ['<rootDir>/__test__/**/*.test.{js,jsx,ts,tsx}'],
    collectCoverage: true,
    coverageReporters: ['lcov'],
    coverageDirectory: 'coverage',
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
    },
    testResultsProcessor: 'jest-sonar-reporter',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
