/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, {isServer}) => {
    if(!isServer){
      config.optimization.minimize = true;
    }
    return config
  },
  swcMinify: true,
  compiler: {
    removeConsole: true,
  },
  compress: true,
  experimental: {
    nextScriptWorkers: true
  }
};

export default nextConfig;
