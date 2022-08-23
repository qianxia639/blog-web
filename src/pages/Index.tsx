import React, { useEffect, useState } from 'react'
import Wrapper from '../component/Wrapper'
import '../assets/css/blog.css'
import '../assets/css/me.css'
import axios from 'axios'
import { Blog } from '../models/Blog'


const Index = () => {
  const [blogPageList, setBlogPageList] = useState([])
  const [typeList, setTypeList] = useState([{ 'type_name': '', 'count': 0 }])
  const [blogLatestList, setBlogLatestList] = useState([])

  // 博客分页列表
  const getBlogPageList = async () => {
    const { data } = await axios.get("http://localhost:6754/api/blog/pageList")
    setBlogPageList(data.data.dataList)
  }

  // 分类列表
  const getTypeList = async () => {
    const response = await axios.get("http://localhost:6754/api/type/list")
    setTypeList(response.data.data)
  }

  // 最新博客列表
  const getBlogLatestList = async () => {
    const response = await axios.get("http://localhost:6754/api/blog/latestList")
    setBlogLatestList(response.data.data)
  }

  useEffect(() => {
    getBlogPageList()
    getTypeList()
    getBlogLatestList()
  }, [])

  return (
    <Wrapper>
      {/* 左边 */}
      {/* container-fluid bv-example-row */}
      <main className="container" role='main'>
        <div className="row">
          <div className="col-md-8 card-margin-max blog-main">
            <div className="card-deck">
              <div className="card">
                <h3 className="card-header text-info">博客</h3>

                {blogPageList.map((blog: Blog) => {
                  return (
                    <ul className='list-unstyled card-margin-small' key={blog.id}>
                      <li className="card ">
                        <div className="row">
                          <div className="col-md-8">
                            <div className="card-body">
                              <h4 className="card-tit">{blog.title}</h4>
                              <p className="card-text">{blog.content}</p>
                              <div className='d-flex justify-content-between align-items-center'>
                                <div className="text-musted">
                                  img, nickname, {blog.views}, {blog.updated_at}
                                </div>
                                <small className='text-musted'>
                                  <button className='btn btn-sm btn-outline-info' disabled type='button'>{blog.type_name}</button>
                                </small>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 media">
                            <div className="media-aside align-self-center">
                              <img src="https://picsum.photos/200/150/?images=25" width={200} height={150} alt="" />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  )
                })}
              </div>
            </div>
          </div>

          {/* 分类列表 */}
          <div className="col-md-4 card-margin-max">
            <div className="card-deck">
              <div className="card">
                <header className="card-header text-info">分类</header>
                <div className="card-body">
                  <ul className="list-group">
                    {typeList.map((item,index) => {
                      return (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                          {item.type_name}
                          <span className="badge badge-primary badge-pill">{item.count}</span>
                        </li>
                      )
                    })}
                    {/* <li className="list-group-item d-flex justify-content-between align-items-center">
                      dsf
                      <span className="badge badge-primary badge-pill">1</span>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            {/* 最新博客 */}
            <div className="card card-margin" >
              <div className="card-header text-info">近期更新</div>
              <ul className="list-group list-group-flush">
                {blogLatestList.map((blog: Blog) => {
                  return (
                    <li className="list-group-item" key={blog.id}>{blog.title}</li>
                  )
                })}
              </ul>
            </div>

          </div>
        </div>
      </main >
    </Wrapper >
  )
}

export default Index;