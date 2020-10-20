import { importAll } from '@/util/common'

// 动态引入工具文件
const tools = importAll(require.context('.', true, /\.tool\.js/), 1)

export default tools
