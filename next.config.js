const packageJson = require('./package.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    appVersion: packageJson.version || '',
    commitId: process.env.AWS_COMMIT_ID || '',
  },
};

module.exports = nextConfig;
