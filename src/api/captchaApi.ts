import service from '../utils/request'

/**
 * @description  验证码
 * @param 
 */
export const generateCaptcha = async () => {
    return await service({
        url: 'captcha/generate',
        method: 'post'
    })
}