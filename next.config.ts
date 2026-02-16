import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // Only use proxy in development to avoid CORS issues
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/api/members/:path*',
          destination: 'http://localhost:8000/members/:path*',
        },
      ];
    }
    // In production, no rewrites needed - use direct API calls
    return [];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: process.env.NEXT_PUBLIC_MINIO_PROTOCOL || 'http',
        hostname: process.env.NEXT_PUBLIC_MINIO_HOSTNAME || 'localhost',
        port: process.env.NEXT_PUBLIC_MINIO_PORT || '9000',
        pathname: `/${process.env.NEXT_PUBLIC_MINIO_BUCKET || 'jaram-profiles'}/**`,
      },
    ],
  },
};

export default nextConfig;
