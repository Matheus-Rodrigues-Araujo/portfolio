/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        const headers = [];
        if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
          headers.push({
            headers: [
              {
                key: 'X-Robots-Tag',
                value: 'index',
              },
            ],
            source: '/:path*',
          });
        }
        return headers;
      },
};


export default nextConfig;

