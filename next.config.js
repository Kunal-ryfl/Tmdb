/** @type {import('next').NextConfig} */
// const { withPlaiceholder } = require("@plaiceholder/next");
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "image.tmdb.org",
      },
    ],
    unoptimized:true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  
}

module.exports = nextConfig
