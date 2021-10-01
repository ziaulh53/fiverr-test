import React, { useState } from "react";
import { Input, Button } from "antd";
import ListItem from "./ListItem";
import { PlusOutlined } from "@ant-design/icons";

const ToDoList = ({}) => {
  const [list, setList] = useState(defaultState);
  const [desc, setDesc] = useState("");

  const onChangeValue = (e) => {
    const { value } = e.target;
    setDesc(value);
  };

  const onToggleChecked = ({ checked, id }) => {
    let updatedList = list.map((item) => {
      if (item.id === id) item.isDone = checked;
      return item;
    });
    setList(updatedList);
  };
  const onDeleteItem = (id) => {
    let updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };
  const onAddTaskByPress = (e) => {
    if (e.key === "Enter" && desc) {
      list.push({ desc, isDone: false, id: Date.now() });
      setList([...list]);
      setDesc("");
    }
  };
  const onAddTask = (e) => {
    if (desc) {
      list.push({ desc, isDone: false, id: Date.now() });
      setList([...list]);
      setDesc("");
    }
  };
  console.log(list);
  return (
    <section id="to-do-list-1">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="text-center title mt-5">My to-do-list</div>
            {list.length === 0 && (
              <p className="empty-text text-center">
                Looks like you are absolutely free today!
              </p>
            )}
            {list.map((item) => (
              <ListItem
                {...item}
                key={item.id}
                onDeleteItem={onDeleteItem}
                onToggleChecked={onToggleChecked}
              />
            ))}
            <div className="d-flex add-box">
              <PlusOutlined className="plus-icon" onClick={onAddTask} />
              <Input
                onKeyPress={onAddTaskByPress}
                onChange={onChangeValue}
                value={desc}
                className="mr-3 add-input"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToDoList;

const defaultState = [
  // { desc: "de lksdf lasasd fasdf ", isDone: false, id: 1 },
  // { desc: "de lksdf lasasd fasdf ", isDone: false, id: 2 },
  // { desc: "de lksdf lasasd fasdf ", isDone: false, id: 3 },
  // { desc: "de lksdf lasasd fasdf ", isDone: false, id: 4 },
  // { desc: "de lksdf lasasd fasdf ", isDone: false, id: 5 },
];
