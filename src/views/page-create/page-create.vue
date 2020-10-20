<template>
  <div>
    <a-button type="primary"
              @click="outProject">
      生成页面
    </a-button>
  </div>
</template>

<script>
export default {
  name: 'page-create',
  components: {},
  props: {},
  data () {
    return {
      projectPath: '/build-web/',
      selectPath: ''
    }
  },
  watch: {},
  computed: {
    outPath () {
      return `${this.selectPath}${this.projectPath}`
    }
  },
  methods: {
    // 导出工程
    outProject () {
      this.selectPathHandle()
      // this.createWeb()
    },
    // 选择保存路径
    selectPathHandle () {
      const self = this
      self.$tools.showOpenDialog().then(res => {
        console.log(res)
        if (!res.canceled) {
          self.selectPath = res.filePaths[0]
          self.createWeb()
        } else {
          console.log('取消操作！')
        }

      })
    },
    // 生成文件
    createWeb () {
      const self = this
      // 清空目录
      self.$tools.emptyPath(self.outPath)
      // 写入文件
      self.$tools.outputFile(`${self.outPath}text.html`, '你好nodejs 覆盖bghfdjghfdhjfdgfdjkihv')
    }
  },
  created () { },
  mounted () { }
}
</script>
<style lang="scss" scoped>
</style>
