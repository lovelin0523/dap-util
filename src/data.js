const elementUtil = require('./element')
const dataName = '_dap-datas'
/**
 * 元素数据挂载方法
 */
module.exports = {
    /**
     * 移除指定数据
     * @param {Object} el
     * @param {Object} key
     */
    remove(el, key) {
        if (!elementUtil.isElement(el) && el != window) {
            throw new TypeError('The first argument must be an element')
        }
        let data = el[dataName] || {}
        //未指定参数,删除全部
        if (key === undefined || key === null || key === '') {
            el[dataName] = {}
        } else {
            delete data[key]
            el[dataName] = data
        }
    },

    /**
     * 判断是否含有指定数据
     * @param {Object} el
     * @param {Object} key
     */
    has(el, key) {
        if (!elementUtil.isElement(el) && el != window) {
            throw new TypeError('The first argument must be an element')
        }
        if (key === undefined || key === null || key === '') {
            throw new TypeError('The second parameter must be a unique key')
        }
        let data = el[dataName] || {}
        return data.hasOwnProperty(key)
    },

    /**
     * 获取元素指定数据
     * @param {Object} el
     * @param {Object} key
     */
    get(el, key) {
        if (!elementUtil.isElement(el) && el != window) {
            throw new TypeError('The first argument must be an element')
        }
        let data = el[dataName] || {}
        //未指定参数,返回全部
        if (key === undefined || key === null || key === '') {
            return data
        } else {
            return data[key]
        }
    },

    /**
     * 获取元素指定数据
     * @param {Object} el
     * @param {Object} key
     * @param {Object} value
     */
    set(el, key, value) {
        if (!elementUtil.isElement(el) && el != window) {
            throw new TypeError('The first argument must be an element')
        }
        if (key === undefined || key === null || key === '') {
            throw new TypeError('The second parameter must be a unique key')
        }
        let data = el[dataName] || {}
        data[key] = value
        el[dataName] = data
    }
}
