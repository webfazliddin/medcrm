<script setup lang="ts">
import { computed, ref } from 'vue'

const drawer = ref(false)
const isCollapse = ref(false)

const togleSidebarMobile = () => {
  drawer.value = !drawer.value
}
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="appSidebar" v-model="isCollapse">
        <el-menu default-active="2" :collapse="isCollapse" class="el-menu-vertical-demo">
          <AppSidebar />
        </el-menu>
      </el-aside>
      <el-drawer v-model="drawer" :direction="'ltr'">
        <el-menu default-active="2">
          <AppSidebar />
        </el-menu>
      </el-drawer>
      <el-container>
        <el-header>
          <AppHeader @togle-sidebar-mobile="togleSidebarMobile" @togle-sidebar="toggleCollapse" />
        </el-header>
        <el-main>
          <RouterView />
        </el-main>
        <el-footer>
          <AppFooter />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
}

.el-menu {
  height: 100%;
}

.el-container {
  background: #f2f2f2 !important;
  height: 100vh;
}

.el-header {
  background: #fff !important;
  display: grid;
  align-items: center;
  height: 70px !important;
  margin: 20px 20px 10px 20px !important;
  border-radius: 10px !important;
}

.el-aside {
  width: auto !important;
}

.el-footer {
  position: fixed;
  bottom: 0 !important;
  width: 100%;
  padding: 0 !important;
  background: #ebedef !important;
  border-top: 1px solid #d8dbe0 !important;
}

.el-drawer__body {
  padding: 0 !important;
}

.el-drawer {
  width: 85% !important;
}

.appSidebar {
  display: none;

  @include breakpoint('lg') {
    display: block;
  }
}
</style>
