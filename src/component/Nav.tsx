import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../assets/css/me.css'
const Nav = () => {

    // const [user, setUser] = useState({
    //     nickname: ''
    // })

    // 页面渲染后，然后调用
    // useEffect(() => {
    //     (
    //         async () => {
    //             try {
    //                 const { data } = await axios.get("http://localhost:6754/api/user/info")
    //                 setUser(data)
    //             } catch (err) {
    //                 console.log(err)
    //             }
                
    //         }
    //     )()
    // }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand nav-font" href="#">LYY_BLOG</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/'}>首页</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/type"}>分类</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link" to={'/'}>编辑</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link" to={'/'}>留言墙</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link" to={'/'}>归档</Link>
                    </li>
                </ul>
                {/* <ul className="my-2 my-lg-0">
                    <li className="nav-item">{user?.nickname}</li>
                </ul> */}
                {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
            </div>
        </nav>
    )

}

export default Nav;