// test/components/CountdownBanner.spec.ts
import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'             // <- IMPORT ref!
import CountdownBanner from '@/components/banners/CounterBanner.vue'

// Mock the countdown hook module
vi.mock('@/hooks/useCountDown', () => ({
  useCountdown: vi.fn(),
  formatMs: (ms: number) => `${Math.floor(ms / 1000)}s`, // simple mock
}))

import { useCountdown } from '@/hooks/useCountDown'

describe('CountdownBanner.vue', () => {
  it('renders banner text', () => {
    (useCountdown as any).mockReturnValue(ref(5000))

    const wrapper = mount(CountdownBanner, {
      props: {
        text: 'Flash Sale!',
        time: 10000,
      },
    })
    expect(wrapper.text()).toContain('Flash Sale!')
  })

  it('renders formatted time correctly', () => {
    (useCountdown as any).mockReturnValue(ref(5000))

    const wrapper = mount(CountdownBanner, {
      props: {
        text: 'Flash Sale!',
        time: 10000,
      },
    })

    const timerDiv = wrapper.find('div.flex.min-w-36')
    expect(timerDiv.exists()).toBe(true)
    expect(timerDiv.text()).toBe('5s')
  })

  it('applies custom background color when passed', () => {
    (useCountdown as any).mockReturnValue(ref(5000))

    const wrapper = mount(CountdownBanner, {
      props: {
        text: 'Flash Sale!',
        time: 10000,
        color: 'bg-red-500',
      },
    })
    expect(wrapper.classes()).toContain('bg-red-500')
  })

  it('does not show timer if remainingTime < 0', () => {
    (useCountdown as any).mockReturnValue(ref(-1))

    const wrapper = mount(CountdownBanner, {
      props: {
        text: 'Flash Sale!',
        time: 10000,
      },
    })

    expect(wrapper.find('div.flex.min-w-36').exists()).toBe(false)
  })
})