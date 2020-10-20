<template>
  <div>
    <a-button type="primary"
              @click="outProject">
      生成页面
    </a-button>
  </div>
</template>

<script>
const { dialog } = require('electron').remote
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
      dialog.showOpenDialog({
        //默认路径
        defaultPath: '',
        //选择操作，此处是打开文件夹
        properties: [
          'openDirectory'
        ],
        //过滤条件
        filters: [
          { name: 'All', extensions: ['*'] }
        ]
      }).then(res => {
        if (!res.canceled) {
          console.log(res)
          self.selectPath = res.filePaths[0]
          console.log(self.outPath)
          self.createWeb()
        } else {
          console.log('取消操作！')
        }

      })
    },
    // 生成文件
    createWeb () {
      const self = this
      console.log(self.outPath)
      // console.log(this.$tools)
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
