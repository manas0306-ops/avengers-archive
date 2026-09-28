/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: isGithubPages ? '/avengers-archive' : '',
  assetPrefix: isGithubPages ? '/avengers-archive/' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'cdn.marvel.com' },
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'wallpapercave.com' },
      { protocol: 'https', hostname: 'assets.codepen.io' },
    ],
  },
};

export default nextConfig;
