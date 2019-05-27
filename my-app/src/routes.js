import React from 'react'
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

const routes = [
  {
    path: '/home',
    exact: true,//当路径与path完全匹配的时候才会显示，默认为false，若为false，则显示子路由的时候，头部会展示
    name: '路由',
    Breadcrumb: () => <span>路由</span>,
    main: () => <RouterDemo />,
    iconType: 'user'
  },
  {
    path: '/home/RouterDemo',
    Breadcrumb: () => <span>路由</span>,
    name: '路由',
    main: () => <RouterDemo />,
    iconType: 'video-camera'
  },
  {
    path: '/home/Game',
    Breadcrumb: () => <span>Game</span>,
    name: 'Game',
    main: () => <Game />,
    iconType: 'upload'
  },
  {
    path: '/home/Dynaactionform',
    Breadcrumb: () => <span>Dynaactionform</span>,
    name: 'Dynaactionform',
    main: () => <Dynaactionform />,
    iconType: 'user'
  },
  {
    path: '/home/DynnactionList',
    Breadcrumb: () => <span>DynnactionList</span>,
    name: 'DynnactionList',
    main: () => <DynnactionList />,
    iconType: 'user'
  },
  {
    path: '/home/GreetDemo',
    name: 'GreetDemo',
    Breadcrumb: () => <span>GreetDemo</span>,
    main: () => <GreetDemo />,
    iconType: 'user'
  },
  {
    path: '/TreeDemo',
    name: 'TreeDemo',
    Breadcrumb: () => <span>TreeDemo</span>,
    main: () => <TreeDemo />,
    iconType: 'user'
  },
  {
    path: '/ModalDemo',
    name: 'ModalDemo',
    Breadcrumb: () => <span>ModalDemo</span>,
    main: () => <ModalDemo />,
    iconType: 'user'
  },
  {
    path: '/TableDemo',
    name: 'TableDemo',
    Breadcrumb: () => <span>TableDemo</span>,
    main: () => <TableDemo />
  },
  {
    path: '/MenuDemo',
    name: 'MenuDemo',
    Breadcrumb: () => <span>MenuDemo</span>,
    main: () => <MenuDemo />,
    iconType: 'user'
  }
  // {
  //   path: '/TodoListDemo',
  //   Breadcrumb: () => <span>TodoListDemo</span>,
  //   main: () => <TodoListDemo />
  // }
]
export default routes
