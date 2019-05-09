import React, { Component } from 'react';
import { Fade } from 'reactstrap';
export default class Animate extends Component {
  state = {
    fadeinenter: false,
    fadeoutenter: false
  }
  onEnter = () => {
    console.log('onEnter')
    this.setState({ fadeinenter: true })
  }
  onEntered = () => {
    console.log('onEntered')
    this.setState({ fadeinenter: false })
  }
  onExit = () => {
    console.log('onExit')
    this.setState({ fadeoutenter: true })
  }
  onExited = () => {
    console.log('onExited')
    this.props.onExited()
    this.setState({ fadeoutenter: false })
  }
  render() {
    const prefixCls = this.props.className
    const componentClass = `${prefixCls}-fade`
    const fadeinenter = this.state.fadeinenter ? `${componentClass}-bouncein-enter` : ''
    const fadeoutenter = this.state.fadeoutenter ? `${componentClass}-fadeout` : ''
    return (
      <Fade
        in={this.props.fadein}
        onEnter={this.onEnter}
        onEntered={this.onEntered}
        onExit={this.onExit}
        onExited={this.onExited}
        className={`${componentClass}  ${fadeinenter} ${fadeoutenter}`}
      >
        {this.props.children}
      </Fade >
    );
  }
}