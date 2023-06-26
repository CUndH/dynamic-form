interface ThemeTypes {
  mainBgColor: string;
  className: string;
  layoutLogoBg: string;
  layoutLogoColor: string;
  layoutMenuActiveBg: string;
  layoutMenuHoverBg: string;
  layoutMenuColor: string;
  layoutMenuHoverColor: string;
  layoutMenuActiveColor: string;
  layoutMenuWidth: string;
  layoutMenuCollapseWidth: string;
  elMenuItemHeight: string;
  toolHeaderHeight: string;
  toolHeaderBg: string;
  contentBg: string;
  tagsViewHeight: string;
  tagsViewBg: string;
  tagsViewActiveBg: string;
  tagsViewColor: string;
  tagsViewActiveColor: string;
  colorNormal: string;
  colorPrimary: string;
  colorSuccess: string;
  colorDanger: string;
}
interface ThemeWrap {
  theme: ThemeTypes;
}
interface ThemeConfigs {
  label: string;
  value: ThemeTypes;
  echartTheme: {
    [key: string]: string[];
  };
}
