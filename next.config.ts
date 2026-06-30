import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/haramura_manual",
        destination: "/haramura/manual",
        permanent: true,
      },
      {
        source: "/himeki_manual",
        destination: "/himeki/manual",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
