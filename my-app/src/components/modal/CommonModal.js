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
      isOpen: props.isOpen,
      ModalId: props.ModalId
    };
  }
  toggle = () => {
    this.props.toggle(this.state.ModalId);
  };
  handleOk = e => {
    const onOk = this.props.onOk;
    if (onOk) {
      onOk(e, this.state.ModalId);
    }
  };
  handleCancel = e => {
    const onCancel = this.props.onCancel;
    if (onCancel) {
      onCancel(e, this.state.ModalId);
    }
  };
  renderModalBody() {
    // const attributes = omit(this.props, propsToOmit);
    return <ModalBody>{this.props.children}</ModalBody>;
  }
  renderModalFooter() {
    const { okText, okType, cancelText, confirmLoading } = this.props;
    const defaultFooter = (
      <ModalFooter>
        <Button
          color="secondary"
          onClick={this.handleCancel}
          {...this.props.cancelButtonProps}
        >
          {cancelText || ModalLocale.cancelText}
        </Button>
        <Button
          color="primary"
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
