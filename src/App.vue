<template>
  <div id="app">
    <a-layout id="components-layout-demo-top"
              class="layout">
      <a-layout-header class="layout-header-bg">
        <div class="logo" />
        <a-menu theme="light"
                mode="horizontal"
                :defaultSelectedKeys="menuCurrent"
                @click="selectMenuHandel"
                :style="{ lineHeight: '64px' }">
          <a-menu-item v-for="item in menus"
                       :key="item.path">
            <a-icon :type="item.icon" />{{item.title}}</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content>
        <a-card class="layout-content-box">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </a-card>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        demigods ©2020 Created by demigods
      </a-layout-footer>
    </a-layout>

  </div>
</template>

<script>
export default {
  name: 'web_create',
  data () {
    return {}
  },
  computed: {
    menus () {
      let list = []

      this.$router.options.routes.map(item => {
        if (!item.meta.hide) {
          list.push({
            title: item.meta.title,
            path: item.path,
            icon: item.meta.icon
          })
        }
      })
      return list
    },
    menuCurrent () {
      return [this.$route.path]
    }
  },
  methods: {
    selectMenuHandel ({ key }) {

      this.$router.push({ path: key })
    }
  }
}
</script>

<style>
/* CSS */
.layout-header-bg {
  background: #ffffff !important;
}
.layout-content-box {
  margin: 10px !important;
  height: calc(100vh - 153px);
}
</style>
