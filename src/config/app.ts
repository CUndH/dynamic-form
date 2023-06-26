import { useCache } from '@/utils/useCache'
import themes from '@/constants/theme'

const { wsCache } = useCache('localStorage')

export const appModules: ThemeWrap = {
  theme: wsCache.get('theme') || {
    mainBgColor: '#E4EDEA', // 主打色 (与label保持一致)
    className: 'normal', //获取特殊样式表(图片\渐变色主题等)
    layoutLogoBg: '#E4EDEA', // logo 块背景
    layoutLogoColor: '#ffffff', // logo 块字体颜色
    layoutMenuActiveBg: '#000000', // 菜单激活背景
    layoutMenuHoverBg: '#ecf2f0', // 菜单hover背景
    layoutMenuColor: '#04113F', // 菜单字体颜色
    layoutMenuHoverColor: '#04113F', // 菜单hover字体颜色
    layoutMenuActiveColor: '#ffffff', // 菜单active字体颜色
    layoutMenuWidth: '22rem', // 菜单展开宽度
    layoutMenuCollapseWidth: '72px', // 菜单收起后宽度
    elMenuItemHeight: '6rem', // 菜单栏高度
    toolHeaderHeight: '6.4rem', // 头部高度
    toolHeaderBg: '#ffffff', // 头部背景色
    contentBg: '#f6f6f6', // 内容页背景色
    tagsViewHeight: '32px', // 标签高度
    tagsViewBg: '#ffffff', // 标签背景
    tagsViewActiveBg: '#ffffff', // 标签激活背景
    tagsViewColor: '#04113F', // 标签字体颜色
    tagsViewActiveColor: '#78E067', // 标签字体激活颜色
    colorNormal: '#04113F', // 寻常灰黑文本
    colorPrimary: '#78e067', // 组件库primary样式
    colorDanger: '#ffc9cb', //组件库danger样式
    colorSuccess: '#527640' //组件库success样式
  }
}

export const themeConfigs: ThemeConfigs[] = [...themes]
