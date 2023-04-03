import request from '@/utils/axios'

// const REQUEST_ORIGIN = "http://10.1.1.28:8002";
const REQUEST_ORIGIN = ''

// 获取设备列表
export const getDeviceListApi = (params): Promise<IResponse> => {
  return request.get({
    url: REQUEST_ORIGIN + '/poc/iot/device/page',
    params
  })
}

// 删除设备
export const deleteDeviceApi = (params): Promise<IResponse> => {
  return request.delete({
    url: REQUEST_ORIGIN + `/poc/power-station/device/map/removeByPwStationIdAndDeviceId`,
    params
  })
}

export const getDeviceDetailById = (params): Promise<IResponse> => {
  return request.get({
    url: REQUEST_ORIGIN + `/poc/iot/device/detail`,
    params
  })
}

export const getDevicePropertyHistory = (params): Promise<IResponse> => {
  return request.get({
    url: REQUEST_ORIGIN + `/poc/iot/device/property/history`,
    params
  })
}

export const getDevicePropertyRealtime = (params): Promise<IResponse> => {
  return request.get({
    url: REQUEST_ORIGIN + '/poc/iot/device/properties',
    params
  })
}

// 获取设备绑定列表
export const getDeviceMapListApi = (params): Promise<IResponse> => {
  return request.get({
    url: REQUEST_ORIGIN + '/poc/power-station/device/map/page',
    params
  })
}

export const saveDeviceMapApi = (data): Promise<IResponse> => {
  return request.post({
    url: REQUEST_ORIGIN + '/poc/power-station/device/map',
    data
  })
}
