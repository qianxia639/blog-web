
const key = 'token'

const setToken = (value: string) => {
    window.localStorage.setItem(key, value)
}

const getToken = () => {
    return window.localStorage.getItem(key)
}

const removeToken = () => {
    window.localStorage.removeItem(key)
}

export default {
    setToken,
    getToken,
    removeToken,
    key
}

