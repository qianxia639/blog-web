import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import Wrapper from '../../component/Wrapper';
import { Blog } from '../../models/Blog';
import '../../assets/css/me.css';
import { useParams } from 'react-router-dom';
import { Tag } from '../../models/Tag';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import MarkdownNavbar from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// children = { blog.content }
// components = {{
//     code({ node, inline, className, children, ...props }) {
//         const match = /language-(\w+)/.exec(className || '')
//         return !inline && match ? (
//             <SyntaxHighlighter
//                 children={String(children).replace(/\n$/, '')}
//                 style={githubGist}
//                 language={match[1]}
//                 PreTag="div"
//                 {...props}
//             />
//         ) : (
//             <code className={className} {...props}>
//                 {children}
//             </code>
//         )
//     }
// }}

const BlogInfo = () => {

    const [blog, setBlog] = useState(new Blog())
    const params = useParams()  // 获取路由参数

    const getBlog = async () => {
        const { data } = await axios.get(`blog/${params.id}`)

        setBlog(new Blog(
            data.data.id,
            data.data.type_name,
            data.data.nickname,
            data.data.title,
            data.data.content,
            data.data.views,
            data.data.updated_at,
            data.data.user,
            data.data.tags
        ))
        return data
    }

    useEffect(() => {
        getBlog().then(async (res) => {
            const resposne = await axios.put(`blog/incrViews?id=${res.data.id}`)
        })
        // (
        //     async () => {
        //         const { data } = await axios.get(`blog/${params.id}`)

        //         setBlog(new Blog(
        //             data.data.id,
        //             data.data.type_name,
        //             data.data.nickname,
        //             data.data.title,
        //             data.data.content,
        //             data.data.views,
        //             data.data.updated_at,
        //             data.data.user,
        //             data.data.tags
        //         ))
        //     }
        // )()
    }, [])

    return (
        <Wrapper>
            <main className="container" role='main'>
                <div className="row">
                    <div className="col-md-8 card-margin-top-max">
                        <div className="card">
                            <div className="card-body card-margin-top-max">
                                <h1 className='text-center'>{blog.title}</h1>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <small className="text-musted">
                                        <img src="https://picsum.photos/200/150/?images=25" width={25} height={25} className='rounded-circle' alt="" />
                                        &nbsp;&nbsp;{blog.nickname} {blog.type_name} {blog.views} {moment(blog.updated_at).format('YYYY-MM-dd')}
                                    </small>
                                </div>
                                {/* <p>{blog.content}</p> */}
                                <div className='article card-margin-top-max'>
                                    <ReactMarkdown
                                        children={blog.content}
                                        components={{
                                            code({ node, inline, className, children, ...props }) {
                                                const match = /language-(\w+)/.exec(className || '')
                                                return !inline && match ? (
                                                    <SyntaxHighlighter
                                                        showLineNumbers
                                                        style={githubGist}
                                                        language={match[1]}
                                                        PreTag="div"
                                                        {...props}
                                                    >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                                                ) : (
                                                    <code className={className} {...props}>
                                                        {children}
                                                    </code>
                                                )
                                            }
                                        }}
                                    ></ReactMarkdown>
                                </div>
                                <p className="card-text">
                                    <small className='text-musted'>
                                        标签 <i className="bi bi-tags-fill"></i> :
                                        {blog.tag.map((t: Tag) => {
                                            return (
                                                <span key={t.id}> {t.tag_name + '  '}</span>
                                            )
                                        })}
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 card-margin-top max">
                        <div className="navigation">
                            <MarkdownNavbar source={blog.content} />
                        </div>
                    </div>
                </div>
            </main>
        </Wrapper>
    )

}

export default BlogInfo;