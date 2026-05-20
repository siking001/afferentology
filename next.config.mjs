/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
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
