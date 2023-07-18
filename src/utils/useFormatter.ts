import dayjs from 'dayjs'
import { isDef } from '@/utils/is'

export const timeFormatter = (row, key) => {
  let timeData = row[key].toString()
  if (timeData) {
    const isTimestampReg = new RegExp('^-?[1-9]\\d*$', 'g')
    if (isTimestampReg.test(timeData)) {
      while (timeData.length < 13) {
        timeData += '0'
      }
      timeData = parseInt(timeData)
    }
    return dayjs(timeData).format('YYYY-MM-DD HH:mm:ss')
  } else {
    return '-'
  }
}

export const stringFormatter = (row, key) => {
  return isDef(row[key]) ? row[key] : '-'
}
