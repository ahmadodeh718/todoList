import React, { useState } from "react";
import { Modal, Button, Tooltip, Input, Row, Col } from "antd";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { PlusOutlined } from "@ant-design/icons";

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const AddTodoModal = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskName, setTaskName] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
    props.modal(true);
  };

  const handleOk = () => {
    if (taskName) {
      var date = new Date();
      date = date.toUTCString();
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        title: taskName,
        date: date,
        state: undefined,
      });
      setTaskName("");
      setIsModalVisible(false);
      props.modal(false);
    }
  };

  const handleCancel = () => {
    setTaskName("");
    setIsModalVisible(false);
    props.modal(false);
  };

  return (
    <>
      <Tooltip title="Add task">
        <Button
          className="addBtn"
          type="primary"
          shape="circle"
          onClick={showModal}
          icon={<PlusOutlined />}
        />
      </Tooltip>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Row>
          <Col span={16}>
            <Input
              type="text"
              onChange={(e) => setTaskName(e.target.value)}
              value={taskName}
              placeholder="Type Any Task..."
            />
          </Col>
          <Col span={8}>
            <div className="modalBtns">
              <Button className="cancel" onClick={handleCancel} type="primary">Cancel</Button>
              <Button className="done" onClick={handleOk} type="primary">Done</Button>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};
export default connect(null, mapDispatchToProps)(AddTodoModal);
