import React, { Component } from "react";
//es6解构赋值
//相当于直接从react中引入component类（同名引入）
import { LocaleProvider, DatePicker, message } from "antd";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from "antd/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import "antd/dist/antd.css";
import Child from "./childTest";
moment.locale("zh-cn");

const element = <h1>Hello</h1>;

class GreetingDemo extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
//  const Welcome = props => {
//   props = {
//     name: 'change'
//   }
//   /* props.name = 'change' */
//   return <h1>hello,{props.name}</h1>
// }

/* 无状态函数式组件 */
function Welcome(props) {
  //不可修改
  //props.name = 'change'//报错
  let b = props;

  props = {
    name: "change"
  };
  //b.name = 'change'
  /*  js的引用赋值与传值赋值
    对象和数组是通过引用赋值
    直接将props赋值为另一个对象，并没有改变输入的对象本身
    而通过‘。’的形式去改变对象属性则发生了变化，违反了props只读的规则
    https://www.cnblogs.com/cench/p/6019453.html
  */
  return <h1>hello,{b.name}</h1>;
}

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
  }
  handleChange(date) {
    //消息提示
    message.info("您选择的日期是: " + (date ? date.toString() : ""));
    this.setState({ date });
  }
  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <div>
          <Child />
          <DatePicker onChange={value => this.handleChange(value)} />
          <div style={{ marginTop: 20 }}>
            当前日期：{this.state.date && this.state.date.toString()}
          </div>
        </div>
      </LocaleProvider>
    );
  }
}

function UserGreeting(props) {
  return <h1>{props.message}</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props) {
  const message = props.message;
  console.log(message);
  if (message) {
    return <UserGreeting message={message} />;
  }
  return <GuestGreeting />;
}

class GreetDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    /*  用箭頭函數優化，可以省去綁定this的操作
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this) */
    /* this.handleClick = this.handleClick.bind(this) */
  }
  handleClick = () => {
    // 通过使用原生API，显式地聚焦text输入框
    this.textInput.focus();
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    alert("A name was submitted: " + this.input.value);
    console.log(this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Welcome name="yc" />
        <Time />
        <p>受控组件</p>
        <p>在受控组件中，表单数据由 React 组件负责处理</p>
        <hr />
        <label>
          Name2:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <Greeting message={this.state.value} />
        <p>不受控组件</p>
        <p>
          不受控组件，其表单数据由 DOM 元素本身处理,使用一个 ref 来从 DOM 获得
          表单值，而不是为每个状态更新编写一个事件处理程序
        </p>
        <hr />
        <div style={{ marginBottom: 20 }}>
          <div
            dangerouslySetInnerHTML={{
              __html: `<p>
            在实例中通过使用ref回调函数来存储text输入框的DOM元素引用(例如: this.textInput) 组件挂载或卸载时，会触发ref回调。例
            ref={input => { this.textInput = input }}，挂载时，this.textInput等于当前input；当卸载时，等于null
          </p>`
            }}
          />

          <input
            type="text"
            ref={input => {
              this.textInput = input;
            }}
          />
          <input
            type="button"
            value="Focus the text input"
            onClick={this.handleClick}
          />
        </div>
        <label>
          Name1:
          <input type="text" ref={input => (this.input = input)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default GreetDemo;
