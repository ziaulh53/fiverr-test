import React from "react";
import { Checkbox } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const ListItem = ({ desc, isDone, id, onToggleChecked, onDeleteItem }) => {
  const onDelete = () => onDeleteItem(id);
  return (
    <div className="d-flex align-items-center justify-content-between">
      {/* <div className="d-flex align-items-center"> */}
      <Checkbox
        onChange={onToggleChecked}
        checked={isDone}
        id={id}
        className={`to-do-checkbox ${isDone && "line-through"}`}
      >
        {desc}
      </Checkbox>
      {/* </div> */}
      <CloseOutlined onClick={onDelete} className="delete-btn" />
    </div>
  );
};

export default ListItem;
