import React, { useState } from "react";
import { Button, Tooltip,Input } from "antd";
import {
  DeleteFilled,
  EditOutlined,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { removeTodo, setTodoStatus, setTodoName } from "../redux/reducer";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (obj) => dispatch(removeTodo(obj)),
    setTodoStatus: (obj) => dispatch(setTodoStatus(obj)),
    setTodoName: (obj) => dispatch(setTodoName(obj)),
  };
};

const TaskCard = (props) => {
  const [editName, setEditName] = useState(false);
  const deleteTodo = () => {
    props.removeTodo({ id: props.id });
  };
  const changeStatus = (state) => {
    props.setTodoStatus({ id: props.id, state });
  };
  const changeTitle = (e) => {
    e.preventDefault();
    if (e.target[0].value !== "") {
      props.setTodoName({ id: props.id, title: e.target[0].value });
      setEditName(false);
    }
  };
  return (
    <div className={props.state ? "taskCard " + props.state : "taskCard"}>
      <div className="date">{props.date}</div>
      {editName ? (
        <form onSubmit={changeTitle}>
          <Input className="editInput" defaultValue={props.title} type="text" />
          <Button type="primary" htmlType="submit"
           
          >submit</Button>
        </form>
      ) : (
        <div className="taskTitle">{props.title}</div>
      )}
      <div className="cardBtn">
        <Tooltip title="Delete">
          <Button
            className="delteBtn"
            type="primary"
            shape="circle"
            onClick={deleteTodo}
            icon={<DeleteFilled />}
          />
        </Tooltip>
        {!props.state && (
          <>
            <Tooltip title="Edit">
              <Button
                className="editBtn"
                type="primary"
                shape="circle"
                icon={<EditOutlined />}
                onClick={() => setEditName(true)}
              />
            </Tooltip>
            <Tooltip title="cancele">
              <Button
                className="delteBtn"
                type="primary"
                shape="circle"
                onClick={() => changeStatus("canceled")}
                icon={<CloseOutlined />}
              />
            </Tooltip>
            <Tooltip title="complete">
              <Button
                className="completeBtn"
                type="primary"
                shape="circle"
                onClick={() => changeStatus("completed")}
                icon={<CheckOutlined />}
              />
            </Tooltip>
          </>
        )}
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(TaskCard);
