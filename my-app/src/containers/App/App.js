import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout

class App extends Component {
  render() {
    const routes = this.props.routes
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
          {routes.map((n, i) => {
            return (
              <Menu.Item key={i}>
                <Icon type={n.iconType} />
                <span className="nav-text">
                  <Link to={n.path}>{n.name}</Link>
                </span>
              </Menu.Item>
            )
          })}
        </Menu>
      </Sider>
    )
  }
}
export default App
