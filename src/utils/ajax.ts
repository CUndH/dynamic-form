/*
 *  处理json为formData
 */
export function formatFormData(val: Object) {
  if (val instanceof FormData) {
    return val
  } else {
    const postFormData = new FormData()
    for (const [key, value] of Object.entries(val)) {
      postFormData.append(key, value)
    }
    return postFormData
  }
}
