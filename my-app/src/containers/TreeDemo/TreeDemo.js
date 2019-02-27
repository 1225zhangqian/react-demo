import React from 'react'
import { Tree, Menu, Dropdown, Icon } from 'antd'
const TreeNode = Tree.TreeNode

const treeData = [
  {
    title: '0-0 ',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' }
        ]
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' }
        ]
      },
      {
        title: '0-0-2',
        key: '0-0-2'
      }
    ]
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
      { title: '0-1-0-1', key: '0-1-0-1' },
      { title: '0-1-0-2', key: '0-1-0-2' }
    ]
  },
  {
    title: '0-2',
    key: '0-2'
  }
]
function MyDropdown() {


  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" href="#">
        Hover me <Icon type="down" />
      </a>
    </Dropdown>
  )
}
class TreeDemo extends React.Component {
  state = {
    expandedKeys: [],
    autoExpandParent: true,
    checkedKeys: ['0-0-0'],
    selectedKeys: []
  }
  onExpand = expandedKeys => {
    console.log('onExpand')
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    this.setState({
      expandedKeys,
      autoExpandParent: false
    })
  }
  onCheck = checkedKeys => {
    console.log('onCheck', checkedKeys)
    this.setState({ checkedKeys })
  }
  onSelect = (selectedKeys, info) => {
    console.log('onSelect', info)
    this.setState({ selectedKeys })
  }
  renderTreeNodes = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={this.renderMyDropdown(item.title)} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        )
      }
      return <TreeNode {...item} />
    })
  }

  renderMyDropdown(title) {
    return (
      <span>
        {title}
        <MyDropdown />
      </span>
    )
  }
  render() {
    return (
      <div>
        <MyDropdown />
        <Tree
          onExpand={this.onExpand}
          expandedKeys={this.state.expandedKeys}
          autoExpandParent={this.state.autoExpandParent}
        >
          {this.renderTreeNodes(treeData)}
        </Tree>
      </div>
    )
  }
}

export default TreeDemo
