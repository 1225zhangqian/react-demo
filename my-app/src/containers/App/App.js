import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout

class App extends Component {
  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">
              <Link to="/RouterDemo">路由</Link>
            </span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">
              <Link to="/Game">Game</Link>
            </span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">
              <Link to="/DynnactionList">DynnactionList</Link>
            </span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="upload" />
            <span className="nav-text">
              <Link to="/Dynaactionform">Dynaactionform</Link>
            </span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="user" />
            <span className="nav-text">
              <Link to="/GreetDemo">GreetDemo</Link>
            </span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="user" />
            <span className="nav-text">
              <Link to="/TreeDemo">TreeDemo</Link>
            </span>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="user" />
            <span className="nav-text">
              <Link to="/ModalDemo">ModalDemo</Link>
            </span>
          </Menu.Item>
          <Menu.Item key="8">
            <Icon type="user" />
            <span className="nav-text">
              <Link to="/TableDemo">TableDemo</Link>
            </span>
          </Menu.Item>
          <Menu.Item key="9">
            <Icon type="user" />
            <span className="nav-text">
              <Link to="/MenuDemo">MenuDemo</Link>
            </span>
          </Menu.Item>
          <Menu.Item key="10">
            <Icon type="user" />
            <span className="nav-text">
              <Link to="/TodoListDemo">TodoListDemo</Link>
            </span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
export default App
