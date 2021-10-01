import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import CustomCheckbox from "./CustomCheckbox";

const ListItem = ({ desc, isDone, id, onToggleChecked, onDeleteItem }) => {
  const onDelete = () => onDeleteItem(id);
  console.log({ isDone });
  return (
    <div className="list-item">
      <div
        className={`d-flex align-items-center ${isDone && "blur-item"}`}
        onClick={() => onToggleChecked({ id, checked: !isDone })}
      >
        <CustomCheckbox isDone={isDone} />
        {desc}
      </div>
      <CloseOutlined onClick={onDelete} className="delete-btn" />
    </div>
  );
};

export default ListItem;
