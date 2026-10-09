import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [100, 75],
  },
  // A página do curso passou a ser a principal do site; o endereço antigo /curso leva para ela.
  async redirects() {
    return [
      { source: '/curso', destination: '/', permanent: false },
      { source: '/curso/:caminho*', destination: '/:caminho*', permanent: false },
    ];
  },
};

export default nextConfig;
