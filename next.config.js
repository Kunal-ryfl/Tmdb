/** @type {import('next').NextConfig} */
// const { withPlaiceholder } = require("@plaiceholder/next");
const nextConfig = {
  experimental: {
    appDir: true,
  }, 
  images: {
    remotePatterns: [
      {
        hostname: "image.tmdb.org",
      },
    ],
    unoptimized:true,
  },
  
}

module.exports = nextConfig
