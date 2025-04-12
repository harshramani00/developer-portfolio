module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  output: "standalone",
};
const isGithubPages = process.env.DEPLOY_ENV === 'GH_PAGES';

module.exports = {
  basePath: isGithubPages ? '/developer-portfolio' : '',
  assetPrefix: '/developer-portfolio/',
  trailingSlash: true,
};
