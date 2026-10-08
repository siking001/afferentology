/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.public.blob.vercel-storage.com' },
      { protocol: 'https', hostname: 'd1ddrv8boso99h.cloudfront.net' },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/the-science-of-afferentology',
        destination: '/science',
        permanent: true, // 301 redirect (best for SEO)
      },
      {
        source: '/the-science-of-afferentology/',
        destination: '/science',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
