/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Hostinger shared hosting
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
