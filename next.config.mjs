/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s4.anilist.co"
            }
        ]
    }
};

export default nextConfig;