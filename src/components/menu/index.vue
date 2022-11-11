<template>
    <el-menu class="menu" :default-active="activeIndex" router="true" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/recommend">推荐</el-menu-item>
        <el-menu-item index="/resource">资源</el-menu-item>
        <el-menu-item index="/my">我的</el-menu-item>
    </el-menu>
</template>

<script setup lang="ts">import { ref } from 'vue'

const activeIndex = ref('/recommend')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped>
.menu {
    flex: 1 0 auto;
    margin-left: 35px;
}
</style>
