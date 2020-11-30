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
import Algorithm from './containers/Algorithm'
import TodoListDemo from './containers/TodoListDemo/TodoListDemo'
import MyTodoList from './containers/MyTodoList'
import ThemeDemo from './containers/ThemeProvider/theme/demo'

const routes = [
  {
    path: '/home',
    exact: true,//当路径与path完全匹配的时候才会显示，默认为false，若为false，则显示子路由的时候，头部会展示
    name: 'home',
    Breadcrumb: () => <span>home</span>,
    main: () => <Algorithm />,
    iconType: 'user'
  },
  {
    path: '/home/Algorithm',
    Breadcrumb: () => <span>Algorithm</span>,
    name: 'Algorithm',
    main: () => <Algorithm />,
    iconType: 'video-camera'
  },
  {
    path: '/home/RouterDemo',
    Breadcrumb: () => <span>router</span>,
    name: 'router',
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
    main: () => <TableDemo />,
    iconType: 'user'
  },
  {
    path: '/MenuDemo',
    name: 'MenuDemo',
    Breadcrumb: () => <span>MenuDemo</span>,
    main: () => <MenuDemo />,
    iconType: 'user'
  },
  {
    path: '/TodoListDemo',
    name: 'TodoListDemo',
    Breadcrumb: () => <span>TodoListDemo</span>,
    main: () => <TodoListDemo />,
    iconType: 'user'
  },
  {
    path: '/MyTodoList',
    name: 'MyTodoList',
    Breadcrumb: () => <span>MyTodoList</span>,
    main: () => <MyTodoList />,
    iconType: 'user'
  },
  {
    path: '/ThemeDemo',
    name: 'ThemeDemo',
    Breadcrumb: () => <span>ThemeDemo</span>,
    main: () => <ThemeDemo />,
    iconType: 'user'
  }
]
export default routes
