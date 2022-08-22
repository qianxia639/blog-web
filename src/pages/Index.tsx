import React, { useEffect, useState } from 'react'
import Wrapper from '../component/Wrapper'
import '../assets/css/blog.css'
import axios from 'axios'
import { Blog } from '../models/Blog'


const Index = () => {
  const [blogPageList, setBlogPageList] = useState([])
  const [typeList, setTypeList] = useState([])
  const [blogLatestList, setBlogLatestList] = useState([])

  // 博客分页列表
  const getBlogPageList = async () => {
    const { data } = await axios.get("http://localhost:6754/api/blog/pageList")
    setBlogPageList(data.data.data)
    console.log(data.data)
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
      <div className="container">
        <div className="row mb-2">

          {blogPageList.map((blog: Blog) => {
            return (
              <div className="col-md-8" key={blog.id}>
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0">{blog.title}</h3>
                    <p className="card-text mb-auto">{blog.content}</p>
                    <div className="mb-1 text-muted">Nov 12</div>
                    <a href="#" className="stretched-link">Continue reading</a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  </div>
                </div>
              </div>
            )
          })}

          {/* 右边 */}
          <div className="col-md-4 blog sidebar">
            <div className="p-4 mb-3 bg-light rounded">
              <h4 className="font-italic">About</h4>
              <p className="mb-0">Saw you downtown singing the Blues. Watch you circle the drain. Why don't you let me stop by? Heavy is the head that <em>wears the crown</em>. Yes, we make angels cry, raining down on earth from up above.</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )

}

export default Index;