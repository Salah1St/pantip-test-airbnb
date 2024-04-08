/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_URL: process.env.API_URL,
    INNER_API_URL: process.env.INNER_API_URL,
  },
};

export default nextConfig;
