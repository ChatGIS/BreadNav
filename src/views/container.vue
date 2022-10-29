<script setup lang='ts'>

</script>

<template>
    <el-container>
        <el-header id="header">
            <div class="header-container">
                <Logo></Logo>
                <Menu></Menu>
                <Search></Search>
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