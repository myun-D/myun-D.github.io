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
  skipMiddlewareUrlNormalize: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
}

module.exports = withMDX(nextConfig)
