import axios from 'axios'
import React, { Component, useEffect, useState } from 'react'

// props: { captchaBase64: string, generateCaptcha: () => void }
const Captcha = (props: any) => {

    const [captcha_base64, setCaptchaBase64] = useState('')

    const generateCaptcha = async () => {
        const { data } = await axios.post("captcha/generate")
        setCaptchaBase64(data.data.captchaBase64)

        props.getCaptchaId(data.data.captchaId)
        
    }

    useEffect(() => {
        generateCaptcha()
    }, [])

    return (
        <div>
            <img src={captcha_base64} onClick={generateCaptcha} />
        </div>
    )

}

export default Captcha;