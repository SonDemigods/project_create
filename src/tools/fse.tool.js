// 导入文件工具包
import fse from 'fs-extra'

/**
 * @functionName emptyPath
 * @param {String} path 要清空的目录
 * @return {Boolean} 返回结果
 * @description 清空目录,不存在会创建，存在会清空
 * @author 张航
 * @date 2020-08-28 14:31:17
 * @version V1.0.0
 */

export const emptyPath = (path) => {
  fse.emptyDirSync(path)
}

/**
 * @functionName jsf
 * @param {*|String|Number|Boolean|Array|Object} 参数
 * @return {*|String|Number|Boolean|Array|Object} 返回结果
 * @description 方法描述
 * @author 张航
 * @date 2020-08-28 15:38:44
 * @version V1.0.0
 */

export const outputFile = (filePath, data) => {
  fse.outputFileSync(filePath, data)
} 
