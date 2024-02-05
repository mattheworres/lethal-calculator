/** @type {import('ts-jest').JestConfigWithTsJest} */
// import '@testing-library/jest-dom';

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '\\.(css|lessjpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/fileTransformer.js',
  }
};