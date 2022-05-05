import { Typography, Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  const backToHomeHandler = () => {
    history.push("/");
  };

  return (
    <div className="NotFound">
      <Typography.Title level={2} type="warning">
        404 Not Found
      </Typography.Title>
      <Button onClick={backToHomeHandler} type='primary'>Back to home</Button>
    </div>
  );
};

export default NotFound;
