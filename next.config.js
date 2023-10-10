const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/works",
        destination: "/works/cidermics_branding",
        permanent: false,
      },
    ]
  },
}

module.exports = withMDX(nextConfig)
