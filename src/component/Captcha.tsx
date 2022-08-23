import axios from 'axios'
import React, { Component, useEffect, useState } from 'react'

const Captcha = (props:any) => {

    const [captcha_id, setCaptchaId] = useState('')
    const [captcha_base64, setCaptchaBase64] = useState('')

    const generateCaptcha = async () => {
        const response = await axios.post("http://localhost:6754/api/captcha/generate")
        setCaptchaId(response.data.data.captchaId)
        setCaptchaBase64(response.data.data.captchaBase64)
        props.it(captcha_id)
    }

    useEffect(() => {
        generateCaptcha()
        // setCaptchaId(captcha_id)
       
    }, [])

    return (
        <div>
            <img src={captcha_base64} onClick={generateCaptcha} />
        </div>
    )

}

export default Captcha;