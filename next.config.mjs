import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/shop/imprimables", destination: "/shop", permanent: false }];
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" }
    ]
  }
};

export default withMDX(nextConfig);
