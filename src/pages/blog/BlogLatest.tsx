import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Blog } from "../../models/Blog"

const BlogLatest = () => {

  const [blogLatestList, setBlogLatestList] = useState([])

  // 最新博客列表
  // const getBlogLatestList = async () => {
  //   const response = await axios.get("blog/latestList")
  //   setBlogLatestList(response.data.data)
  // }

  useEffect(() => {
    (
      async () => {
        const { data } = await axios.get("blog/latestList")
        setBlogLatestList(data.data)
      }
    )()
  },[])

  return (
    <div className="card card-margin" >
      <div className="card-header text-info">近期更新</div>
      <ul className="list-group list-group-flush">
        {blogLatestList.map((blog: Blog) => {
          return (
            <Link className="list-group-item" to={`/blog/${blog.id}/info`} key={blog.id}>{blog.title}</Link>
          )
        })}
      </ul>
    </div>
  )
}

export default BlogLatest