import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    transpilePackages: [
        'antd',
        '@ant-design',
        'rc-util',
        // …any others
    ],
};

export default nextConfig;
