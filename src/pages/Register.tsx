import axios from "axios";
import React, { Component, SyntheticEvent } from "react";
import { Navigate } from "react-router-dom";
import Captcha from "../component/Captcha";
import '../assets/css/login.css';

class Register extends Component {

    username = '';
    password = '';
    password_confire = '';
    captcha = '';
    // captcha_id = '';

    state = {
        redirect: false,
        captcha_id: ''
    }

    register = async (e: SyntheticEvent) => {
        // 禁用默认表单行为
        e.preventDefault()
        const response = await axios.post("http://localhost:6754/api/user/register", {
            username: this.username,
            password: this.password,
            password_confire: this.password_confire,
            captcha: this.captcha,
            captcha_id: this.state.captcha_id
        })

        if (response.data.state) {
            this.setState({
                redirect: true
            })
        }
    }

    

    render() {

        if (this.state.redirect) {
            return <Navigate to={'/login'} />    // 等价于以前版本中的 Redirect
        }

        return (
            // <main className="form-signin">
            <form className="form-signin" onSubmit={this.register}>
                <h1 className="h3 mb-3 font-weight-normal text-center">注 册</h1>

                <input type="text" className="form-control" placeholder="请输入用户名" required autoFocus
                    onChange={e => this.username = e.target.value}
                />

                <input type="password" className="form-control" placeholder="请输入密码" required
                    onChange={e => this.password = e.target.value}
                />
                <input type="password" className="form-control" placeholder="请再次输入密码" required
                    onChange={e => this.password_confire = e.target.value}
                />

                <input type="text" className="form-control" placeholder="请再次输入验证码" required
                    onChange={e => this.captcha = e.target.value}
                />
                {/* <Captcha it={(e: any) => this.setState({ captcha_id: e })} /> */}

                <button className="btn btn-lg btn-primary btn-block" type="submit">注 册</button>
            </form>
            // </main>

        )
    }
}

export default Register;