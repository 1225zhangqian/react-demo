import React from 'react'
import { Menu, Icon, Switch, Button, Checkbox, Popover, Dropdown } from 'antd'
import './MenuDemo.css'
const { SubMenu } = Menu
class MenuDemo extends React.Component {
  state = {
    visible: false,
    mode: 'vertical',
    theme: 'light'
  }
  handleMenuClick = e => {
    if (e.key === '3') {
      this.setState({ visible: false })
    }
  }
  handleVisibleChange = flag => {
    this.setState({ visible: flag })
  }
  changeMode = value => {
    this.setState({
      mode: value ? 'vertical' : 'inline'
    })
  }
  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light'
    })
  }
  render() {
    const text = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    )
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    )
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">
          <Popover
            placement="rightTop"
            title={text}
            content={content}
            trigger="click"
          >
            Clicking me will not close the menu.
          </Popover>
        </Menu.Item>
        <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
        <Menu.Item key="3">Clicking me will close the menu</Menu.Item>
      </Menu>
    )
    return (
      <div>
        <Switch onChange={this.changeMode} /> Change Mode
        <span className="ant-divider" style={{ margin: '0 1em' }} />
        <Switch onChange={this.changeTheme} /> Change Theme
        <br />
        <br />
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['']}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          <Menu.Item key="1">
            <Icon type="mail" />
            <Popover
              placement="rightTop"
              title={text}
              content={content}
              trigger="click"
            >
              试试
            </Popover>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="calendar" />
            Navigation Two
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Three</span>
              </span>
            }
          >
            <Menu.Item key="3">
              <Checkbox />Option 3
            </Menu.Item>
            <Menu.Item key="4">
              <Checkbox />Option 4
            </Menu.Item>
            <Menu.Divider />
            <Checkbox>全选</Checkbox>
            {/* <SubMenu key="sub1-2" title="Submenu">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
            </SubMenu> */}
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="setting" />
                <span>Navigation Four</span>
              </span>
            }
          >
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
          </SubMenu>
        </Menu>
        <hr />
        <Dropdown
          overlay={menu}
          trigger={['click']}
          onVisibleChange={this.handleVisibleChange}
          visible={this.state.visible}
        >
          <a className="ant-dropdown-link" href="#">
            Hover me <Icon type="down" />
          </a>
        </Dropdown>
      </div>
    )
  }
}

export default MenuDemo
