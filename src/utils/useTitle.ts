import { watch, ref } from 'vue'
import { isString } from '@/utils/is'

const PAGE_TITLE = import.meta.env.VITE_APP_TITLE

export const useTitle = (newTitle?: string) => {
  const title = ref(newTitle ? `${PAGE_TITLE} - ${newTitle}` : PAGE_TITLE)

  watch(
    title,
    (n, o) => {
      if (isString(n) && n !== o && document) {
        document.title = n
      }
    },
    { immediate: true }
  )

  return title
}
