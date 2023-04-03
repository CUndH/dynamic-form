class EventBus {
  static list: { [key: string]: Array<Function> } = {}

  // 订阅
  static listen(name: EventTypeName, fn: Function) {
    this.list[name] = this.list[name] || []
    this.list[name].push(fn)
  }

  // 发布
  static notify(name: EventTypeName, data?: any) {
    if (this.list[name]) {
      this.list[name].forEach((fn: Function) => {
        fn(data)
      })
    }
  }

  // 取消
  static cancel(name: EventTypeName) {
    if (this.list[name]) {
      Reflect.deleteProperty(this.list, name)
    }
  }

  // 只触发一次
  // static once(name: EventTypeName, fn: Function) {
  //   const _this = this
  //   const eventWrapper = function () {
  //     fn.apply(_this, [arguments])
  //     _this.cancel(name)
  //   }
  //   this.notify(name, eventWrapper)
  // }
}

export default EventBus

export enum EventTypeName {
  // 登出
  LOGOUT,
  // 无权限
  FORBIDDEN,
  // 重置密码
  RESET_PASSWORD,
  // 账户信息
  ACCOUNT_INFO,
  // 页面完成加载
  PAGE_LOADED,
  // 页面开始加载
  PAGE_START_LOAD
}
