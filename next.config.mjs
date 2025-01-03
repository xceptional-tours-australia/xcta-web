/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'xcta-contents.sgp1.digitaloceanspaces.com',
              pathname: '/**',
            },
          ],
        domains: ['xcta-contents.sgp1.digitaloceanspaces.com'],
    },
};

export default nextConfig;
