import React, { useState, useEffect } from 'react'
import { dataList } from './data'
import List from './list'
import Detail from './detail'
const MyTodoList = () => {
  const [mode, setMode] = useState('view');
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentCount, updateCurrentCount] = useState(1)
  useEffect(() => {
    updateCurrentCount(dataList.length)
  }, [])
  return (
    < div >
      {mode === 'view' ?
        <> <List setMode={setMode} setCurrentTitle={setCurrentTitle}></List>
          <button onClick={() => { setMode('add'); setCurrentTitle('') }} >新增</button>
        </>
        :
        <Detail
          setMode={setMode}
          currentTitle={currentTitle}
          currentCount={currentCount}
          updateCurrentCount={updateCurrentCount}></Detail>}

    </div >)
}
export default MyTodoList