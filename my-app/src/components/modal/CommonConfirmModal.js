/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react";
import * as ReactDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ConfirmDialog = props => {
  return (
    <Modal {...props}>
      <ModalHeader toggle={props.close}>{props.title}</ModalHeader>
      <ModalBody>{props.content}</ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={props.close}>
          {props.cancelText}
        </Button>
        <Button color="primary" onClick={props.close}>
          {props.okText}
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default function confirm(props) {
  const div = document.createElement("div");
  document.body.appendChild(div);
  let currentProps = { ...props, isOpen: true, close };
  function close() {
    currentProps = {
      ...currentProps,
      isOpen: false
    };
    render(currentProps);
  }
  function render(props) {
    ReactDOM.render(<ConfirmDialog {...props} />, div);
  }
  render(currentProps);
}
