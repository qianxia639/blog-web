import service from '../utils/request'

/**
 * @description  注册
 * @param data 注册信息
 */
export const register = async ({ ...data }) => {
    return await service({
        url: 'user/register',
        method: 'post',
        data: data
    })
}

/**
 * @description  登录
 * @param data 登录信息
 */
export const login = async ({ ...data }) => {
    return await service({
        url: 'user/login',
        method: 'post',
        data: data
    })
}