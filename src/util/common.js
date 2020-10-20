
/**
 * @functionName importAll
 * @param {Array} r 文件列表
 * @param {Number} type 返回类型 0:数组;1:对象;
 * @return {Array} 返回导出对象
 * @description 模块动态引入，仅限于es6模块; importAll(require.context('.', true, /\.router\.js/))
 * @author 张航
 * @date 2020-04-27 15:45:41
 * @version V1.0.0
 */
export const importAll = (r, type = 0) => {
  const res = type === 1 ? {} : []
  r.keys().map(value => {
    if (type === 0) {
      r(value).default.map(item => {
        res.push(item)
      })
    }
    if (type === 1) {
      Object.assign(res, r(value))
    }
  })

  return res
}
