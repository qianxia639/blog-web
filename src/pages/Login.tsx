import axios from "axios";
import React, { SyntheticEvent, useEffect, useState } from "react";
import Captcha from "../component/Captcha";

import '../assets/css/login.css';

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [captcha_id, setCaptchaId] = useState('')
    const [captcha, setCaptcha] = useState('')
    const [captcha_base64, setCaptchaBase64] = useState('')

    const login = async (e: SyntheticEvent) => {
        e.preventDefault()
        const response = await axios.post("http://localhost:6754/api/user/login", {
            username: username,
            password: password,
            captcha: captcha,
            captcha_id:captcha_id
        }).catch(err => {
            console.log(err.response.data)
        })
    }

    const generateCaptcha = async () => {
        const {data} = await axios.post("http://localhost:6754/api/captcha/generate")
        setCaptchaId(data.data.captchaId)
        setCaptchaBase64(data.data.captchaBase64)
    }

    useEffect(() => {
        generateCaptcha()
    }, [])

    return (
        // <main className="form-signin" role={'main'}>
            <form className="form-signin" onSubmit={login}>
                <h1 className="h3 mb-3 font-weight-normal text-center">登 录</h1>
                
                <input type="text" className="form-control" placeholder="请输入用户名" required autoFocus
                    onChange={e => setUsername(e.target.value)}
                />
                
                <input type="password" className="form-control" placeholder="请输入密码" required
                    onChange={e => setPassword(e.target.value)}
                />
                
                <input type="text" className="form-control" placeholder="请输入验证码" required
                    onChange={e => setCaptcha(e.target.value)}
                />

                <Captcha captchaBase64={captcha_base64} generateCaptcha={generateCaptcha} />

                <button className="btn btn-lg btn-primary btn-block" type="submit">登 录</button>
            </form>
        // </main>
    )
}

export default Login;