import React from "react";
import { Button } from "antd";
import Modal from "../../components/modal/index";
import ReactTable from "react-table";
import "react-table/react-table.css";
class ModalExample extends React.Component {
  state = {
    visible: false,
    isOpenA: false,
    isOpenB: false,
    isOpenC: false,
    isOpenE: false
  };
  toggle = e => {
    const name =
      e.target && e.target.getAttribute("modalid")
        ? e.target.getAttribute("modalid")
        : e;
    this.setState({
      [name]: !this.state[name]
    });
  };
  handleOk = (e, ModalId) => {
    this.toggle(ModalId);
  };
  handleCancel = (e, ModalId) => {
    this.toggle(ModalId);
  };
  openOtherModal = () => {
    this.setState({
      isOpenC: true
    });
  };
  Confirm = () => {
    Modal.confirm({
      title: "Confirm",
      content: "Bla bla ...",
      okText: "确认",
      cancelText: "取消"
    });
  };
  Columns = Columns => {
    return (
      Columns &&
      Columns.length > 0 &&
      Columns.map(i => {
        if (i.Cell === "option") {
          i.Cell = `<span className="number">{props.value} >点击</button></span>`;
        }
        return i;
      })
    );
  };
  render() {
    const data = [
      {
        name: "Tanner Linsley",
        age: 26,
        friend: {
          name: "Jason Maurer",
          age: 23
        }
      },
      {
        name: "Tanner Linsley",
        age: 26,
        friend: {
          name: "Jason Maurer",
          age: 23
        }
      }
    ];
    const columns = [
      {
        Header: "Name",
        accessor: "name" // String-based value accessors!
      },
      {
        id: "age",
        Header: "Age",
        accessor: "age",
        Cell: "option" // Custom cell components!
      },
      {
        id: "friendName", // Required because our accessor is not a string
        Header: "Friend Name",
        accessor: d => d.friend.name // Custom value accessors!
      },
      {
        Header: props => <span>Friend Age</span>, // Custom header components!
        accessor: "friend.age"
      }
    ];
    return (
      <div>
        <hr />
        <p>reactstrap modal</p>
        <hr />
        <p>基本</p>
        <Button type="primary" modalid="isOpenA" onClick={this.toggle}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          ModalId="isOpenA"
          isOpen={this.state.isOpenA}
          toggle={this.toggle}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <p>自定义页脚</p>
        <Button type="primary" modalid="isOpenB" onClick={this.toggle}>
          Open Modal with async logic
        </Button>
        <Modal
          title="Basic Modal"
          isOpen={this.state.isOpenB}
          ModalId="isOpenB"
          toggle={this.toggle}
          size={"lg"}
          footer={[
            <Button key="back" modalid="isOpenB" onClick={this.toggle}>
              Return
            </Button>,
            <Button key="other" onClick={this.openOtherModal}>
              open other modal
            </Button>
          ]}
        >
          <ReactTable data={data} columns={this.Columns(columns)} />
        </Modal>

        <Modal
          title="Basic Modal fff"
          isOpen={this.state.isOpenC}
          ModalId="isOpenC"
          toggle={this.toggle}
          size={"lg"}
          onOk={this.handleOk}
        />
        <p>确认对话框</p>
        <Button type="primary" modalid="isOpenD" onClick={this.Confirm}>
          Confirm
        </Button>
        <p>国际化</p>
        <Button type="primary" modalid="isOpenE" onClick={this.toggle}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          ModalId="isOpenE"
          isOpen={this.state.isOpenE}
          toggle={this.toggle}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="确认"
          cancelText="取消"
        />
      </div>
    );
  }
}

export default ModalExample;
