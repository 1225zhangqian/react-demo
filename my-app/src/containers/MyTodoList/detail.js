import React, { useState } from 'react'

const Detail = props => {
  const [title, setTitle] = useState('view');

  return (<div>
    <p onClick={() => { props.setMode(); setTitle() }}>保存</p>
    <textarea>
      {title}
    </textarea>
  </div>)
}
export default Detail