import React from "react";
import { Button } from "antd";
import Modal from "../../components/modal/CommonModal";
import ReactTable from "react-table";
import "react-table/react-table.css";
class ModalExample extends React.Component {
  state = {
    visible: false,
    isOpenA: false,
    isOpenB: false
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
  openotherModal = e => {
    this.setState({
      isopen: true
    });
  };
  handleOkother = e => {
    this.setState({
      isopen: false
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
        <p>异步关闭</p>
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
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button key="back" onClick={this.openotherModal}>
              open
            </Button>
          ]}
        >
          <ReactTable data={data} columns={this.Columns(columns)} />
        </Modal>

        <Modal
          title="Basic Modal fff"
          isOpen={this.state.isopen}
          toggle={this.toggledd}
          size={"lg"}
          onOk={this.handleOkother}
        />
      </div>
    );
  }
}

export default ModalExample;
