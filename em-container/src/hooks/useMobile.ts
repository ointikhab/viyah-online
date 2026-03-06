// src/hooks/useMobile.ts
import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Reactive hook to detect if the viewport is mobile.
 * @param breakpoint - screen width in pixels to consider "mobile" (default 640)
 */
export function useMobile(breakpoint = 640) {
  const isMobile = ref(window.innerWidth < breakpoint)

  const handleResize = () => {
    isMobile.value = window.innerWidth < breakpoint
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
    handleResize() // ensure correct value on mount
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return { isMobile }
}
