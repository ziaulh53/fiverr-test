import { CloseOutlined } from "@ant-design/icons";
import React from "react";

const CustomCheckbox = ({ isDone }) => {
  return (
    <div className="custom-checkbox">
      {isDone && <CloseOutlined className="close-icon" />}
    </div>
  );
};

export default CustomCheckbox;
