import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

    const logout = async () => {
        await axios.post('user/logout')
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="nav-font" href="#">LYY_BLOG</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/'}>首页</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/type"}>分类</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link" to={'/edit'}>编辑</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link" to={'/'}>留言墙</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link" to={'/archive'}>归档</NavLink>
                    </li>
                </ul>

                <ul className="navbar-nav px-3">
                    <li className="nav-item nav-profile dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown" aria-expanded="false">
                            <span className="nav-profile-name">Louis Barnett</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                            <Link to={'/admin/user'} className="dropdown-item">
                                <i className="mdi mdi-settings text-primary"></i>
                                Settings
                            </Link>
                            <Link to={'/login'} className="dropdown-item" onClick={logout}>
                                <i className="mdi mdi-logout text-primary"></i>
                                Logout
                            </Link>
                        </div>
                    </li>
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
            </div>
        </nav>
    )

}

export default Nav;