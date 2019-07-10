import React, { useState } from 'react'
import List from './list'
import Detail from './detail'
const MyTodoList = () => {
  const [mode, setMode] = useState('view');
  return (
    <div>
      {mode === 'view' ? <List></List> :
        <Detail setMode={() => setMode('view')}></Detail>}
      <div onClick={() => setMode('add')}>新增</div>
    </div>)
}
export default MyTodoList