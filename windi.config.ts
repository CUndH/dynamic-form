import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      colors: {
        primary: '#FF0000', // todo 后面根据规则配置主题色
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1600px',
      },
    },
    fontSize: {
      'sm': '10px',
      'tiny': '12px',
      'base': '14px',
      'lg': '16px',
      'xl': '18px',
      '2xl': '20px',
      '3xl': '22px',
      '4xl': '24px',
    },
  },
});
