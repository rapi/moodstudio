import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mir-s3-cdn-cf.behance.net',
            },
        ],
    },
    transpilePackages: [
        'antd',
        '@ant-design/cssinjs',
        '@ant-design',
        '@rc-component/util',
        '@rc-component/icon',
        'rc-util',
        'rc-picker',
    ],
};

export default nextConfig;
