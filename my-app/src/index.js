import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
/* 1、导入Provider react-redux的文件中没有指定default输出，所以添加大括号 */
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducer/todoApp'
let store = createStore(todoApp)

//去掉传参字符串的显示
/* import { createHashHistory } from 'history'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
 */
// start the app，`render` is an enhanced `ReactDOM.render`
ReactDOM.render(
  //2、将store作为参数传入Provider  provider也是react的一个组件
   <Provider store={store}>
    <Routes />
   </Provider>,
  document.getElementById('root')
)
