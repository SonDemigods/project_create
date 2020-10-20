<template>
  <div>
    <a-select default-value="lucy"
              style="width: 120px">
      <a-select-option value="lucy">
        Lucy
      </a-select-option>
    </a-select>
    <a-table :columns="tableColumns"
             :data-source="tableData">
      <a slot="name"
         slot-scope="text">{{ text }}</a>
      <span slot="tags"
            slot-scope="tags">
        <a-tag v-for="tag in tags"
               :key="tag"
               :color="tag.color">
          <a-icon :type="tag.icon" />
          {{ tag.name.toUpperCase() }}
        </a-tag>
      </span>
      <span slot="action"
            slot-scope="text, record">
        <a>编辑</a>
        <a-divider type="vertical" />
        <a>禁用</a>
      </span>
    </a-table>
  </div>
</template>

<script>
// 表格列
import columns from './columns'
// 标签类型
import tags from './tags.config'

export default {
  name: 'module-manage',
  components: {},
  props: {},
  data () {
    return {
      // 表格列
      tableColumns: columns,
      // 表格数据
      tableData: [],
    }
  },
  watch: {},
  computed: {},
  methods: {
    init () {
      const data = [{
        key: '1',
        name: 'common.js',
        tags: ['html', 'css', 'js'],
      }]
      let tableData = []
      data.map(item => {
        let itemCurrent = item
        if (item.tags) {
          let sitenTags = []
          item.tags.map(sitem => {

            if (typeof sitem === 'string') {
              console.log(tags)
              if (tags[sitem]) {
                sitenTags.push(tags[sitem])
              }
            } else if (typeof sitem === 'object') {
              sitenTags.push(sitem)
            }

          })
          itemCurrent.tags = sitenTags
        }
        tableData.push(itemCurrent)
      })
      this.tableData = tableData
      console.log(tableData)
    }
  },
  created () {
    this.init()
  },
  mounted () { }
}
</script>
<style lang="scss" scoped>
</style>