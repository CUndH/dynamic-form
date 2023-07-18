// 生成随机长度的字符串（可用作token等内容）
const random = {
  /*
   * 生成随机长度字符串
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
  randomNumber: function (range = 10) {
    const rangeInput = Number(range)
    if (isNaN(rangeInput)) return NaN
    return Math.round(Math.random() * rangeInput)
  },
  randomFloat: function (range = 10, fixCount = 2) {
    const rangeInput = Number(range * Math.pow(10, fixCount))
    if (isNaN(rangeInput)) return NaN
    const result = (random.randomNumber(rangeInput) / Math.pow(10, fixCount)).toFixed(fixCount)
    return parseFloat(result)
  }
}

export default random
