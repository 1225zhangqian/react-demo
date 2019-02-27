import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './containers/App/App'
import RouterDemo from './containers/RouterDemo/RouterDemo'
import Game from './containers/Game/Game'
import Dynaactionform from './containers/Dynaactionform/Dynaactionform'
import GreetDemo from './containers/GreetDemo/GreetDemo'
import DynnactionList from './containers/DynnactionList/DynnactionList'
import TreeDemo from './containers/TreeDemo/TreeDemo'
import ModalDemo from './containers/ModalDemo/ModalDemo'
import TableDemo from './containers/TableDemo/TableDemo'
import MenuDemo from './containers/MenuDemo/MenuDemo'
// import TodoListDemo from './containers/TodoListDemo/TodoListDemo'

import { Layout, Breadcrumb } from 'antd'
const { Content, Footer } = Layout

const routes = [
  {
    path: '/',
    exact: true,
    Breadcrumb: () => <span>路由</span>,
    main: () => <RouterDemo />
  },
  {
    path: '/RouterDemo',
    Breadcrumb: () => <span>路由</span>,
    main: () => <RouterDemo />
  },
  {
    path: '/Game',
    Breadcrumb: () => <span>Game</span>,
    main: () => <Game />
  },
  {
    path: '/Dynaactionform',
    Breadcrumb: () => <span>Dynaactionform</span>,
    main: () => <Dynaactionform />
  },
  {
    path: '/DynnactionList',
    Breadcrumb: () => <span>DynnactionList</span>,
    main: () => <DynnactionList />
  },
  {
    path: '/GreetDemo',
    Breadcrumb: () => <span>GreetDemo</span>,
    main: () => <GreetDemo />
  },
  {
    path: '/TreeDemo',
    Breadcrumb: () => <span>TreeDemo</span>,
    main: () => <TreeDemo />
  },
  {
    path: '/ModalDemo',
    Breadcrumb: () => <span>ModalDemo</span>,
    main: () => <ModalDemo />
  },
  {
    path: '/TableDemo',
    Breadcrumb: () => <span>TableDemo</span>,
    main: () => <TableDemo />
  },
  {
    path: '/MenuDemo',
    Breadcrumb: () => <span>MenuDemo</span>,
    main: () => <MenuDemo />
  }
  // {
  //   path: '/TodoListDemo',
  //   Breadcrumb: () => <span>TodoListDemo</span>,
  //   main: () => <TodoListDemo />
  // }
]

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          {/* 左侧菜单 */}
          <App />
          {/* 默认显示页面 */}
          <Layout>
            {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.Breadcrumb}
                    />
                  ))}
                </Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                {/* 页面跳转 */}
                {routes.map((route, index) => (
                  // Render more <Route>s with the same paths as
                  // above, but different components this time.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    )
  }
}
export default Routes
