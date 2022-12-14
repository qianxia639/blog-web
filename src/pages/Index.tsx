import React, { useEffect, useState } from 'react'
import Wrapper from '../component/Wrapper'
import '../assets/css/blog.css'
import '../assets/css/me.css'
import axios from 'axios'
import { Blog } from '../models/Blog'
import Pagination from '../component/Pagination'
import { Link } from 'react-router-dom'
import moment from 'moment'
import BlogIndex from './blog/BlogIndex'
import BlogLatest from './blog/BlogLatest'
import { Type } from '../models/Type'

const Index = () => {
  // const [blogPageList, setBlogPageList] = useState([])
  const [typeLimitList, setTypeLimitList] = useState([new Type])
  // const [blogLatestList, setBlogLatestList] = useState([])
  // const [page, setPage] = useState(1)
  // const [lastPage, setLastPage] = useState(0)

  // 分类列表
  const getTypeLimitList = async () => {
    const response = await axios.get("type/limitList")
    setTypeLimitList(response.data.data)
  }

  // 最新博客列表
  // const getBlogLatestList = async () => {
  //   const response = await axios.get("blog/latestList")
  //   setBlogLatestList(response.data.data)
  // }

  // useEffect(() => {
  //   // 博客分页列表
  //   (
  //     async () => {
  //       const { data } = await axios.get(`blog/pageList?page=${page}`)
  //       setBlogPageList(data.data.dataList)
  //       setLastPage(data.data.lastPage)
  //     }
  //   )()
  // }, [page])  // 第二个参数，表示该参数发生变化时就执行一次

  useEffect(() => {
    getTypeLimitList()
    // getBlogLatestList()
  }, [])

  return (
    <Wrapper>
      {/* 左边 */}
      {/* container-fluid bv-example-row */}
      <div className="container">
        <div className="row">
          {/* 博客列表 */}
          <BlogIndex />
          {/* <div className="col-md-8 card-margin-top-max blog-main">
            <div className="card-deck">
              <div className="card">
                <h3 className="card-header text-info">博客</h3>

                {blogPageList.map((blog: Blog) => {
                  return (
                    <ul className='list-unstyled card-margin-top-small' key={blog.id}>
                      <li className="card ">
                        <div className="row">
                          <div className="col-md-8">
                            <div className="card-body">
                              <Link className="card-title" to={`/blog/${blog.id}/info`}>{blog.title}</Link>
                              <p className="card-text">{blog.content}</p>
                              <div className='d-flex justify-content-between align-items-center'>
                                <div className="text-musted">
                                  <img src="https://picsum.photos/200/150/?images=25" width={25} height={25} className='rounded-circle' alt="" />
                                  &nbsp;&nbsp;{blog.nickname} {blog.views} {moment(blog.updated_at).format('YYYY-MM-DD')}
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

            <Pagination page={page} lastPage={lastPage} pageChanged={setPage} />

          </div> */}

          {/* 分类列表 */}
          <div className="col-md-4 card-margin-top-max">
            <div className="card-deck">
              <div className="card">
                <header className="card-header text-info">分类</header>
                <div className="card-body">
                  <ul className="list-group">
                    {typeLimitList.map((item, index) => {
                      return (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                          {item.type_name}
                          <span className="badge badge-primary badge-pill">{item.amount}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* 最新博客 */}
            <BlogLatest/>
            {/* <div className="card card-margin-top" >
              <div className="card-header text-info">近期更新</div>
              <ul className="list-group list-group-flush">
                {blogLatestList.map((blog: Blog) => {
                  return (
                    <Link className="list-group-item" to={`/blog/${blog.id}/info`} key={blog.id}>{blog.title}</Link>
                  )
                })}
              </ul>
            </div> */}

          </div>
        </div>
      </div >
    </Wrapper >
  )
}

export default Index;