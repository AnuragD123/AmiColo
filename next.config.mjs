/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;

// const nextConfig = {
//     reactStrictMode: true,
//     images: {
//         domains: ['localhost'],
//     }
// }

// export default nextConfig;
