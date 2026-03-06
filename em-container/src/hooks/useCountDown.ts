import { ref, onMounted, onUnmounted, watch } from 'vue'

export function useCountdown(target: number | string) {
  const remaining = ref(0)
  let timerId: number | undefined

  function parseTargetTime(time: number | string): number {
    if (typeof time === 'number') {
      return time > Date.now() ? time : Date.now() + time * 1000
    }
    const parsed = Date.parse(time)
    return isNaN(parsed) ? Date.now() : parsed
  }

  function updateRemaining() {
    const diff = targetTime.value - Date.now()
    remaining.value = diff > 0 ? diff : 0
  }

  const targetTime = ref(parseTargetTime(target))

  onMounted(() => {
    console.log('the component is mounted');
    
    updateRemaining()
    timerId = window.setInterval(updateRemaining, 1000)
  })

  onUnmounted(() => {
    if (timerId) clearInterval(timerId)
  })

  watch(() => target, (newVal) => {
    targetTime.value = parseTargetTime(newVal)
    updateRemaining()
  })

  return remaining
}

export function formatMs(ms: number) {
  let totalSeconds = Math.floor(ms / 1000)
  const days = Math.floor(totalSeconds / (24 * 3600))
  totalSeconds %= 24 * 3600
  const hours = Math.floor(totalSeconds / 3600)
  totalSeconds %= 3600
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  const pad = (n: number) => n.toString().padStart(2, '0')

  return `${pad(days)}d : ${pad(hours)}h : ${pad(minutes)}m : ${pad(seconds)}s`
}
