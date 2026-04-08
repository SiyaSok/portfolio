/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.repwise.co.za",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.omni.mrpg.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "6412394.fs1.hubspotusercontent-na1.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "image.blob.ix.co.za",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
