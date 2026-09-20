// GITHUB_PAGES=1 serves the static export from /Project-birthday (the live demo).
const basePath = process.env.GITHUB_PAGES === "1" ? "/Project-birthday" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Hostinger shared hosting
  output: "export",
  images: { unoptimized: true },
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
