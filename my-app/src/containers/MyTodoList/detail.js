import React, { useState } from 'react'
import { dataList } from './data'
const Detail = props => {
  const [title, setTitle] = useState(props.currentTitle ? props.currentTitle.title : '');
  const saveHandle = () => {
    if (props.currentTitle) {
      dataList.map(i => {
        if (i.id === props.currentTitle.id) {
          i.title = title
        }
        return i
      })
    } else {
      let count = props.currentCount + 1
      dataList.push({ id: count, title })
      props.updateCurrentCount(count)
    }
    props.setMode('view')
  }
  return (<div>
    <p onClick={saveHandle}>保存</p>
    <textarea value={title} onChange={(e) => setTitle(e.target.value)} />
  </div>)
}
export default Detail