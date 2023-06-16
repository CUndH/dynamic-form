import htmlEscape from './htmlEscape'
import substring from './substring'
/**
 * 此方法用于实现关键字搜索时对于搜索结果的高亮处理
 * 已处理XSS注入情况，但需导入htmlEscape.js，请确认文件路径
 * 前端搜索关键字高亮处理，可返回字符串可直接使用v-html等方式进行编译
 * 可根据正则表达式自行设定关键字的匹配规则
 * 如有长度限制，可采用spliceString方法在字符串截断的情况下正确高亮关键字部分
 */

// 关键字高亮
const highlight = {
  /**
   * 关键字高亮
   * @param {string} Origin 需处理的字符串
   * @param {array/string} Keywords 需高亮处理的关键字数组/字符串
   * @param {string} Reg 正则表达式匹配规则
   * @param {string} Color 高亮用颜色字符串
   * 注意： 当Config为class时，Color不会生效
   * @param {string} Config 高亮处理逻辑配置 style表示以内联样式进行直接渲染，class表示以类名highlight-text进行渲染
   * @return {string} 处理后的字符串，可用v-html等方式进行渲染
   */
  highlight(
    Origin: string,
    Keywords: string | string[],
    Reg?: string,
    Color?: string,
    Config = 'style'
  ) {
    let titleString = Origin || ''
    let keywords: string[] = []
    if (typeof Keywords === 'string') {
      keywords.push(Keywords)
    } else {
      keywords = Keywords || keywords
    }
    const RegRule = Reg || ''
    const colorStr = Color || '#00cc26'
    if (!titleString) {
      return ''
    }
    const startTag = '{%HLS%}'
    const endTag = '{%HLE%}'
    const highlightStart = new RegExp(startTag, 'g')
    const highlightEnd = new RegExp(endTag, 'g')
    const highlightTag = new RegExp(endTag + startTag, 'g')
    keywords.forEach((item: string) => {
      let keyword = item.trim()
      if (keyword.length) {
        keyword = keyword.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1')
        const replaceReg = new RegExp(`(${keyword})`, RegRule)
        titleString = titleString.replace(replaceReg, `${startTag}$1${endTag}`)
      }
    })
    titleString = htmlEscape.htmlEncode(titleString)
    // 针对QQ浏览器做特殊处理
    if (titleString === 'null') {
      titleString = '<span>null</span>'
    }
    titleString = titleString.replace(highlightTag, '')
    if (Config === 'class' || Config === 'Class') {
      titleString = titleString.replace(highlightStart, `<span class="highlight-text">`)
    } else {
      titleString = titleString.replace(highlightStart, `<span style="color: ${colorStr}">`)
    }
    titleString = titleString.replace(highlightEnd, '</span>')
    return titleString
  },
  // 截断高亮处理
  spliceString(str, len, color) {
    const colorStr = color === undefined ? '#00cc26' : color
    const startTag = `<span style="color: ${colorStr}">`
    const endTag = '</span>'
    let calStart = 0 // span标签起始位置
    let calEnd = 0 // span标签闭合位置
    let pairCount = 0 // span标签计数
    let realLength = 0 // 实际内容长度
    let realIndex = 0 // 最终定位
    let result = str // 最终结果
    while (str.indexOf(startTag, calStart) >= 0 && realLength < len) {
      calStart = str.indexOf(startTag, calStart) + startTag.length
      pairCount += 1
      calEnd = str.indexOf(endTag, calStart) + endTag.length
      realLength = calEnd - (startTag.length + endTag.length) * pairCount
    }
    if (realLength > len) {
      const offset = realLength - (calEnd - endTag.length - calStart)
      if (offset >= len) {
        realIndex = calStart - startTag.length - (offset - len)
        result = substring(str, realIndex)
      } else {
        realIndex = calStart + len - offset
        result = substring(str, realIndex)
        result += endTag
      }
    } else {
      realIndex = calEnd + len - realLength
      result = substring(str, realIndex)
    }
    return result
  }
}

export default highlight
