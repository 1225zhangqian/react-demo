import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/index'

/* 无状态组件 */
let AddTodo = ({ dispatch }) => {
  let input

  return <div>
    <form className="login-form"
      onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}
    >
      <input ref={node => {
        input = node
      }} />
      <button type="submit">Add Todo</button>
    </form>
  </div>
}
AddTodo = connect()(AddTodo)
export default AddTodo
