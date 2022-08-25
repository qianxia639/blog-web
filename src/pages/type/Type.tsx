import PropTypes from 'prop-types'
import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../../component/Wrapper'
import '../../assets/css/me.css'
import axios from 'axios'
import BlogIndex from '../blog/BlogIndex'

const TypeDashboard = () => {

    const [typetList, setTypeList] = useState([{ 'id': 0, 'type_name': '' }])

    const [blogList,setBlogList] = useState([])
    const [page, setPage] = useState(1)
    const [lastPage, setLastPage] = useState(0)

    // 分类列表
    const getTypeList = async () => {
        const response = await axios.get("type/list")
        setTypeList(response.data.data)
    }

    // 点击类别查询对应博客
    const getBlogList = async (name:String) => {
        const {data} = await axios.get(`blog/list?name=${name}&page=${page}`)
        setLastPage(data.data.lastPage)
        setBlogList(data.data.dataList)
    }

    useEffect(() => {
        (
            async () => {
                const { data } = await axios.get("type/list")
                setTypeList(data.data)
            }
        )()
    }, [])

    return (
        <Wrapper>
            <div className="container">
                <div className="row">
                    <BlogIndex/>
                    {/* <div className="col-md-8 card-margin-max blog-main">
                        <div className="card-deck">
                            <div className="card">
                                <h3 className="card-header text-info">博客</h3>
                            </div>
                        </div>
                    </div> */}

                    <div className="col-md-4 card-margin-max">
                        <div className="card-deck">
                            <div className="card">
                                <header className="card-header text-info">分类</header>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        {typetList.map((item) => {
                                            return (
                                                <button onClick={() => getBlogList(item.type_name)} className='type-button btn btn-outline-primary rounded-pill' key={item.id}>{item.type_name}</button>
                                            )
                                        })}
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

export default TypeDashboard