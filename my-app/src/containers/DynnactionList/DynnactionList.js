import React from 'react'
import { Row, Col, List, Button } from 'antd'
import Dynaactionform from '../Dynaactionform/Dynaactionform'

function NumberList(props) {
  const dynaacData = props.dynaacData
  if (dynaacData){
    const listItems = dynaacData.map(temp => (
      <li key={temp.id}>{temp.val}</li>
    ))
    return <div><ul>{listItems}</ul></div>
  }else{
    return <p>nodata</p>
  }
} 
class DynnactionList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, title: 'title1', item: [{ id: 1, val: 'value1' }] },
        { id: 2, title: 'title2' },
        { id: 3, title: 'title3' }
      ],
      dynaacData: []
    }
  }

  handleAdd = () => {
    let data = this.state.data
    data.push({
      id: data.length + 1,
      title: 'title' + (data.length + 1)
    })
    this.setState({ data: data })
  }

  handleEdit = i => {
    let tempList = []
    const data = this.state.data
    data.map(
      temp =>{
          if (i === temp.id) {
            tempList = temp.item
          }
        }
    )
    this.setState({ dynaacData: tempList })
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={12}>
            <Button type="primary" htmlType="button" onClick={this.handleAdd}>
              添加
            </Button>
            <hr />
            <List
              size="large"
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={this.state.data}
              renderItem={item => (
                <List.Item onClick={() => this.handleEdit(item.id)}>
                  {item.title}
                </List.Item>
              )}
            />
          </Col>
          <Col span={12}>
            <NumberList dynaacData={this.state.dynaacData} />
            <Dynaactionform dynaacData={this.state.dynaacData}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default DynnactionList
