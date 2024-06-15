/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose", // <-- add this
    serverComponentsExternalPackages: ["mongoose"], // <-- and this
  },
  // // and the following to enable top-level await support for Webpack
  webpack: (config) => {
    // config.experiments = {
    //   topLevelAwait: true,
    // };
    config.externals = [...config.externals, "bcrypt"];
    return config;
  },
};

export default nextConfig;
