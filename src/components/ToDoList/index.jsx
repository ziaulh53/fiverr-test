import React, { useState } from "react";
import { Input, Button } from "antd";
import ListItem from "./ListItem";

const ToDoList = ({}) => {
  const [list, setList] = useState(defaultState);
  const [desc, setDesc] = useState("");

  const onChangeValue = (e) => {
    const { value } = e.target;
    setDesc(value);
  };

  const onToggleChecked = (e) => {
    const { checked, id } = e.target;
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
  const onAddTask = () => {
    list.push({ desc, isDone: false, id: Date.now() });
    setList([...list]);
    setDesc("");
  };
  return (
    <section id="to-do-list">
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="text-center title border-bottom mt-5">
              Things to do:
            </div>
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
            <div className="text-center title">
              Done: {list.filter(({ isDone }) => isDone).length}
            </div>
            <div className="d-flex">
              <Input
                onChange={onChangeValue}
                value={desc}
                className="mr-3 add-input"
              />
              <Button
                type="primary"
                onClick={onAddTask}
                className="primary-btn"
                disabled={!desc}
              >
                Add Task
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToDoList;

const defaultState = [
  //   { desc: "de lksdf lasasd fasdf ", isDone: false, id: 1 },
  //   { desc: "de lksdf lasasd fasdf ", isDone: false, id: 2 },
  //   { desc: "de lksdf lasasd fasdf ", isDone: false, id: 3 },
  //   { desc: "de lksdf lasasd fasdf ", isDone: false, id: 4 },
  //   { desc: "de lksdf lasasd fasdf ", isDone: false, id: 5 },
];
