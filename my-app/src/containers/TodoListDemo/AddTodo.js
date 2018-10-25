import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/index'
import { Form, Icon, Input, Button } from 'antd'
const FormItem = Form.Item

/* 无状态组件 */
/* let AddTodo = ({ dispatch }) => {
  let input

  return <div>
      <Form  className="login-form">
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
      </Form>
    </div>
}
AddTodo = connect()(AddTodo)
*/

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

class AddTodoForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields()
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form

    // Only show error after a field is touched.
    const addNameError = isFieldTouched('addName') && getFieldError('addName')
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={addNameError ? 'error' : ''}
          help={addNameError || ''}
        >
          {getFieldDecorator('addName', {
            rules: [{ required: true, message: 'Please input your addName!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="addName"
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Add Todo
          </Button>
        </FormItem>
      </Form>
    )
  }
}

const AddTodo = Form.create()(AddTodoForm)

export default AddTodo
