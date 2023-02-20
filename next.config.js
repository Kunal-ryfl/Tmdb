/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    scrollRestoration:true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "**.amazonaws.com",
      },
      {
        hostname: "image.tmdb.org",
      },
      {
        hostname: "**.unsplash.com",
      },
    ],
  },
}

module.exports = nextConfig
