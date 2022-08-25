import service from '../utils/request'

/**
 * @description  获取最新博客列表
 * @param 
 */
export const getBlogLatestList = async () => {
    return await service({
        url: 'blog/latestList',
        method: 'get'
    })
}

/**
 * @description  分页展示全部博客列表
 * @param page 页码
 */
export const getBlogPageList = async (page: number) => {
    return await service({
        url: `blog/latestList?page=${page}`,
        method: 'get'
    })
}

/**
 * @description  获取博客信息
 * @param id 博客Id
 */
export const getBlog = async (id: number) => {
    return await service({
        url: `blog/${id}`,
        method: 'get'
    })
}

/**
 * @description  增加浏览数
 * @param id 博客Id
 */
export const incrementViews = async (id: number) => {
    return await service({
        url: `blog/incrViews?id=${id}`,
        method: 'put'
    })
}