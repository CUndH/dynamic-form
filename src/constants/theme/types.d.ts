interface ThemeTypes {
  mainBgColor: string
  className: string
  layoutLogoBg: string
  layoutLogoColor: string
  layoutMenuActiveBg: string
  layoutMenuSubActiveBg: string
  layoutMenuHoverBg: string
  layoutMenuColor: string
  layoutMenuHoverColor: string
  layoutMenuActiveColor: string
  layoutMenuWidth: string
  layoutMenuCollapseWidth: string
  elMenuItemHeight: string
  toolHeaderHeight: string
  toolHeaderBg: string
  contentBg: string
  tagsViewHeight: string
  tagsViewBg: string
  tagsViewItemBg: string
  tagsViewActiveBg: string
  tagsViewColor: string
  tagsViewActiveColor: string
  colorNormal: string
  colorPrimary: string
  colorSuccess: string
  colorDanger: string
}
interface ThemeConfigs {
  label: string
  value: ThemeTypes
  echartTheme: {
    [key: string]: string[]
  }
}
