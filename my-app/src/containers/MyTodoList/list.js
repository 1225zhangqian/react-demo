import React, { useState, useEffect } from 'react';
import dataList from './data'
const List = () => {
  const [data, updateData] = useState(dataList);
  // useEffect(() => {
  //   updateData()
  // })

  return (<div>
    <ul>
      {data.map(i => <li>{i.title}</li>)}
    </ul>
  </div>)

}
export default List