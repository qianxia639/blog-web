import React, { Component } from 'react'
import Dashboard_Nav from './Dashboard_Nav'

export class Dashboard_Wrapper extends Component<any, any> {
    render() {
        return (
            <>
                <Dashboard_Nav />
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                        {this.props.children}
                    </div>
                </main>
            </>
        )
    }
}

export default Dashboard_Wrapper