import { defineStore } from 'pinia'

// 定义容器
export const useMainStore = defineStore('main', {
    state: () => {
        return {
            isLogin: false,
            count: 100
        }
    },
    /*
    * 类似于组件的computed，用于封装计算属性，有缓存功能
    * */
    getters: {},
    /*
    * 类似于组件的methods,封装业务逻辑，修改 state
    * */
    actions: {}
})

// 2. 使用容器中的state

// 3. 修改state

// 4.容器中的action的使用