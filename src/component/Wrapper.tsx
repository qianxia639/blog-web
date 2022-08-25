import React, { Component } from "react";
import Nav from "./Nav";

// 使用 React.Component时 this.props.children 不行，故使用React.Component<any,any>
class Wrapper extends Component<any, any> {

    render() {
        return (
            <>
                <Nav />
                <div className="container-fluid">
                    {this.props.children}
                </div>

            </>
        )
    }
}

export default Wrapper;