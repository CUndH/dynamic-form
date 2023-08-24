// 生成各类随机数
const random = {
  /*
   * 生成随机长度字符串（可用作前端临时token等内容）
   * @param {Number} length 字符串
   * @param {string} string 自定义随机字符串 （默认未小写英文字符+数字）
   * @return {string} result 生成的随机字符串
   */
  randomString: function (length = 10, string?) {
    const str = string || 'abcdefghijklmnopqrstuvwxyz9876543210'
    let result = ''
    const strLen = str.length
    for (let i = 0; i < length; i++) {
      result += str.charAt(Math.floor(Math.random() * strLen))
    }
    return result
  },
  /*
   * 生成随机长度整数
   * @param {Number} range 数据范围
   * @return {Number} result 生成的随机整数
   */
  randomNumber: function (range = 10) {
    const rangeInput = Number(range)
    if (isNaN(rangeInput)) return NaN
    return Math.round(Math.random() * rangeInput)
  },
  /*
   * 生成随机长度浮点数
   * @param {Number} range 数据范围
   * @param {Number} fixCount 保留小数点位数
   * @return {Number} result 生成的随机浮点数
   */
  randomFloat: function (range = 10, fixCount = 2) {
    let sessionRange = range
    let fixCnt = fixCount
    while (sessionRange < 1) {
      sessionRange *= 10
      fixCnt += 1
    }
    const rangeInput = Number(range * Math.pow(10, fixCnt))
    if (isNaN(rangeInput)) return NaN
    const result = (random.randomNumber(rangeInput) / Math.pow(10, fixCnt)).toFixed(fixCnt)
    return parseFloat(result)
  },
  /*
   * 在随即范围内生成随机数
   * @param {Number} base 基准值（类似于原点）
   * @param {Number} range 波动范围
   * @param {Number} fixCount 保留小数点位数
   * @param {Number} min 最小值
   * min的意义主要是避免出现过于复杂的range以及增加数据波动，举例来说：如果需要在7~10之间的随机数。
   * 可以通过randomRange(8.5,1.5,1)的方式平均分布，也可以通过（8,2,0,7）的方式，让数据在7~8和8~10之间的分布概率为1：2的关系
   * @return {Number} result 生成的随机浮点数
   */
  randomRange: function (base = 0, range = 10, fixCount = 0, min) {
    const randomFlow = random.randomFloat(range, fixCount)
    let result
    if (this.randomNumber() > 5) {
      result = base + randomFlow
    } else {
      result = base - randomFlow
    }
    if (min) {
      return Math.max(min, parseFloat(result.toFixed(fixCount)))
    }
    return parseFloat(result.toFixed(fixCount))
  },
  /*
   * 生成随机颜色
   * @return {String} result 生成的随机色值 （#rrggbb）
   */
  randomColor: function (isHex = true) {
    const red = this.randomNumber(255)
    const green = this.randomNumber(255)
    const blue = this.randomNumber(255)
    if (isHex) {
      return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    }
    return `rgb(${red},${green},${blue})`
  }
}

export default random
