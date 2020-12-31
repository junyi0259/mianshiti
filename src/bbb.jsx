import React, { Component } from 'react';

class BBB extends Component {
    debounce = (fn, wait = 200) => {
        let timer = null
        // 将 debounce 处理结果当作函数返回
        // 触发事件回调时执行这个返回函数
        return function (...args) {
            // 如果已经设定过定时器就清空上一次的定时器
            if (timer) clearTimeout(timer)

            // 开始设定一个新的定时器，定时器结束后执行传入的函数 fn
            timer = setTimeout(() => {
                fn.apply(this, args)
            }, wait)
        }
    }
    search=(val) => {
        console.log(val)
    }
    debounceSearch = (val) => {
        this.debounce(this.search(val),200)
    }
    render() {
        return (
            <input onChange={ e=>this.debounceSearch(e)}/>
        );
    }
}

export default BBB;