type Callback = (error?: string | Error | undefined) => void

interface LengthRange {
  min: number
  max: number
  message: string
}

export const useValidator = () => {
  const required = (message?: string) => {
    return {
      required: true,
      message: message || '当前字段为必填'
    }
  }

  const lengthRange = (val: any, callback: Callback, options: LengthRange) => {
    const { min, max, message } = options
    if ((min >= 0 && val.length < min) || (max && val.length > max)) {
      callback(new Error(message))
    } else {
      callback()
    }
  }

  const notSpace = (val: any, callback: Callback, message: string) => {
    // 账户名不能有空格
    if (val.indexOf(' ') !== -1) {
      callback(new Error(message))
    } else {
      callback()
    }
  }

  const notSpecialCharacters = (val: any, callback: Callback, message: string) => {
    // 密码不能是特殊字符
    if (/[`~!@#$%^&*()_+<>?:"{},./;'[\]]/gi.test(val)) {
      callback(new Error(message))
    } else {
      callback()
    }
  }

  // 两个字符串是否想等
  const isEqual = (val1: string, val2: string, callback: Callback, message: string) => {
    if (val1 === val2) {
      callback()
    } else {
      callback(new Error(message))
    }
  }

  const needAllNumber = (rule: any, value: any, callback: any) => {
    const code = value.toString()
    const testReg = new RegExp('^\\d{6}$')
    if (testReg.test(code)) {
      callback()
    }
    callback(new Error('验证码为6位数字'), rule)
  }

  const isSafePassword = (rule: any, value: string, callback: any) => {
    const pwd = value.toString()
    const testReg = new RegExp(
      '^(?![A-Za-z0-9]+$)(?![a-z0-9\\W]+$)(?![A-Za-z\\W]+$)(?![A-Z0-9\\W]+$)[a-zA-Z0-9\\W]{6,18}$'
    )
    if (testReg.test(pwd)) {
      callback()
    }
    callback(new Error('密码需为6~18位的包含大小写字母，数字以及特殊字符的组合'), rule)
  }

  const isSinglePassword = (rule: any, value: string, callback: any) => {
    const pwd = value.toString()
    const testReg = new RegExp('^(?![A-Za-z]+$)(?![0-9]+$)[a-zA-Z0-9]+$')
    if (testReg.test(pwd)) {
      callback()
    }
    callback(new Error('密码需至少8位，且需包含英文字母及数字'), rule)
  }

  const isValidPhone = (rule: any, value: string, callback: any) => {
    const pwd = value.toString()
    const testReg = new RegExp(
      '^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\\d{8}$'
    )
    if (testReg.test(pwd)) {
      callback()
    }
    callback(new Error('手机号格式错误'), rule)
  }

  const isValidEmail = (rule: any, value: string, callback: any) => {
    const pwd = value.toString()
    const testReg = new RegExp('^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$')
    if (testReg.test(pwd)) {
      callback()
    }
    callback(new Error('邮箱格式错误'), rule)
  }

  return {
    required,
    lengthRange,
    notSpace,
    notSpecialCharacters,
    isEqual,
    needAllNumber,
    isSafePassword,
    isSinglePassword,
    isValidPhone,
    isValidEmail
  }
}
