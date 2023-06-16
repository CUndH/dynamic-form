/**
 * 此处可直接引用自己项目封装好的 axios 配合后端联调
 */

import request from '@/utils/axios';

const REQUEST_ORIGIN = '';

//获取验证图片  以及token
export function reqGet(data) {
  return request.get({
    url: REQUEST_ORIGIN + '/code',
    data
  });
}

//滑动或者点选验证
export function reqCheck(params) {
  return request.post({
    url: REQUEST_ORIGIN + '/code/check',
    params
  });
}
