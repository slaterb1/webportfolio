/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/commons/1/14/No_Image_Available.jpg'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/benjamin',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
