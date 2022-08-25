import axios from "axios"
import moment from "moment"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Pagination from "../../component/Pagination"
import { Blog } from "../../models/Blog"

const BlogIndex = () => {

    const [blogPageList, setBlogPageList] = useState([])
    const [page, setPage] = useState(1)
    const [lastPage, setLastPage] = useState(0)

    useEffect(() => {
        // 博客分页列表
        (
            async () => {
                const { data } = await axios.get(`blog/pageList?page=${page}`)
                setBlogPageList(data.data.dataList)
                setLastPage(data.data.lastPage)
            }
        )()
    }, [page])  // 第二个参数，表示该参数发生变化时就执行一次

    return (
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

        </div>

    )
}

export default BlogIndex