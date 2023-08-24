const updateStyle = (style, oldCluster, newCluster) => {
  let newStyle = style;
  oldCluster.forEach((color, index) => {
    newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index]);
  });
  return newStyle;
};

const getThemeCluster = (theme) => {
  const tintColor = (color, tint) => {
    // 数字  字符串类型转换 16进制色值，这里必须要any类型, 转换太狠
    let red: any = parseInt(color.slice(0, 2), 16);
    let green: any = parseInt(color.slice(2, 4), 16);
    let blue: any = parseInt(color.slice(4, 6), 16);

    if (tint === 0) {
      // when primary color is in its rgb space
      return [red, green, blue].join(',');
    } else {
      red += Math.round(tint * (255 - red));
      green += Math.round(tint * (255 - green));
      blue += Math.round(tint * (255 - blue));
      red = red.toString(16);
      green = green.toString(16);
      blue = blue.toString(16);
      return `#${red}${green}${blue}`;
    }
  };

  const shadeColor = (color, shade) => {
    let red: any = parseInt(color.slice(0, 2), 16);
    let green: any = parseInt(color.slice(2, 4), 16);
    let blue: any = parseInt(color.slice(4, 6), 16);

    red = Math.round((1 - shade) * red);
    green = Math.round((1 - shade) * green);
    blue = Math.round((1 - shade) * blue);

    red = red.toString(16);
    green = green.toString(16);
    blue = blue.toString(16);
    return `#${red}${green}${blue}`;
  };

  const clusters = [theme];
  for (let i = 0; i <= 9; i++) {
    clusters.push(tintColor(theme, Number((i / 10).toFixed(2))));
  }
  // for (let i = 0; i <= 6; i++) {
  //   clusters.push(tintColor(theme, Number((i / 10).toFixed(2))));
  // }
  clusters.push(shadeColor(theme, 0.2));
  return clusters;
};

export default {
  updateStyle,
  getThemeCluster
};
