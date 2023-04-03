/*
 * 自定义指令-文字溢出
 * 主要参数：lineHeight: 单行高度，lineClamp：最大换行数
 */
import type { Directive, DirectiveBinding } from 'vue'

const overflowFunc = (el: HTMLElement, binding: DirectiveBinding) => {
  const params = binding.value
  // 单行高度
  const lineHeight = params.lineHeight || 20
  // 最大换行数
  const lineClamp = params.lineClamp || 2
  // 最大高度计算
  const maxHeight = lineHeight * lineClamp + 5
  const moreInfoDom = el.nextElementSibling
  const parentDom = el.parentElement
  const innerText = el.innerText
  const originTagValue = innerText.split('、')
  const originTagValueLength = originTagValue.length
  if (parentDom && parentDom.scrollHeight > maxHeight) {
    if (moreInfoDom) moreInfoDom.innerHTML = `等<span>${originTagValueLength}</span>个`
    while (parentDom.scrollHeight > maxHeight) {
      const currentTextArr = el.innerText.split('、')
      if (currentTextArr.length === 1) {
        el.innerText = el.innerText.slice(0, el.innerText.length - 6)
        el.innerText += '...'
      } else {
        el.innerText = currentTextArr.slice(0, currentTextArr.length - 1).join('、')
      }
    }
  } else {
    if (moreInfoDom) moreInfoDom.innerHTML = ''
  }
}

const overflow: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    // console.log("mounted");
    overflowFunc(el, binding)
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    // console.log("updated");
    overflowFunc(el, binding)
  }
}

export default overflow
