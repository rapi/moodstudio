// Loading.tsx
import React, { FC } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styles from "./Loading.module.css";

export const Loading: FC = () => {
    return (
        <div className={styles.loading}>
            <Spin
                indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
            />
        </div>
    );
};

