import React, { useState } from 'react';
import { dataList } from './data'
const List = props => {
  const [data, updateData] = useState(dataList);

  const dataFilter = (e) => {
    dataList.filter(i => e.target.value === i.title)
    updateData(dataList.filter(i => i.title.includes(e.target.value)))
  }
  const deleteHandle = (i) => {
    dataList.splice(dataList.findIndex(item => item.id === i.id), 1)
    updateData(dataList.filter(n => n.id !== i.id))
  }
  const editHandle = (i) => {
    props.setCurrentTitle(i)
    props.setMode('edit')

  }

  return (
    <div>
      <input onChange={dataFilter} />
      <ul>
        {data.map(i => <li key={i.id}>{i.title}
          <span onClick={() => deleteHandle(i)}>删除</span><span onClick={() => editHandle(i)}>编辑</span>
        </li>)}
      </ul>
    </div>)

}
export default List