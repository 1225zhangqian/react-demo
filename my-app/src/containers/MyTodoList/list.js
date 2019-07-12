import React, { useState } from 'react';
import { dataList } from './data'
const List = props => {
  const [data, updateData] = useState(dataList);

  const dataFilter = (e) => {
    dataList.filter(i => e.target.value === i.title)
    updateData(dataList.filter(i => i.title.includes(e.target.value)))
  }
  const deleteHandle = (i) => {
    dataList.map(n => {
      if (n.id === i.id) {
        console.log(n.id)
      }
    })

    console.log(dataList)
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