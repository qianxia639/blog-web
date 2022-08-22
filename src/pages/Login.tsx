import axios from "axios";
import React, { SyntheticEvent, useState } from "react";

import '../assets/css/login.css';

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [captcha_id, setCaptchaId] = useState('')
    const [captcha, setCaptcha] = useState('')

    const login = async (e:SyntheticEvent) => {
        e.preventDefault()
        const response = await axios.post("http://localhost:6754/api/user/login", {
            username: username,
            password: password
        })
    }

    return (
        <form className="form-signin" onSubmit={login}>
            <h1 className="h3 mb-3 font-weight-normal">登 录</h1>
            {/* <label htmlFor="username" className="sr-only">用户名</label> */}
            <input type="text" className="form-control" placeholder="请输入用户名" required autoFocus
                onChange={e => setUsername(e.target.value)}
            />
            {/* <label htmlFor="password" className="sr-only">密码</label> */}
            <input type="password" className="form-control" placeholder="请输入密码" required
                onChange={e => setPassword(e.target.value)}
            />
            <input type="text" className="form-control" placeholder="请输入验证码" required
                onChange={e => setCaptcha(e.target.value)}
            />
            {/* <label htmlFor="captcha" className="sr-only">验证码</label> */}
            <button className="btn btn-lg btn-primary btn-block" type="submit">登 录</button>
        </form>
    )
}

export default Login;