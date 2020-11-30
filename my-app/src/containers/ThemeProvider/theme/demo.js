import React, { Component } from "react"
import { Switch } from 'antd';
import "./demo.scss";
class ThemeDemo extends Component {
    state = {
        theme: "dark"
    }
    onChange = () => {
        this.setState({ theme: this.state.theme === "dark" ? "light" : "dark" })
    }
    render() {
        return <div >
            <Switch defaultChecked onChange={this.onChange} />  {this.state.theme}
            <p>example:</p>
            <div className="react-ui-theme" data-theme={this.state.theme}>
                <div className="box-wrap">
                    <div className="box-content"></div>
                </div>
            </div>
        </div>
    }
}


export default ThemeDemo
