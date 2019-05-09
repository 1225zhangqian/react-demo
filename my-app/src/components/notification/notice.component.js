import React, { Component } from 'react';
export default class Notice extends Component {

  componentDidMount() {
    this.startCloseTimer();
  }

  componentDidUpdate(prevProps) {
    if (this.props.duration !== prevProps.duration
      || this.props.update) {
      this.restartCloseTimer();
    }
  }

  componentWillUnmount() {
    this.clearCloseTimer();
  }

  close = (e) => {
    if (e) {
      e.stopPropagation();
    }
    this.clearCloseTimer();
    this.props.onClose();
  }

  startCloseTimer = () => {
    if (this.props.duration) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, this.props.duration * 1000);
    }
  }

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }

  restartCloseTimer() {
    this.clearCloseTimer();
    this.startCloseTimer();
  }

  render() {
    const props = this.props;
    const componentClass = `${props.prefixCls}-notice`;
    return (
      <span className="notificationWrap">
        <div
          className={`${componentClass} ${componentClass}-closable`}
          style={props.style}
          onMouseEnter={this.clearCloseTimer}
          onMouseLeave={this.startCloseTimer}
          onClick={props.onClick}
        >
          <div className={`${componentClass}-content`}>{props.children}</div>
          <img src="" alt="close" onClick={this.close} />
        </div>
      </span>
    );
  }
}