import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Input, Icon, Button, Row, Col } from 'antd'
const FormItem = Form.Item

function InputList(props) {
  const dynaacData = props.dynaacData
  if (dynaacData) {
    const listItems = dynaacData.map(temp => (
      <Input
        style={{ width: '60%' }}
        key={temp.id}
        defaultValue={temp.val}
        placeholder="Basic usage"
      />
    ))
    return <div>{listItems}</div>
  } else {
    return <Input style={{ width: '60%' }} placeholder="nodata" />
  }
}
// let uuid = 0
class DynamicFieldSet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uuid: this.props.dynaacData ? this.props.dynaacData.length : 0
    }
  }

  remove = k => {
    const { form } = this.props
    // can use data-binding to get
    const keys = form.getFieldValue('keys')
    // We need at least one passenger
    if (keys.length === 1) {
      return
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k)
    })
  }

  add = () => {
    const { form } = this.props
    // can use data-binding to get
    const keys = form.getFieldValue('keys')
    /*  从父组件获取值,取长度*/
    const nextKeys = keys.concat(this.state.uuid)
    this.state.uuid++
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys
    })
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
    const { getFieldDecorator, getFieldValue } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 }
      }
    }
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 }
      }
    }
    /* getFieldDecorator('keys', { initialValue: [] }) */
    //动态赋值
    getFieldDecorator('keys', {
      initialValue: this.props.dynaacData ? this.props.dynaacData : []
    })
    const keys = getFieldValue('keys')
    const formItems = keys.map((k, index) => {
      return (
        <FormItem
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          label={index === 0 ? 'Passengers' : ''}
          required={false}
          key={k.id}
        >
          {/* In input form

          {getFieldDecorator('member[0].name.firstname', {})(<input/>)}
          {getFieldDecorator('member[1].name.firstname', {})(<input/>)}
          this.props.form.getFieldsValue() 返回数据结构为

          members: [{ name: {firstname: "xxx"} }, { name: {firstname: "yyy"} }]
          */}
          {getFieldDecorator(`names[${index}]`, {
            //赋值操作
            initialValue: k.val,
            validateTrigger: ['onChange', 'onBlur'],
            rules: [
              {
                required: true,
                whitespace: true,
                message: "Please input passenger's name or delete this field."
              }
            ]
          })(
            <Input 
              placeholder="passenger name"
              style={{ width: '60%', marginRight: 8 }}
            />
          )}
          {keys.length > 1 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              disabled={keys.length === 1}
              onClick={() => this.remove(k)}
            />
          ) : null}
        </FormItem>
      )
    })
    return <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col offset={1}>
            <p>手动遍历实现动态表单</p>
          </Col>
        </Row>
        <hr />
        <FormItem label="label " {...formItemLayout}>
          <InputList dynaacData={this.props.dynaacData} />
        </FormItem>
        <Row>
          <Col offset={1}>
            <p>ant的动态表单</p>
          </Col>
        </Row>
        <hr />
        {formItems}
        <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
            <Icon type="plus" /> Add field
          </Button>
        </FormItem>
        <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
  }
}

const WrappedDynamicFieldSet = Form.create()(DynamicFieldSet)
/* ReactDOM.render(<WrappedDynamicFieldSet />, document.getElementById('root')) */

export default WrappedDynamicFieldSet
