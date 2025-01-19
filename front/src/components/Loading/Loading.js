import { Spin } from "antd";
import "./Loading.css";
import { LoadingOutlined } from "@ant-design/icons";

export const Loading = () => {
  return (
    <div className="loading">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    </div>
  );
};
