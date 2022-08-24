import axios from 'axios'
import React, { Component, useEffect, useState } from 'react'

const Captcha = (props: { captchaBase64: string, generateCaptcha: () => void }) => {

    // const [captcha_id, setCaptchaId] = useState('')
    // const [captcha_base64, setCaptchaBase64] = useState('')

    // const generateCaptcha = async () => {
    //     const {data} = await axios.post("http://localhost:6754/api/captcha/generate")
    //     setCaptchaId(data.data.captchaId)
    //     setCaptchaBase64(data.data.captchaBase64)
    //     props.it(captcha_id)
    // }

    // useEffect(() => {
    //     generateCaptcha()
    // }, [])

    return (
        <div>
            <img src={props.captchaBase64} onClick={props.generateCaptcha} />
        </div>
    )

}

export default Captcha;