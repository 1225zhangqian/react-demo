import React from 'react'

import { Affix, Table, Button } from 'antd'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  })
}

class TableDemo extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false
  }
  start = () => {
    this.setState({ loading: true })
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false
      })
    }, 1000)
  }
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    this.setState({ selectedRowKeys })
  }
  render() {
    const { loading, selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    }
    const hasSelected = selectedRowKeys.length > 0
    return (
      <div>
        <div
          style={{ height: 200,overflowY:'auto' }}
          ref={node => {
            this.container = node
          }}
        >
          <div style={{ height: 300 }}>
            <Affix target={() => this.container}>
              <Button type="primary">Fixed at the top of container</Button>
            </Affix>
            <p>ghgjhjkjkjkljklkkljkljkljkl</p>
            <p>ghgjhjkjkjkljklkkljkljkljkl</p>
            <p>ghgjhjkjkjkljklkkljkljkljkl</p>
            <p>ghgjhjkjkjkljklkkljkljkljkl</p>
            <p>ghgjhjkjkjkljklkkljkljkljkl</p>
            <p>ghgjhjkjkjkljklkkljkljkljkl</p>
            <p>ghgjhjkjkjkljklkkljkljkljkl</p>
            <p>ghgjhjkjkjkljklkkljkljkljkl</p>
            <p>ghgjhjkjkjkljklkkljkljkljkl</p>
            <p>ghgjhjkjkjkljklkkljkljkljkl</p>
            <p>ghgjhjkjkjkljklkkljkljkljkl</p>
            <p>ghgjhjkjkjkljklkkljkljkljkl</p>
            <p>ghgjhjkjkjkljklkkljkljkljkl</p>
            <p>ghgjhjkjkjkljklkkljkljkljkl</p>
            <p>ghgjhjkjkjkljklkkljkljkljkl</p>
            <p>ghgjhjkjkjkljklkkljkljkljkl</p>
            <p>ghgjhjkjkjkljklkkljkljkljkl</p>
            <p>ghgjhjkjkjkljklkkljkljkljkl</p>
            <p>ghgjhjkjkjkljklkkljkljkljkl</p>
            <p>ghgjhjkjkjkljklkkljkljkljkl</p>
          </div>
        </div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            Reload
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div>
    )
  }
}

export default TableDemo
