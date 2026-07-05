/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/pesan",
        destination: "/pesan.html",
        permanent: false,
      },
      {
        source: "/dashboard",
        destination: "/dashboard/index.html",
        permanent: false,
      },
      {
        source: "/invoice",
        destination: "/invoice.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
