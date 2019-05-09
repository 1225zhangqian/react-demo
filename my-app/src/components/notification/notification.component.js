import React from "react";
import * as ReactDOM from "react-dom";
import Notice from './notice.component'
const typeToIcon = {
  warning: '../images/alert-outlinesvg.svg'
}
let defaultDuration = 4.5;
let defaultTop = 24;
let defaultBottom = 24;

const getPlacementStyle = (placement) => {
  let style;
  switch (placement) {
    case 'topLeft':
      style = {
        left: 0,
        top: defaultTop,
        bottom: 'auto',
      };
      break;
    case 'topRight':
      style = {
        right: 0,
        top: defaultTop,
        bottom: 'auto',
      };
      break;
    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom: defaultBottom,
      };
      break;
    default:
      style = {
        right: 0,
        top: 'auto',
        bottom: defaultBottom,
      };
      break;
  }
  return style;
}

const NotificationRender = (props) => {
  const outerPrefixCls = props.prefixCls || 'IS-notification';
  const prefixCls = `${outerPrefixCls}-notice`;

  let iconNode = null;
  if (props.icon) {
    iconNode = (
      <span className={`${prefixCls}-icon`}>
        {props.icon}
      </span>
    );
  } else if (props.type) {
    const iconType = typeToIcon[props.type];
    iconNode = (
      <img
        className={`${prefixCls}-icon`}
        src={iconType} alt="icon"
      />
    );
  }

  let content = null;
  content = (
    <div className={iconNode ? `${prefixCls}-with-icon` : ''} style={getPlacementStyle(props.placement)}>
      {iconNode}
      <div className={`${prefixCls}-message`}>
        {props.message}
      </div>
      <div className={`${prefixCls}-description`}>{props.description}</div>
      {props.btn ? <span className={`${prefixCls}-btn`}>{props.btn}</span> : null}
    </div>
  )

  return content;
}

const open = (props) => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  const prefixCls = props.prefixCls || 'IS-notification';
  const duration = props.duration === undefined ? defaultDuration : props.duration;
  let currentProps = {
    ...props,
    prefixCls,
    duration,
    onClose: close
  };
  function close() {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }
  function render(props) {
    ReactDOM.render(<Notice {...props}>
      <NotificationRender {...props} />
    </Notice>, div);
  }

  render(currentProps);
}
const Notification = {
  open: (props) => open({ ...props })
};

export default Notification;
