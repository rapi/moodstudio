import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
