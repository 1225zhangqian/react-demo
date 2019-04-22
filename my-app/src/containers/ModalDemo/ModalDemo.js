import React from "react";

import { Modal, Button, Dropdown, Menu } from "antd";
import TreeDemo from "../TreeDemo/TreeDemo";
import ModalExample from "./ModalExample";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);
class ModalDemo extends React.Component {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    const style = { color: "red" };
    return (
      <div>
        <h2>have a try</h2>
        <Button type="primary" onClick={this.showModal}>
          Open
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Dropdown overlay={menu} placement="bottomLeft" trigger="click">
            <Button style={style}>bottomLeft</Button>
          </Dropdown>
          <TreeDemo />
        </Modal>
        <ModalExample />
      </div>
    );
  }
}

export default ModalDemo;
