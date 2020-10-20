export default [
  {
    dataIndex: 'name',
    key: 'name',
    title: '文件名',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
]