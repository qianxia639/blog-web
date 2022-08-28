import React, { Component, useEffect, useState } from 'react'
import Wrapper from '../component/Wrapper'
import '../assets/css/me.css'
import axios from 'axios'


const Archive = () => {

    const [archiveList, setArchiveList] = useState({})
    const [total, setTotal] = useState(0)

    useEffect(() => {
        (
            async () => {
                const { data } = await axios.get('archive/list')
                setArchiveList(data.data)
                setTotal(data.data.total)
            }
        )()
    }, [])

    return (
        <Wrapper>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1 card-margin-top-max">
                        <div className="card-deck">
                            <div className="card-body">
                                <div className="card-headre text-info">
                                    <div className="list-group-item w-100 d-flex justify-content-between">
                                        <h4 className="mb-1">档案</h4>
                                        <h4>共 {total} 篇</h4>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <h3 className="archive-text card-margin-top-max">2022</h3>
                        <div className="card-deck card-margin-top-max">
                            <div className="card row pre-scrollable">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">
                                                This is a Test Title
                                                <button style={{ "marginLeft": '2vh' }} className="btn btn-outline-info btn-sm" disabled>02-16</button>
                                            </h5>
                                            <button className="btn btn-outline-info btn-sm" disabled>Golang</button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Archive