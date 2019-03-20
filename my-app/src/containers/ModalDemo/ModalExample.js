import React from "react";
import { Button, Dropdown, Menu } from "antd";
import Modal from "../../components/modal/CommonModal";
import TreeDemo from "../TreeDemo/TreeDemo";
class ModalExample extends React.Component {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  toggle = () => {
    this.setState({ visible: !this.state.visible });
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          isOpen={this.state.visible}
          toggle={this.toggle}
          size={"lg"}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>
          ]}
        >
          <Dropdown overlay={menu} placement="bottomLeft" trigger="click">
            <Button>bottomLeft</Button>
          </Dropdown>
          <TreeDemo />
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
