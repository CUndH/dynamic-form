# vue3-template

海澜智云前端组 Vue3 前端基础架构

技术栈：
Vue3 + TypeScript + Vue-Router + Pinia

基础依赖：
Lodash， Echarts， Element-plus，dayjs，mockjs

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

[WebStorm](https://www.jetbrains.com/webstorm/)

# 遗留问题

`1` 左上，有一个同色的大面积阴影，没调出效果图的样子。

`2` 右上（src/views/Index/components/Count.vue 和 CountItem.vue）
圆圈色块颜色不能随主题更换。

`3` 左中左（src/views/Index/components/DataStorage.vue 和 DataStorageItem.vue）
右上角的图片不能随主题更换。

`4` 两个饼图，样式没有调整，样式和图例没调出效果图的样子。
屏幕尺寸改变时，图例可能被遮挡。
图例间的水平间隔和垂直间隔是同一个参数，没法像效果图一样水平间隔大垂直间隔小，或者可以增加图例的长度让文字留空，缩小间隔，暂未尝试。

`5` 除了三个echarts图表，剩下的内容超过现在的条数时，无法完整显示，暂时没有尝试引入swiper。

`6` 部分主题左下角是两个透明度，部分主题左下角是一个透明度。


# 其它改变或考虑

`1` 效果图没有顶上的一行文字，已删除。

`2` 考虑到屏幕尺寸太小时变形严重，写死了固定的最小高度。

`3` 默认按钮每个组件都写一遍不利于维护，暂时只保留了左上角的一个按钮。
之前考虑把左边文字右边按钮也做成组件，但是效果图有些没按钮，有些不是按钮，因此暂未新建组件。

`4` 左中左，没有找到table给列增加颜色的属性，同时考虑到暂不确定是右边留白还是要显示两列，暂时使用了div flex。
