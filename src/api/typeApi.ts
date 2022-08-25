import service from '../utils/request'

/**
 * @description  获取分类列表
 * @param 
 */
export const getTypeList = async () => {
    return await service({
        url: 'type/list',
        method: 'get'
    })
}