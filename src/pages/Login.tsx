import axios from "axios";
import React, { SyntheticEvent, useState } from "react";
import Captcha from "../component/Captcha";
import '../assets/css/login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [captcha_id, setCaptchaId] = useState('')
    const [captcha, setCaptcha] = useState('')

    const navigate = useNavigate()

    const login = async (e: SyntheticEvent) => {
        e.preventDefault()
        const response = await axios.post("user/login", {
            username: username,
            password: password,
            captcha: captcha,
            captcha_id: captcha_id
        }).then(async () => {
            const { data } = await axios.get("user/info")
            console.log(data)
            navigate('/', { replace: true })
        })

        // storage.setToken(response.data.data)
        // console.log(response.data.data)

    }

    const getCaptchaId = (captchaId: string) => {
        setCaptchaId(captchaId)
    }

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

            <Captcha getCaptchaId={getCaptchaId} />

            <button className="btn btn-lg btn-primary btn-block" type="submit">登 录</button>
        </form>
        // </main>
    )
}

export default Login;