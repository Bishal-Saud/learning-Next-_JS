/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/users",
        destination: "/",
        permanent: false,
      },
      {
        source: "/users/:id",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
