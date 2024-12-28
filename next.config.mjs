/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'xcta-space.sgp1.digitaloceanspaces.com',
              pathname: '/**', // Mendukung semua jalur di domain ini
            },
          ],
        domains: ['xcta-space.sgp1.digitaloceanspaces.com'],
    },
};

export default nextConfig;
