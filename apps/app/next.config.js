/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcPlugins: [["next-superjson-plugin", {}]],
    transpilePackages: ["@acme/ui"],
  },
};

module.exports = nextConfig;
