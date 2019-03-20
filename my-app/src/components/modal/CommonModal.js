/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalLocale = {
  okText: "ok",
  cancelText: "cancel",
  justOkText: "ok"
};

class CommonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen
    };
  }
  showConfirm() {
    Modal.confirm({
      title: "Do you Want to delete these items?",
      content: "Some descriptions",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  }
  renderModalBody() {
    // const attributes = omit(this.props, propsToOmit);
    return (
      <ModalBody>
        <Button onClick={this.showConfirm}>Confirm</Button>
        {this.props.children}
      </ModalBody>
    );
  }
  renderModalFooter() {
    const { okText, okType, cancelText, confirmLoading } = this.props;
    const defaultFooter = (
      <ModalFooter>
        <Button onClick={this.handleCancel} {...this.props.cancelButtonProps}>
          {cancelText || ModalLocale.cancelText}
        </Button>
        <Button
          type={okType}
          loading={confirmLoading}
          onClick={this.handleOk}
          {...this.props.okButtonProps}
        >
          {okText || ModalLocale.okText}
        </Button>
      </ModalFooter>
    );
    const footer =
      this.props.footer === undefined ? (
        defaultFooter
      ) : (
        <ModalFooter>{this.props.footer}</ModalFooter>
      );
    return footer;
  }
  render() {
    const {
      footer,
      visible,
      wrapClassName,
      centered,
      prefixCls,
      ...restProps
    } = this.props;

    return (
      <div>
        <Modal {...this.props}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          {this.renderModalBody()}
          {this.renderModalFooter()}
        </Modal>
      </div>
    );
  }
}

export default CommonModal;
