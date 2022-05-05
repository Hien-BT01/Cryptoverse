import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const LoadingState = ({ isLoading }) => {
  return (
    <div className="loading-container">
      <Spin
        spinning={isLoading}
        size="large"
        tip="...Loading"
        indicator={<LoadingOutlined style={{ fontSize: "36px" }} />}
      />
    </div>
  );
};

export default LoadingState;
