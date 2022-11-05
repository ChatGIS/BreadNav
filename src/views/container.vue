<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import router from '../router'
import { useMainStore } from '../store'

const store = useMainStore()
let loginOrOutText = ref('')

onMounted(() => {
    loginOrOutText.value = store.isLogin ? '退出登录' : '请登录'
})

// 登录或退出
const loginOrOut = () => {
    store.isLogin = !store.isLogin
    if(store.isLogin === true){
        loginOrOutText.value = '退出登录'
    } else if(store.isLogin === false){
        loginOrOutText.value = '请登录'
        window.localStorage.removeItem('mbToken')
    }
    router.push('/login')
}



</script>

<template>
    <el-container>
        <el-header id="header">
            <div class="header-container">
                <Logo></Logo>
                <Menu></Menu>
                <Search></Search>
                <el-button type="primary" @click="loginOrOut">{{ loginOrOutText }}</el-button>
            </div>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer id="footer">关于本站</el-footer>
    </el-container>
</template>

<style scoped>

</style>