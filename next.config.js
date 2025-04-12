const isGithubPages = process.env.DEPLOY_ENV === 'GH_PAGES';
const repo = 'developer-portfolio'; // replace with your repo name

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export', // required for static export
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['avatars.githubusercontent.com'],
  },
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
};

module.exports = nextConfig;
