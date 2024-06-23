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
}

module.exports = nextConfig
