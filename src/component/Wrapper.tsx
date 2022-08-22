import React, { Component } from "react";
import Nav from "./Nav";

// 使用 React.Component时 this.props.children 不行，故使用React.Component<any,any>
class Wrapper extends Component<any, any> {

    render() {
        return (
            <>
                <Nav />
                <div className="container">
                    <div className="row">
                        <main className="">
                            {this.props.children}
                        </main>
                    </div>
                </div>
            </>
        )
    }
}

export default Wrapper;