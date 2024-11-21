/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'engaging-dream-7f75d5f5db.media.strapiapp.com',
                port: ''
            }
        ]
    }
}

export default withNextIntl(nextConfig);
