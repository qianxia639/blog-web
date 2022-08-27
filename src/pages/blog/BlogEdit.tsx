import React, { Component } from 'react'
import Wrapper from '../../component/Wrapper'
import '../../assets/css/me.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogEdit = () => {

    return (
        <Wrapper>
            <div className="container-fluid card-margin-top-max">
                <div className="row">
                    <div className="col-md-10 offset-md-1 card-margin-top-max">
                        <div className="card">
                            <form className='card-margin-top-small'>
                                <div className="form-group">
                                    <label htmlFor="inputTitle">标题</label>
                                    <input type="text" id='inputTitle' className='form-control' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputContent">内容</label>
                                    <ReactQuill theme="snow" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="typeSelect">类别</label>
                                    <select className="form-control" id="typeSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>

                                <div className='footer-button'>
                                    <button className="btn btn-info">保存</button>
                                    <button style={{ 'marginLeft': '1rem' }} className="btn btn-primary">发布</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default BlogEdit